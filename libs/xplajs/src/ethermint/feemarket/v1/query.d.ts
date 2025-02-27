import { Params, ParamsAmino } from "./feemarket";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/ethermint.feemarket.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
    /** params define the evm module parameters. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseAmino {
    /** params define the evm module parameters. */
    params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/ethermint.feemarket.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {
}
export interface QueryBaseFeeRequestProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeRequest";
    value: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestAmino {
}
export interface QueryBaseFeeRequestAminoMsg {
    type: "/ethermint.feemarket.v1.QueryBaseFeeRequest";
    value: QueryBaseFeeRequestAmino;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
    /** base_fee is the EIP1559 base fee */
    baseFee: string;
}
export interface QueryBaseFeeResponseProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeResponse";
    value: Uint8Array;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseAmino {
    /** base_fee is the EIP1559 base fee */
    base_fee: string;
}
export interface QueryBaseFeeResponseAminoMsg {
    type: "/ethermint.feemarket.v1.QueryBaseFeeResponse";
    value: QueryBaseFeeResponseAmino;
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBlockGasRequest {
}
export interface QueryBlockGasRequestProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.QueryBlockGasRequest";
    value: Uint8Array;
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBlockGasRequestAmino {
}
export interface QueryBlockGasRequestAminoMsg {
    type: "/ethermint.feemarket.v1.QueryBlockGasRequest";
    value: QueryBlockGasRequestAmino;
}
/** QueryBlockGasResponse returns block gas used for a given height. */
export interface QueryBlockGasResponse {
    /** gas is the returned block gas */
    gas: bigint;
}
export interface QueryBlockGasResponseProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.QueryBlockGasResponse";
    value: Uint8Array;
}
/** QueryBlockGasResponse returns block gas used for a given height. */
export interface QueryBlockGasResponseAmino {
    /** gas is the returned block gas */
    gas: string;
}
export interface QueryBlockGasResponseAminoMsg {
    type: "/ethermint.feemarket.v1.QueryBlockGasResponse";
    value: QueryBlockGasResponseAmino;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    is(o: any): o is QueryParamsRequest;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    is(o: any): o is QueryParamsResponse;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryBaseFeeRequest: {
    typeUrl: string;
    is(o: any): o is QueryBaseFeeRequest;
    isAmino(o: any): o is QueryBaseFeeRequestAmino;
    encode(_: QueryBaseFeeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeRequest;
    fromPartial(_: DeepPartial<QueryBaseFeeRequest>): QueryBaseFeeRequest;
    fromAmino(_: QueryBaseFeeRequestAmino): QueryBaseFeeRequest;
    toAmino(_: QueryBaseFeeRequest): QueryBaseFeeRequestAmino;
    fromAminoMsg(object: QueryBaseFeeRequestAminoMsg): QueryBaseFeeRequest;
    fromProtoMsg(message: QueryBaseFeeRequestProtoMsg): QueryBaseFeeRequest;
    toProto(message: QueryBaseFeeRequest): Uint8Array;
    toProtoMsg(message: QueryBaseFeeRequest): QueryBaseFeeRequestProtoMsg;
};
export declare const QueryBaseFeeResponse: {
    typeUrl: string;
    is(o: any): o is QueryBaseFeeResponse;
    isAmino(o: any): o is QueryBaseFeeResponseAmino;
    encode(message: QueryBaseFeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeResponse;
    fromPartial(object: DeepPartial<QueryBaseFeeResponse>): QueryBaseFeeResponse;
    fromAmino(object: QueryBaseFeeResponseAmino): QueryBaseFeeResponse;
    toAmino(message: QueryBaseFeeResponse): QueryBaseFeeResponseAmino;
    fromAminoMsg(object: QueryBaseFeeResponseAminoMsg): QueryBaseFeeResponse;
    fromProtoMsg(message: QueryBaseFeeResponseProtoMsg): QueryBaseFeeResponse;
    toProto(message: QueryBaseFeeResponse): Uint8Array;
    toProtoMsg(message: QueryBaseFeeResponse): QueryBaseFeeResponseProtoMsg;
};
export declare const QueryBlockGasRequest: {
    typeUrl: string;
    is(o: any): o is QueryBlockGasRequest;
    isAmino(o: any): o is QueryBlockGasRequestAmino;
    encode(_: QueryBlockGasRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockGasRequest;
    fromPartial(_: DeepPartial<QueryBlockGasRequest>): QueryBlockGasRequest;
    fromAmino(_: QueryBlockGasRequestAmino): QueryBlockGasRequest;
    toAmino(_: QueryBlockGasRequest): QueryBlockGasRequestAmino;
    fromAminoMsg(object: QueryBlockGasRequestAminoMsg): QueryBlockGasRequest;
    fromProtoMsg(message: QueryBlockGasRequestProtoMsg): QueryBlockGasRequest;
    toProto(message: QueryBlockGasRequest): Uint8Array;
    toProtoMsg(message: QueryBlockGasRequest): QueryBlockGasRequestProtoMsg;
};
export declare const QueryBlockGasResponse: {
    typeUrl: string;
    is(o: any): o is QueryBlockGasResponse;
    isAmino(o: any): o is QueryBlockGasResponseAmino;
    encode(message: QueryBlockGasResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockGasResponse;
    fromPartial(object: DeepPartial<QueryBlockGasResponse>): QueryBlockGasResponse;
    fromAmino(object: QueryBlockGasResponseAmino): QueryBlockGasResponse;
    toAmino(message: QueryBlockGasResponse): QueryBlockGasResponseAmino;
    fromAminoMsg(object: QueryBlockGasResponseAminoMsg): QueryBlockGasResponse;
    fromProtoMsg(message: QueryBlockGasResponseProtoMsg): QueryBlockGasResponse;
    toProto(message: QueryBlockGasResponse): Uint8Array;
    toProtoMsg(message: QueryBlockGasResponse): QueryBlockGasResponseProtoMsg;
};
