import { TxRpc } from "../../../../../types";
import { BinaryReader } from "../../../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgModuleQuerySafe, MsgModuleQuerySafeResponse } from "./tx";
/** Msg defines the 27-interchain-accounts/host Msg service. */
export interface Msg {
  /** UpdateParams defines a rpc handler for MsgUpdateParams. */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe. */
  ModuleQuerySafe(request: MsgModuleQuerySafe): Promise<MsgModuleQuerySafeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a rpc handler for MsgUpdateParams. */
  UpdateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.host.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe. */
  ModuleQuerySafe = async (request: MsgModuleQuerySafe): Promise<MsgModuleQuerySafeResponse> => {
    const data = MsgModuleQuerySafe.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.interchain_accounts.host.v1.Msg", "ModuleQuerySafe", data);
    return promise.then(data => MsgModuleQuerySafeResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};