import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
    key: Uint8Array;
}
export interface PubKeyProtoMsg {
    typeUrl: "/cosmos.crypto.secp256k1.PubKey";
    value: Uint8Array;
}
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKeyAmino {
    key: string;
}
export interface PubKeyAminoMsg {
    type: "tendermint/PubKeySecp256k1";
    value: PubKeyAmino;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKey {
    key: Uint8Array;
}
export interface PrivKeyProtoMsg {
    typeUrl: "/cosmos.crypto.secp256k1.PrivKey";
    value: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKeyAmino {
    key: string;
}
export interface PrivKeyAminoMsg {
    type: "tendermint/PrivKeySecp256k1";
    value: PrivKeyAmino;
}
export declare const PubKey: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PubKey;
    isAmino(o: any): o is PubKeyAmino;
    encode(message: PubKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PubKey;
    fromPartial(object: DeepPartial<PubKey>): PubKey;
    fromAmino(object: PubKeyAmino): PubKey;
    toAmino(message: PubKey): PubKeyAmino;
    fromAminoMsg(object: PubKeyAminoMsg): PubKey;
    toAminoMsg(message: PubKey): PubKeyAminoMsg;
    fromProtoMsg(message: PubKeyProtoMsg): PubKey;
    toProto(message: PubKey): Uint8Array;
    toProtoMsg(message: PubKey): PubKeyProtoMsg;
};
export declare const PrivKey: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PrivKey;
    isAmino(o: any): o is PrivKeyAmino;
    encode(message: PrivKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PrivKey;
    fromPartial(object: DeepPartial<PrivKey>): PrivKey;
    fromAmino(object: PrivKeyAmino): PrivKey;
    toAmino(message: PrivKey): PrivKeyAmino;
    fromAminoMsg(object: PrivKeyAminoMsg): PrivKey;
    toAminoMsg(message: PrivKey): PrivKeyAminoMsg;
    fromProtoMsg(message: PrivKeyProtoMsg): PrivKey;
    toProto(message: PrivKey): Uint8Array;
    toProtoMsg(message: PrivKey): PrivKeyProtoMsg;
};
