"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Timeout = exports.Acknowledgement = exports.PacketId = exports.PacketState = exports.Packet = exports.Counterparty = exports.IdentifiedChannel = exports.Channel = exports.OrderAmino = exports.Order = exports.StateAmino = exports.State = void 0;
exports.stateFromJSON = stateFromJSON;
exports.stateToJSON = stateToJSON;
exports.orderFromJSON = orderFromJSON;
exports.orderToJSON = orderToJSON;
const client_1 = require("../../client/v1/client");
const helpers_1 = require("../../../../helpers");
const binary_1 = require("../../../../binary");
const registry_1 = require("../../../../registry");
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN, FLUSHING, FLUSHCOMPLETE or UNINITIALIZED.
 */
var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A channel has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /**
     * STATE_OPEN - A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    /**
     * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
     * packets.
     */
    State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
    /** STATE_FLUSHING - A channel has just accepted the upgrade handshake attempt and is flushing in-flight packets. */
    State[State["STATE_FLUSHING"] = 5] = "STATE_FLUSHING";
    /** STATE_FLUSHCOMPLETE - A channel has just completed flushing any in-flight packets. */
    State[State["STATE_FLUSHCOMPLETE"] = 6] = "STATE_FLUSHCOMPLETE";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (exports.State = State = {}));
exports.StateAmino = State;
function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNINITIALIZED_UNSPECIFIED":
            return State.STATE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "STATE_INIT":
            return State.STATE_INIT;
        case 2:
        case "STATE_TRYOPEN":
            return State.STATE_TRYOPEN;
        case 3:
        case "STATE_OPEN":
            return State.STATE_OPEN;
        case 4:
        case "STATE_CLOSED":
            return State.STATE_CLOSED;
        case 5:
        case "STATE_FLUSHING":
            return State.STATE_FLUSHING;
        case 6:
        case "STATE_FLUSHCOMPLETE":
            return State.STATE_FLUSHCOMPLETE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
        case State.STATE_INIT:
            return "STATE_INIT";
        case State.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
        case State.STATE_OPEN:
            return "STATE_OPEN";
        case State.STATE_CLOSED:
            return "STATE_CLOSED";
        case State.STATE_FLUSHING:
            return "STATE_FLUSHING";
        case State.STATE_FLUSHCOMPLETE:
            return "STATE_FLUSHCOMPLETE";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Order defines if a channel is ORDERED or UNORDERED */
var Order;
(function (Order) {
    /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
    Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
    /**
     * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     */
    Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
    /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
    Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
    Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order || (exports.Order = Order = {}));
exports.OrderAmino = Order;
function orderFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_NONE_UNSPECIFIED":
            return Order.ORDER_NONE_UNSPECIFIED;
        case 1:
        case "ORDER_UNORDERED":
            return Order.ORDER_UNORDERED;
        case 2:
        case "ORDER_ORDERED":
            return Order.ORDER_ORDERED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order.UNRECOGNIZED;
    }
}
function orderToJSON(object) {
    switch (object) {
        case Order.ORDER_NONE_UNSPECIFIED:
            return "ORDER_NONE_UNSPECIFIED";
        case Order.ORDER_UNORDERED:
            return "ORDER_UNORDERED";
        case Order.ORDER_ORDERED:
            return "ORDER_ORDERED";
        case Order.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        connectionHops: [],
        version: "",
        upgradeSequence: BigInt(0)
    };
}
exports.Channel = {
    typeUrl: "/ibc.core.channel.v1.Channel",
    aminoType: "cosmos-sdk/Channel",
    is(o) {
        return o && (o.$typeUrl === exports.Channel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.is(o.counterparty) && Array.isArray(o.connectionHops) && (!o.connectionHops.length || typeof o.connectionHops[0] === "string") && typeof o.version === "string" && typeof o.upgradeSequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Channel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.upgrade_sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connectionHops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.upgradeSequence !== BigInt(0)) {
            writer.uint32(48).uint64(message.upgradeSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
                    break;
                case 3:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connectionHops.push(reader.string());
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.upgradeSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseChannel();
        message.state = object.state ?? 0;
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.connectionHops = object.connectionHops?.map(e => e) || [];
        message.version = object.version ?? "";
        message.upgradeSequence = object.upgradeSequence !== undefined && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseChannel();
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = object.ordering;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = exports.Counterparty.fromAmino(object.counterparty);
        }
        message.connectionHops = object.connection_hops?.map(e => e) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.upgrade_sequence !== undefined && object.upgrade_sequence !== null) {
            message.upgradeSequence = BigInt(object.upgrade_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state === 0 ? undefined : message.state;
        obj.ordering = message.ordering === 0 ? undefined : message.ordering;
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connectionHops) {
            obj.connection_hops = message.connectionHops.map(e => e);
        }
        else {
            obj.connection_hops = message.connectionHops;
        }
        obj.version = message.version === "" ? undefined : message.version;
        obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Channel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Channel",
            value: exports.Channel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Channel.decode(message.value);
    },
    toProto(message) {
        return exports.Channel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Channel",
            value: exports.Channel.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Channel.typeUrl, exports.Channel);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Channel.aminoType, exports.Channel.typeUrl);
function createBaseIdentifiedChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        connectionHops: [],
        version: "",
        portId: "",
        channelId: "",
        upgradeSequence: BigInt(0)
    };
}
exports.IdentifiedChannel = {
    typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
    aminoType: "cosmos-sdk/IdentifiedChannel",
    is(o) {
        return o && (o.$typeUrl === exports.IdentifiedChannel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.is(o.counterparty) && Array.isArray(o.connectionHops) && (!o.connectionHops.length || typeof o.connectionHops[0] === "string") && typeof o.version === "string" && typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.upgradeSequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.IdentifiedChannel.typeUrl || (0, helpers_1.isSet)(o.state) && (0, helpers_1.isSet)(o.ordering) && exports.Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.upgrade_sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connectionHops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.portId !== "") {
            writer.uint32(50).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(58).string(message.channelId);
        }
        if (message.upgradeSequence !== BigInt(0)) {
            writer.uint32(64).uint64(message.upgradeSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
                    break;
                case 3:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connectionHops.push(reader.string());
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.portId = reader.string();
                    break;
                case 7:
                    message.channelId = reader.string();
                    break;
                case 8:
                    message.upgradeSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedChannel();
        message.state = object.state ?? 0;
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.connectionHops = object.connectionHops?.map(e => e) || [];
        message.version = object.version ?? "";
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.upgradeSequence = object.upgradeSequence !== undefined && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseIdentifiedChannel();
        if (object.state !== undefined && object.state !== null) {
            message.state = object.state;
        }
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = object.ordering;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = exports.Counterparty.fromAmino(object.counterparty);
        }
        message.connectionHops = object.connection_hops?.map(e => e) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.upgrade_sequence !== undefined && object.upgrade_sequence !== null) {
            message.upgradeSequence = BigInt(object.upgrade_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state === 0 ? undefined : message.state;
        obj.ordering = message.ordering === 0 ? undefined : message.ordering;
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connectionHops) {
            obj.connection_hops = message.connectionHops.map(e => e);
        }
        else {
            obj.connection_hops = message.connectionHops;
        }
        obj.version = message.version === "" ? undefined : message.version;
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IdentifiedChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedChannel",
            value: exports.IdentifiedChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IdentifiedChannel.decode(message.value);
    },
    toProto(message) {
        return exports.IdentifiedChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
            value: exports.IdentifiedChannel.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.IdentifiedChannel.typeUrl, exports.IdentifiedChannel);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IdentifiedChannel.aminoType, exports.IdentifiedChannel.typeUrl);
function createBaseCounterparty() {
    return {
        portId: "",
        channelId: ""
    };
}
exports.Counterparty = {
    typeUrl: "/ibc.core.channel.v1.Counterparty",
    aminoType: "cosmos-sdk/Counterparty",
    is(o) {
        return o && (o.$typeUrl === exports.Counterparty.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCounterparty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCounterparty();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCounterparty();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Counterparty.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Counterparty",
            value: exports.Counterparty.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Counterparty.decode(message.value);
    },
    toProto(message) {
        return exports.Counterparty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Counterparty",
            value: exports.Counterparty.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Counterparty.typeUrl, exports.Counterparty);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Counterparty.aminoType, exports.Counterparty.typeUrl);
function createBasePacket() {
    return {
        sequence: BigInt(0),
        sourcePort: "",
        sourceChannel: "",
        destinationPort: "",
        destinationChannel: "",
        data: new Uint8Array(),
        timeoutHeight: client_1.Height.fromPartial({}),
        timeoutTimestamp: BigInt(0)
    };
}
exports.Packet = {
    typeUrl: "/ibc.core.channel.v1.Packet",
    aminoType: "cosmos-sdk/Packet",
    is(o) {
        return o && (o.$typeUrl === exports.Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.sourcePort === "string" && typeof o.sourceChannel === "string" && typeof o.destinationPort === "string" && typeof o.destinationChannel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && client_1.Height.is(o.timeoutHeight) && typeof o.timeoutTimestamp === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && client_1.Height.isAmino(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.sourcePort !== "") {
            writer.uint32(18).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(26).string(message.sourceChannel);
        }
        if (message.destinationPort !== "") {
            writer.uint32(34).string(message.destinationPort);
        }
        if (message.destinationChannel !== "") {
            writer.uint32(42).string(message.destinationChannel);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.timeoutHeight !== undefined) {
            client_1.Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(64).uint64(message.timeoutTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.sourcePort = reader.string();
                    break;
                case 3:
                    message.sourceChannel = reader.string();
                    break;
                case 4:
                    message.destinationPort = reader.string();
                    break;
                case 5:
                    message.destinationChannel = reader.string();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.timeoutHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.timeoutTimestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePacket();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.sourcePort = object.sourcePort ?? "";
        message.sourceChannel = object.sourceChannel ?? "";
        message.destinationPort = object.destinationPort ?? "";
        message.destinationChannel = object.destinationChannel ?? "";
        message.data = object.data ?? new Uint8Array();
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? client_1.Height.fromPartial(object.timeoutHeight) : undefined;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePacket();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.source_port !== undefined && object.source_port !== null) {
            message.sourcePort = object.source_port;
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.sourceChannel = object.source_channel;
        }
        if (object.destination_port !== undefined && object.destination_port !== null) {
            message.destinationPort = object.destination_port;
        }
        if (object.destination_channel !== undefined && object.destination_channel !== null) {
            message.destinationChannel = object.destination_channel;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeoutHeight = client_1.Height.fromAmino(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeoutTimestamp = BigInt(object.timeout_timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
        obj.source_port = message.sourcePort === "" ? undefined : message.sourcePort;
        obj.source_channel = message.sourceChannel === "" ? undefined : message.sourceChannel;
        obj.destination_port = message.destinationPort === "" ? undefined : message.destinationPort;
        obj.destination_channel = message.destinationChannel === "" ? undefined : message.destinationChannel;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.timeout_height = message.timeoutHeight ? client_1.Height.toAmino(message.timeoutHeight) : {};
        obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Packet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Packet",
            value: exports.Packet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Packet.decode(message.value);
    },
    toProto(message) {
        return exports.Packet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Packet",
            value: exports.Packet.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Packet.typeUrl, exports.Packet);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Packet.aminoType, exports.Packet.typeUrl);
function createBasePacketState() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0),
        data: new Uint8Array()
    };
}
exports.PacketState = {
    typeUrl: "/ibc.core.channel.v1.PacketState",
    aminoType: "cosmos-sdk/PacketState",
    is(o) {
        return o && (o.$typeUrl === exports.PacketState.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        if (message.data.length !== 0) {
            writer.uint32(34).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                case 4:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePacketState();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketState();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketState",
            value: exports.PacketState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketState.decode(message.value);
    },
    toProto(message) {
        return exports.PacketState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketState",
            value: exports.PacketState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PacketState.typeUrl, exports.PacketState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PacketState.aminoType, exports.PacketState.typeUrl);
function createBasePacketId() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
exports.PacketId = {
    typeUrl: "/ibc.core.channel.v1.PacketId",
    aminoType: "cosmos-sdk/PacketId",
    is(o) {
        return o && (o.$typeUrl === exports.PacketId.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PacketId.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePacketId();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketId();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketId.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketId",
            value: exports.PacketId.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketId.decode(message.value);
    },
    toProto(message) {
        return exports.PacketId.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketId",
            value: exports.PacketId.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PacketId.typeUrl, exports.PacketId);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PacketId.aminoType, exports.PacketId.typeUrl);
function createBaseAcknowledgement() {
    return {
        result: undefined,
        error: undefined
    };
}
exports.Acknowledgement = {
    typeUrl: "/ibc.core.channel.v1.Acknowledgement",
    aminoType: "cosmos-sdk/Acknowledgement",
    is(o) {
        return o && o.$typeUrl === exports.Acknowledgement.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Acknowledgement.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== undefined) {
            writer.uint32(170).bytes(message.result);
        }
        if (message.error !== undefined) {
            writer.uint32(178).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 21:
                    message.result = reader.bytes();
                    break;
                case 22:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAcknowledgement();
        message.result = object.result ?? undefined;
        message.error = object.error ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAcknowledgement();
        if (object.result !== undefined && object.result !== null) {
            message.result = (0, helpers_1.bytesFromBase64)(object.result);
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result ? (0, helpers_1.base64FromBytes)(message.result) : undefined;
        obj.error = message.error === null ? undefined : message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Acknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Acknowledgement",
            value: exports.Acknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Acknowledgement.decode(message.value);
    },
    toProto(message) {
        return exports.Acknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Acknowledgement",
            value: exports.Acknowledgement.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Acknowledgement.typeUrl, exports.Acknowledgement);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Acknowledgement.aminoType, exports.Acknowledgement.typeUrl);
function createBaseTimeout() {
    return {
        height: client_1.Height.fromPartial({}),
        timestamp: BigInt(0)
    };
}
exports.Timeout = {
    typeUrl: "/ibc.core.channel.v1.Timeout",
    aminoType: "cosmos-sdk/Timeout",
    is(o) {
        return o && (o.$typeUrl === exports.Timeout.typeUrl || client_1.Height.is(o.height) && typeof o.timestamp === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Timeout.typeUrl || client_1.Height.isAmino(o.height) && typeof o.timestamp === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(10).fork()).ldelim();
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTimeout();
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTimeout();
        if (object.height !== undefined && object.height !== null) {
            message.height = client_1.Height.fromAmino(object.height);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Timeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Timeout",
            value: exports.Timeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Timeout.decode(message.value);
    },
    toProto(message) {
        return exports.Timeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Timeout",
            value: exports.Timeout.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Timeout.typeUrl, exports.Timeout);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Timeout.aminoType, exports.Timeout.typeUrl);
function createBaseParams() {
    return {
        upgradeTimeout: exports.Timeout.fromPartial({})
    };
}
exports.Params = {
    typeUrl: "/ibc.core.channel.v1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || exports.Timeout.is(o.upgradeTimeout));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || exports.Timeout.isAmino(o.upgrade_timeout));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgradeTimeout !== undefined) {
            exports.Timeout.encode(message.upgradeTimeout, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgradeTimeout = exports.Timeout.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.upgradeTimeout = object.upgradeTimeout !== undefined && object.upgradeTimeout !== null ? exports.Timeout.fromPartial(object.upgradeTimeout) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.upgrade_timeout !== undefined && object.upgrade_timeout !== null) {
            message.upgradeTimeout = exports.Timeout.fromAmino(object.upgrade_timeout);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgrade_timeout = message.upgradeTimeout ? exports.Timeout.toAmino(message.upgradeTimeout) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
