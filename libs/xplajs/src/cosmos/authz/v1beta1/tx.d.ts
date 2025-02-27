import { Grant, GrantAmino } from "./authz";
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
    granter: string;
    grantee: string;
    grant: Grant;
}
export interface MsgGrantProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant";
    value: Uint8Array;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrantAmino {
    granter: string;
    grantee: string;
    grant: GrantAmino;
}
export interface MsgGrantAminoMsg {
    type: "cosmos-sdk/MsgGrant";
    value: MsgGrantAmino;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {
}
export interface MsgGrantResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse";
    value: Uint8Array;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponseAmino {
}
export interface MsgGrantResponseAminoMsg {
    type: "cosmos-sdk/MsgGrantResponse";
    value: MsgGrantResponseAmino;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
    grantee: string;
    /**
     * Execute Msg.
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: (Any)[] | Any[];
}
export interface MsgExecProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec";
    value: Uint8Array;
}
export type MsgExecEncoded = Omit<MsgExec, "msgs"> & {
    /**
     * Execute Msg.
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: (AnyProtoMsg)[];
};
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExecAmino {
    grantee: string;
    /**
     * Execute Msg.
     * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
     * triple and validate it.
     */
    msgs: AnyAmino[];
}
export interface MsgExecAminoMsg {
    type: "cosmos-sdk/MsgExec";
    value: MsgExecAmino;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
    results: Uint8Array[];
}
export interface MsgExecResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse";
    value: Uint8Array;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponseAmino {
    results: string[];
}
export interface MsgExecResponseAminoMsg {
    type: "cosmos-sdk/MsgExecResponse";
    value: MsgExecResponseAmino;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
    granter: string;
    grantee: string;
    msgTypeUrl: string;
}
export interface MsgRevokeProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke";
    value: Uint8Array;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevokeAmino {
    granter: string;
    grantee: string;
    msg_type_url: string;
}
export interface MsgRevokeAminoMsg {
    type: "cosmos-sdk/MsgRevoke";
    value: MsgRevokeAmino;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {
}
export interface MsgRevokeResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse";
    value: Uint8Array;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponseAmino {
}
export interface MsgRevokeResponseAminoMsg {
    type: "cosmos-sdk/MsgRevokeResponse";
    value: MsgRevokeResponseAmino;
}
export declare const MsgGrant: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgGrant;
    isAmino(o: any): o is MsgGrantAmino;
    encode(message: MsgGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrant;
    fromPartial(object: DeepPartial<MsgGrant>): MsgGrant;
    fromAmino(object: MsgGrantAmino): MsgGrant;
    toAmino(message: MsgGrant): MsgGrantAmino;
    fromAminoMsg(object: MsgGrantAminoMsg): MsgGrant;
    toAminoMsg(message: MsgGrant): MsgGrantAminoMsg;
    fromProtoMsg(message: MsgGrantProtoMsg): MsgGrant;
    toProto(message: MsgGrant): Uint8Array;
    toProtoMsg(message: MsgGrant): MsgGrantProtoMsg;
};
export declare const MsgGrantResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgGrantResponse;
    isAmino(o: any): o is MsgGrantResponseAmino;
    encode(_: MsgGrantResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantResponse;
    fromPartial(_: DeepPartial<MsgGrantResponse>): MsgGrantResponse;
    fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse;
    toAmino(_: MsgGrantResponse): MsgGrantResponseAmino;
    fromAminoMsg(object: MsgGrantResponseAminoMsg): MsgGrantResponse;
    toAminoMsg(message: MsgGrantResponse): MsgGrantResponseAminoMsg;
    fromProtoMsg(message: MsgGrantResponseProtoMsg): MsgGrantResponse;
    toProto(message: MsgGrantResponse): Uint8Array;
    toProtoMsg(message: MsgGrantResponse): MsgGrantResponseProtoMsg;
};
export declare const MsgExec: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgExec;
    isAmino(o: any): o is MsgExecAmino;
    encode(message: MsgExec, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExec;
    fromPartial(object: DeepPartial<MsgExec>): MsgExec;
    fromAmino(object: MsgExecAmino): MsgExec;
    toAmino(message: MsgExec): MsgExecAmino;
    fromAminoMsg(object: MsgExecAminoMsg): MsgExec;
    toAminoMsg(message: MsgExec): MsgExecAminoMsg;
    fromProtoMsg(message: MsgExecProtoMsg): MsgExec;
    toProto(message: MsgExec): Uint8Array;
    toProtoMsg(message: MsgExec): MsgExecProtoMsg;
};
export declare const MsgExecResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgExecResponse;
    isAmino(o: any): o is MsgExecResponseAmino;
    encode(message: MsgExecResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse;
    fromPartial(object: DeepPartial<MsgExecResponse>): MsgExecResponse;
    fromAmino(object: MsgExecResponseAmino): MsgExecResponse;
    toAmino(message: MsgExecResponse): MsgExecResponseAmino;
    fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse;
    toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg;
    fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse;
    toProto(message: MsgExecResponse): Uint8Array;
    toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg;
};
export declare const MsgRevoke: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRevoke;
    isAmino(o: any): o is MsgRevokeAmino;
    encode(message: MsgRevoke, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke;
    fromPartial(object: DeepPartial<MsgRevoke>): MsgRevoke;
    fromAmino(object: MsgRevokeAmino): MsgRevoke;
    toAmino(message: MsgRevoke): MsgRevokeAmino;
    fromAminoMsg(object: MsgRevokeAminoMsg): MsgRevoke;
    toAminoMsg(message: MsgRevoke): MsgRevokeAminoMsg;
    fromProtoMsg(message: MsgRevokeProtoMsg): MsgRevoke;
    toProto(message: MsgRevoke): Uint8Array;
    toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg;
};
export declare const MsgRevokeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRevokeResponse;
    isAmino(o: any): o is MsgRevokeResponseAmino;
    encode(_: MsgRevokeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse;
    fromPartial(_: DeepPartial<MsgRevokeResponse>): MsgRevokeResponse;
    fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse;
    toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino;
    fromAminoMsg(object: MsgRevokeResponseAminoMsg): MsgRevokeResponse;
    toAminoMsg(message: MsgRevokeResponse): MsgRevokeResponseAminoMsg;
    fromProtoMsg(message: MsgRevokeResponseProtoMsg): MsgRevokeResponse;
    toProto(message: MsgRevokeResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg;
};
