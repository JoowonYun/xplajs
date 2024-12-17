import { Timeout, TimeoutAmino, Order } from "./channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface Upgrade {
    fields: UpgradeFields;
    timeout: Timeout;
    nextSequenceSend: bigint;
}
export interface UpgradeProtoMsg {
    typeUrl: "/ibc.core.channel.v1.Upgrade";
    value: Uint8Array;
}
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface UpgradeAmino {
    fields: UpgradeFieldsAmino;
    timeout: TimeoutAmino;
    next_sequence_send: string;
}
export interface UpgradeAminoMsg {
    type: "cosmos-sdk/Upgrade";
    value: UpgradeAmino;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFields {
    ordering: Order;
    connectionHops: string[];
    version: string;
}
export interface UpgradeFieldsProtoMsg {
    typeUrl: "/ibc.core.channel.v1.UpgradeFields";
    value: Uint8Array;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFieldsAmino {
    ordering: Order;
    connection_hops: string[];
    version: string;
}
export interface UpgradeFieldsAminoMsg {
    type: "cosmos-sdk/UpgradeFields";
    value: UpgradeFieldsAmino;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceipt {
    /** the channel upgrade sequence */
    sequence: bigint;
    /** the error message detailing the cause of failure */
    message: string;
}
export interface ErrorReceiptProtoMsg {
    typeUrl: "/ibc.core.channel.v1.ErrorReceipt";
    value: Uint8Array;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceiptAmino {
    /** the channel upgrade sequence */
    sequence: string;
    /** the error message detailing the cause of failure */
    message: string;
}
export interface ErrorReceiptAminoMsg {
    type: "cosmos-sdk/ErrorReceipt";
    value: ErrorReceiptAmino;
}
export declare const Upgrade: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Upgrade;
    isAmino(o: any): o is UpgradeAmino;
    encode(message: Upgrade, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Upgrade;
    fromPartial(object: DeepPartial<Upgrade>): Upgrade;
    fromAmino(object: UpgradeAmino): Upgrade;
    toAmino(message: Upgrade): UpgradeAmino;
    fromAminoMsg(object: UpgradeAminoMsg): Upgrade;
    toAminoMsg(message: Upgrade): UpgradeAminoMsg;
    fromProtoMsg(message: UpgradeProtoMsg): Upgrade;
    toProto(message: Upgrade): Uint8Array;
    toProtoMsg(message: Upgrade): UpgradeProtoMsg;
};
export declare const UpgradeFields: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpgradeFields;
    isAmino(o: any): o is UpgradeFieldsAmino;
    encode(message: UpgradeFields, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpgradeFields;
    fromPartial(object: DeepPartial<UpgradeFields>): UpgradeFields;
    fromAmino(object: UpgradeFieldsAmino): UpgradeFields;
    toAmino(message: UpgradeFields): UpgradeFieldsAmino;
    fromAminoMsg(object: UpgradeFieldsAminoMsg): UpgradeFields;
    toAminoMsg(message: UpgradeFields): UpgradeFieldsAminoMsg;
    fromProtoMsg(message: UpgradeFieldsProtoMsg): UpgradeFields;
    toProto(message: UpgradeFields): Uint8Array;
    toProtoMsg(message: UpgradeFields): UpgradeFieldsProtoMsg;
};
export declare const ErrorReceipt: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ErrorReceipt;
    isAmino(o: any): o is ErrorReceiptAmino;
    encode(message: ErrorReceipt, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ErrorReceipt;
    fromPartial(object: DeepPartial<ErrorReceipt>): ErrorReceipt;
    fromAmino(object: ErrorReceiptAmino): ErrorReceipt;
    toAmino(message: ErrorReceipt): ErrorReceiptAmino;
    fromAminoMsg(object: ErrorReceiptAminoMsg): ErrorReceipt;
    toAminoMsg(message: ErrorReceipt): ErrorReceiptAminoMsg;
    fromProtoMsg(message: ErrorReceiptProtoMsg): ErrorReceipt;
    toProto(message: ErrorReceipt): Uint8Array;
    toProtoMsg(message: ErrorReceipt): ErrorReceiptProtoMsg;
};
