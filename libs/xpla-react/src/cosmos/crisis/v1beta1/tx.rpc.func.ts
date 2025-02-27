import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
export const createVerifyInvariant = (clientResolver?: SigningClientResolver) => buildTx<MsgVerifyInvariant>({
  clientResolver,
  typeUrl: MsgVerifyInvariant.typeUrl,
  encoders: toEncoders(MsgVerifyInvariant),
  converters: toConverters(MsgVerifyInvariant)
});
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: createVerifyInvariant
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