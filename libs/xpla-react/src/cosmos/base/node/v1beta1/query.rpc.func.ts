import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
export const createGetConfig = (clientResolver?: RpcResolver) => buildQuery<ConfigRequest, ConfigResponse>({
  encode: ConfigRequest.encode,
  decode: ConfigResponse.decode,
  service: "cosmos.base.node.v1beta1.Service",
  method: "Config",
  clientResolver
});
export const useGetConfig = buildUseQuery<ConfigRequest, ConfigResponse>({
  builderQueryFn: createGetConfig,
  queryKeyPrefix: "ConfigQuery"
});
export const createGetStatus = (clientResolver?: RpcResolver) => buildQuery<StatusRequest, StatusResponse>({
  encode: StatusRequest.encode,
  decode: StatusResponse.decode,
  service: "cosmos.base.node.v1beta1.Service",
  method: "Status",
  clientResolver
});
export const useGetStatus = buildUseQuery<StatusRequest, StatusResponse>({
  builderQueryFn: createGetStatus,
  queryKeyPrefix: "StatusQuery"
});