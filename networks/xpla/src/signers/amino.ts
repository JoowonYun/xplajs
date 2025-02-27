import { AminoSignerBase } from '@interchainjs/cosmos/signers/amino';
import { BaseCosmosTxBuilder, CosmosDocSigner } from '@interchainjs/cosmos/base';
import { BaseCosmosTxBuilderContext } from '@interchainjs/cosmos/base/builder-context';
import { AminoSigBuilder, AminoTxBuilder } from '@interchainjs/cosmos/builder/amino-tx-builder';
import {
  AminoConverter,
  CosmosAminoDoc,
  Encoder,
  SignerOptions,
} from '@interchainjs/cosmos/types';
import { AminoDocAuth } from '@interchainjs/cosmos/types/docAuth';
import { IAminoGenericOfflineSigner, isOfflineAminoSigner, OfflineAminoSigner } from '@interchainjs/cosmos/types/wallet';
import { Auth, HttpEndpoint } from '@interchainjs/types';

import { EthAccount } from '../accounts/eth-account';
import { defaultSignerOptions } from '../defaults';
import { XplaAminoSigner } from '../types';

/**
 * AminoDocSigner is a signer for Amino document.
 */
export class AminoDocSigner extends CosmosDocSigner<CosmosAminoDoc> {
  getTxBuilder(): AminoSigBuilder {
    return new AminoSigBuilder(new BaseCosmosTxBuilderContext(this));
  }
}

/**
 * AminoDocSigner is a signer for inj Amino document.
 */
export class AminoSigner
  extends AminoSignerBase<CosmosAminoDoc>
  implements XplaAminoSigner
{
  constructor(
    auth: Auth,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options: SignerOptions = defaultSignerOptions.Cosmos
  ) {
    const opt = { ...defaultSignerOptions.Cosmos, ...options };
    super(auth, encoders, converters, endpoint, opt);
  }

  /**
   * Get eth account from the signer.
   */
  async getAccount() {
    return new EthAccount(
      await this.getPrefix(),
      this.auth,
      this.config.publicKey.isCompressed
    );
  }

  getTxBuilder(): BaseCosmosTxBuilder<CosmosAminoDoc> {
    return new AminoTxBuilder(new BaseCosmosTxBuilderContext(this));
  }

  /**
   * create AminoSigner from wallet.
   * if there're multiple accounts in the wallet, it will return the first one by default.
   */
  static async fromWallet(
    signer: OfflineAminoSigner | IAminoGenericOfflineSigner,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auth: AminoDocAuth;

    if(isOfflineAminoSigner(signer)){
      [auth] = await AminoDocAuth.fromOfflineSigner(signer);
    } else {
      [auth] = await AminoDocAuth.fromGenericOfflineSigner(signer);
    }

    return new AminoSigner(auth, encoders, converters, endpoint, options);
  }

  /**
   * create AminoSigners from wallet.
   * if there're multiple accounts in the wallet, it will return all of the signers.
   */
  static async fromWalletToSigners(
    signer: OfflineAminoSigner | IAminoGenericOfflineSigner,
    encoders: Encoder[],
    converters: AminoConverter[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auths: AminoDocAuth[];

    if(isOfflineAminoSigner(signer)) {
      auths = await AminoDocAuth.fromOfflineSigner(signer);
    } else {
      auths = await AminoDocAuth.fromGenericOfflineSigner(signer);
    }

    return auths.map((auth) => {
      return new AminoSigner(auth, encoders, converters, endpoint, options);
    });
  }
}
