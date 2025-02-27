import { buildTx, SigningClientResolver } from "../../../../../helper-func-types";
import { buildUseMutation } from "../../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export const createRegisterInterchainAccount = (clientResolver?: SigningClientResolver) => buildTx<MsgRegisterInterchainAccount>({
  clientResolver,
  typeUrl: MsgRegisterInterchainAccount.typeUrl,
  encoders: toEncoders(MsgRegisterInterchainAccount),
  converters: toConverters(MsgRegisterInterchainAccount)
});
export const useRegisterInterchainAccount = buildUseMutation<MsgRegisterInterchainAccount, Error>({
  builderMutationFn: createRegisterInterchainAccount
});
export const createSendTx = (clientResolver?: SigningClientResolver) => buildTx<MsgSendTx>({
  clientResolver,
  typeUrl: MsgSendTx.typeUrl,
  encoders: toEncoders(MsgSendTx),
  converters: toConverters(MsgSendTx)
});
export const useSendTx = buildUseMutation<MsgSendTx, Error>({
  builderMutationFn: createSendTx
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});