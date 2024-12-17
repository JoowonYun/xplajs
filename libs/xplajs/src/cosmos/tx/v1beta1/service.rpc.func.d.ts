import { RpcResolver } from "../../../helper-func-types";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
export declare const createGetSimulate: (clientResolver?: RpcResolver) => (request: SimulateRequest) => Promise<SimulateResponse>;
export declare const createGetGetTx: (clientResolver?: RpcResolver) => (request: GetTxRequest) => Promise<GetTxResponse>;
export declare const createGetBroadcastTx: (clientResolver?: RpcResolver) => (request: BroadcastTxRequest) => Promise<BroadcastTxResponse>;
export declare const createGetGetTxsEvent: (clientResolver?: RpcResolver) => (request: GetTxsEventRequest) => Promise<GetTxsEventResponse>;
export declare const createGetGetBlockWithTxs: (clientResolver?: RpcResolver) => (request: GetBlockWithTxsRequest) => Promise<GetBlockWithTxsResponse>;
export declare const createGetTxDecode: (clientResolver?: RpcResolver) => (request: TxDecodeRequest) => Promise<TxDecodeResponse>;
export declare const createGetTxEncode: (clientResolver?: RpcResolver) => (request: TxEncodeRequest) => Promise<TxEncodeResponse>;
export declare const createGetTxEncodeAmino: (clientResolver?: RpcResolver) => (request: TxEncodeAminoRequest) => Promise<TxEncodeAminoResponse>;
export declare const createGetTxDecodeAmino: (clientResolver?: RpcResolver) => (request: TxDecodeAminoRequest) => Promise<TxDecodeAminoResponse>;
