import { DirectSignerBase } from '@interchainjs/cosmos/signers/direct';
import { CosmosDirectDoc, Encoder, SignerOptions } from '@interchainjs/cosmos/types';
import { DirectDocAuth } from '@interchainjs/cosmos/types/docAuth';
import { IDirectGenericOfflineSigner, isOfflineDirectSigner, OfflineDirectSigner } from '@interchainjs/cosmos/types/wallet';
import { Auth, HttpEndpoint } from '@interchainjs/types';

import { EthAccount } from '../accounts/eth-account';
import { defaultSignerOptions } from '../defaults';
import { XplaDirectSigner } from '../types';
import { CosmosDocSigner } from '@interchainjs/cosmos/base';
import { DirectSigBuilder } from '@interchainjs/cosmos/builder/direct-tx-builder';
import { BaseCosmosTxBuilderContext } from '@interchainjs/cosmos/base/builder-context';

/**
 * DirectDocSigner is a signer for Direct document.
 */
export class DirectDocSigner extends CosmosDocSigner<CosmosDirectDoc> {
  getTxBuilder(): DirectSigBuilder {
    return new DirectSigBuilder(new BaseCosmosTxBuilderContext(this));
  }
}


/**
 * DirectDocSigner is a signer for xpla Direct document.
 */
export class DirectSigner
  extends DirectSignerBase
  implements XplaDirectSigner
{
  constructor(
    auth: Auth,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options: SignerOptions = defaultSignerOptions.Cosmos
  ) {
    const opt = { ...options };
    super(auth, encoders, endpoint, opt);
  }

  /**
   * Get inj account from the signer.
   */
  async getAccount() {
    return new EthAccount(
      await this.getPrefix(),
      this.auth,
      this.config.publicKey.isCompressed
    );
  }

  /**
   * Create DirectSigner from wallet.
   * If there're multiple accounts in the wallet, it will return the first one by default.
   */
  static async fromWallet(
    signer: OfflineDirectSigner | IDirectGenericOfflineSigner,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auth: DirectDocAuth;

    if(isOfflineDirectSigner(signer)){
      [auth] = await DirectDocAuth.fromOfflineSigner(signer);
    } else {
      [auth] = await DirectDocAuth.fromGenericOfflineSigner(signer);
    }

    return new DirectSigner(auth, encoders, endpoint, options);
  }

  /**
   * Create DirectSigners from wallet.
   * If there're multiple accounts in the wallet, it will return all of the signers.
   */
  static async fromWalletToSigners(
    signer: OfflineDirectSigner | IDirectGenericOfflineSigner,
    encoders: Encoder[],
    endpoint?: string | HttpEndpoint,
    options?: SignerOptions
  ) {
    let auths: DirectDocAuth[];

    if(isOfflineDirectSigner(signer)) {
      auths = await DirectDocAuth.fromOfflineSigner(signer);
    } else {
      auths = await DirectDocAuth.fromGenericOfflineSigner(signer);
    }

    return auths.map((auth) => {
      return new DirectSigner(auth, encoders, endpoint, options);
    });
  }
}
