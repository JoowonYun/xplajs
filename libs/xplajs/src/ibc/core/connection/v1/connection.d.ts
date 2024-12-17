import { MerklePrefix, MerklePrefixAmino } from "../../commitment/v1/commitment";
import { DeepPartial } from "../../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export declare enum State {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    STATE_UNINITIALIZED_UNSPECIFIED = 0,
    /** STATE_INIT - A connection end has just started the opening handshake. */
    STATE_INIT = 1,
    /**
     * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
     * chain.
     */
    STATE_TRYOPEN = 2,
    /** STATE_OPEN - A connection end has completed the handshake. */
    STATE_OPEN = 3,
    UNRECOGNIZED = -1
}
export declare const StateAmino: typeof State;
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface ConnectionEnd {
    /** client associated with this connection. */
    clientId: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection.
     */
    versions: Version[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty: Counterparty;
    /**
     * delay period that must pass before a consensus state can be used for
     * packet-verification NOTE: delay period logic is only implemented by some
     * clients.
     */
    delayPeriod: bigint;
}
export interface ConnectionEndProtoMsg {
    typeUrl: "/ibc.core.connection.v1.ConnectionEnd";
    value: Uint8Array;
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface ConnectionEndAmino {
    /** client associated with this connection. */
    client_id: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection.
     */
    versions: VersionAmino[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty: CounterpartyAmino;
    /**
     * delay period that must pass before a consensus state can be used for
     * packet-verification NOTE: delay period logic is only implemented by some
     * clients.
     */
    delay_period: string;
}
export interface ConnectionEndAminoMsg {
    type: "cosmos-sdk/ConnectionEnd";
    value: ConnectionEndAmino;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnection {
    /** connection identifier. */
    id: string;
    /** client associated with this connection. */
    clientId: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection
     */
    versions: Version[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty: Counterparty;
    /** delay period associated with this connection. */
    delayPeriod: bigint;
}
export interface IdentifiedConnectionProtoMsg {
    typeUrl: "/ibc.core.connection.v1.IdentifiedConnection";
    value: Uint8Array;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnectionAmino {
    /** connection identifier. */
    id: string;
    /** client associated with this connection. */
    client_id: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection
     */
    versions: VersionAmino[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty: CounterpartyAmino;
    /** delay period associated with this connection. */
    delay_period: string;
}
export interface IdentifiedConnectionAminoMsg {
    type: "cosmos-sdk/IdentifiedConnection";
    value: IdentifiedConnectionAmino;
}
/** Counterparty defines the counterparty chain associated with a connection end. */
export interface Counterparty {
    /**
     * identifies the client on the counterparty chain associated with a given
     * connection.
     */
    clientId: string;
    /**
     * identifies the connection end on the counterparty chain associated with a
     * given connection.
     */
    connectionId: string;
    /** commitment merkle prefix of the counterparty chain. */
    prefix: MerklePrefix;
}
export interface CounterpartyProtoMsg {
    typeUrl: "/ibc.core.connection.v1.Counterparty";
    value: Uint8Array;
}
/** Counterparty defines the counterparty chain associated with a connection end. */
export interface CounterpartyAmino {
    /**
     * identifies the client on the counterparty chain associated with a given
     * connection.
     */
    client_id: string;
    /**
     * identifies the connection end on the counterparty chain associated with a
     * given connection.
     */
    connection_id: string;
    /** commitment merkle prefix of the counterparty chain. */
    prefix: MerklePrefixAmino;
}
export interface CounterpartyAminoMsg {
    type: "cosmos-sdk/Counterparty";
    value: CounterpartyAmino;
}
/** ClientPaths define all the connection paths for a client state. */
export interface ClientPaths {
    /** list of connection paths */
    paths: string[];
}
export interface ClientPathsProtoMsg {
    typeUrl: "/ibc.core.connection.v1.ClientPaths";
    value: Uint8Array;
}
/** ClientPaths define all the connection paths for a client state. */
export interface ClientPathsAmino {
    /** list of connection paths */
    paths: string[];
}
export interface ClientPathsAminoMsg {
    type: "cosmos-sdk/ClientPaths";
    value: ClientPathsAmino;
}
/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPaths {
    /** client state unique identifier */
    clientId: string;
    /** list of connection paths */
    paths: string[];
}
export interface ConnectionPathsProtoMsg {
    typeUrl: "/ibc.core.connection.v1.ConnectionPaths";
    value: Uint8Array;
}
/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPathsAmino {
    /** client state unique identifier */
    client_id: string;
    /** list of connection paths */
    paths: string[];
}
export interface ConnectionPathsAminoMsg {
    type: "cosmos-sdk/ConnectionPaths";
    value: ConnectionPathsAmino;
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface Version {
    /** unique version identifier */
    identifier: string;
    /** list of features compatible with the specified identifier */
    features: string[];
}
export interface VersionProtoMsg {
    typeUrl: "/ibc.core.connection.v1.Version";
    value: Uint8Array;
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface VersionAmino {
    /** unique version identifier */
    identifier: string;
    /** list of features compatible with the specified identifier */
    features: string[];
}
export interface VersionAminoMsg {
    type: "cosmos-sdk/Version";
    value: VersionAmino;
}
/** Params defines the set of Connection parameters. */
export interface Params {
    /**
     * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
     * largest amount of time that the chain might reasonably take to produce the next block under normal operating
     * conditions. A safe choice is 3-5x the expected time per block.
     */
    maxExpectedTimePerBlock: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/ibc.core.connection.v1.Params";
    value: Uint8Array;
}
/** Params defines the set of Connection parameters. */
export interface ParamsAmino {
    /**
     * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
     * largest amount of time that the chain might reasonably take to produce the next block under normal operating
     * conditions. A safe choice is 3-5x the expected time per block.
     */
    max_expected_time_per_block: string;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
export declare const ConnectionEnd: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ConnectionEnd;
    isAmino(o: any): o is ConnectionEndAmino;
    encode(message: ConnectionEnd, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConnectionEnd;
    fromPartial(object: DeepPartial<ConnectionEnd>): ConnectionEnd;
    fromAmino(object: ConnectionEndAmino): ConnectionEnd;
    toAmino(message: ConnectionEnd): ConnectionEndAmino;
    fromAminoMsg(object: ConnectionEndAminoMsg): ConnectionEnd;
    toAminoMsg(message: ConnectionEnd): ConnectionEndAminoMsg;
    fromProtoMsg(message: ConnectionEndProtoMsg): ConnectionEnd;
    toProto(message: ConnectionEnd): Uint8Array;
    toProtoMsg(message: ConnectionEnd): ConnectionEndProtoMsg;
};
export declare const IdentifiedConnection: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is IdentifiedConnection;
    isAmino(o: any): o is IdentifiedConnectionAmino;
    encode(message: IdentifiedConnection, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedConnection;
    fromPartial(object: DeepPartial<IdentifiedConnection>): IdentifiedConnection;
    fromAmino(object: IdentifiedConnectionAmino): IdentifiedConnection;
    toAmino(message: IdentifiedConnection): IdentifiedConnectionAmino;
    fromAminoMsg(object: IdentifiedConnectionAminoMsg): IdentifiedConnection;
    toAminoMsg(message: IdentifiedConnection): IdentifiedConnectionAminoMsg;
    fromProtoMsg(message: IdentifiedConnectionProtoMsg): IdentifiedConnection;
    toProto(message: IdentifiedConnection): Uint8Array;
    toProtoMsg(message: IdentifiedConnection): IdentifiedConnectionProtoMsg;
};
export declare const Counterparty: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Counterparty;
    isAmino(o: any): o is CounterpartyAmino;
    encode(message: Counterparty, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Counterparty;
    fromPartial(object: DeepPartial<Counterparty>): Counterparty;
    fromAmino(object: CounterpartyAmino): Counterparty;
    toAmino(message: Counterparty): CounterpartyAmino;
    fromAminoMsg(object: CounterpartyAminoMsg): Counterparty;
    toAminoMsg(message: Counterparty): CounterpartyAminoMsg;
    fromProtoMsg(message: CounterpartyProtoMsg): Counterparty;
    toProto(message: Counterparty): Uint8Array;
    toProtoMsg(message: Counterparty): CounterpartyProtoMsg;
};
export declare const ClientPaths: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ClientPaths;
    isAmino(o: any): o is ClientPathsAmino;
    encode(message: ClientPaths, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientPaths;
    fromPartial(object: DeepPartial<ClientPaths>): ClientPaths;
    fromAmino(object: ClientPathsAmino): ClientPaths;
    toAmino(message: ClientPaths): ClientPathsAmino;
    fromAminoMsg(object: ClientPathsAminoMsg): ClientPaths;
    toAminoMsg(message: ClientPaths): ClientPathsAminoMsg;
    fromProtoMsg(message: ClientPathsProtoMsg): ClientPaths;
    toProto(message: ClientPaths): Uint8Array;
    toProtoMsg(message: ClientPaths): ClientPathsProtoMsg;
};
export declare const ConnectionPaths: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ConnectionPaths;
    isAmino(o: any): o is ConnectionPathsAmino;
    encode(message: ConnectionPaths, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConnectionPaths;
    fromPartial(object: DeepPartial<ConnectionPaths>): ConnectionPaths;
    fromAmino(object: ConnectionPathsAmino): ConnectionPaths;
    toAmino(message: ConnectionPaths): ConnectionPathsAmino;
    fromAminoMsg(object: ConnectionPathsAminoMsg): ConnectionPaths;
    toAminoMsg(message: ConnectionPaths): ConnectionPathsAminoMsg;
    fromProtoMsg(message: ConnectionPathsProtoMsg): ConnectionPaths;
    toProto(message: ConnectionPaths): Uint8Array;
    toProtoMsg(message: ConnectionPaths): ConnectionPathsProtoMsg;
};
export declare const Version: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Version;
    isAmino(o: any): o is VersionAmino;
    encode(message: Version, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Version;
    fromPartial(object: DeepPartial<Version>): Version;
    fromAmino(object: VersionAmino): Version;
    toAmino(message: Version): VersionAmino;
    fromAminoMsg(object: VersionAminoMsg): Version;
    toAminoMsg(message: Version): VersionAminoMsg;
    fromProtoMsg(message: VersionProtoMsg): Version;
    toProto(message: Version): Uint8Array;
    toProtoMsg(message: Version): VersionProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Params;
    isAmino(o: any): o is ParamsAmino;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
