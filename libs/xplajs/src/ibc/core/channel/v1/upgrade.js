"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorReceipt = exports.UpgradeFields = exports.Upgrade = void 0;
const channel_1 = require("./channel");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseUpgrade() {
    return {
        fields: exports.UpgradeFields.fromPartial({}),
        timeout: channel_1.Timeout.fromPartial({}),
        nextSequenceSend: BigInt(0)
    };
}
exports.Upgrade = {
    typeUrl: "/ibc.core.channel.v1.Upgrade",
    aminoType: "cosmos-sdk/Upgrade",
    is(o) {
        return o && (o.$typeUrl === exports.Upgrade.typeUrl || exports.UpgradeFields.is(o.fields) && channel_1.Timeout.is(o.timeout) && typeof o.nextSequenceSend === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Upgrade.typeUrl || exports.UpgradeFields.isAmino(o.fields) && channel_1.Timeout.isAmino(o.timeout) && typeof o.next_sequence_send === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.fields !== undefined) {
            exports.UpgradeFields.encode(message.fields, writer.uint32(10).fork()).ldelim();
        }
        if (message.timeout !== undefined) {
            channel_1.Timeout.encode(message.timeout, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextSequenceSend !== BigInt(0)) {
            writer.uint32(24).uint64(message.nextSequenceSend);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = exports.UpgradeFields.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timeout = channel_1.Timeout.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextSequenceSend = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpgrade();
        message.fields = object.fields !== undefined && object.fields !== null ? exports.UpgradeFields.fromPartial(object.fields) : undefined;
        message.timeout = object.timeout !== undefined && object.timeout !== null ? channel_1.Timeout.fromPartial(object.timeout) : undefined;
        message.nextSequenceSend = object.nextSequenceSend !== undefined && object.nextSequenceSend !== null ? BigInt(object.nextSequenceSend.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpgrade();
        if (object.fields !== undefined && object.fields !== null) {
            message.fields = exports.UpgradeFields.fromAmino(object.fields);
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = channel_1.Timeout.fromAmino(object.timeout);
        }
        if (object.next_sequence_send !== undefined && object.next_sequence_send !== null) {
            message.nextSequenceSend = BigInt(object.next_sequence_send);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fields = message.fields ? exports.UpgradeFields.toAmino(message.fields) : undefined;
        obj.timeout = message.timeout ? channel_1.Timeout.toAmino(message.timeout) : undefined;
        obj.next_sequence_send = message.nextSequenceSend !== BigInt(0) ? message.nextSequenceSend?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Upgrade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Upgrade",
            value: exports.Upgrade.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Upgrade.decode(message.value);
    },
    toProto(message) {
        return exports.Upgrade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Upgrade",
            value: exports.Upgrade.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Upgrade.typeUrl, exports.Upgrade);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Upgrade.aminoType, exports.Upgrade.typeUrl);
function createBaseUpgradeFields() {
    return {
        ordering: 0,
        connectionHops: [],
        version: ""
    };
}
exports.UpgradeFields = {
    typeUrl: "/ibc.core.channel.v1.UpgradeFields",
    aminoType: "cosmos-sdk/UpgradeFields",
    is(o) {
        return o && (o.$typeUrl === exports.UpgradeFields.typeUrl || (0, helpers_1.isSet)(o.ordering) && Array.isArray(o.connectionHops) && (!o.connectionHops.length || typeof o.connectionHops[0] === "string") && typeof o.version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UpgradeFields.typeUrl || (0, helpers_1.isSet)(o.ordering) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ordering !== 0) {
            writer.uint32(8).int32(message.ordering);
        }
        for (const v of message.connectionHops) {
            writer.uint32(18).string(v);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpgradeFields();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ordering = reader.int32();
                    break;
                case 2:
                    message.connectionHops.push(reader.string());
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUpgradeFields();
        message.ordering = object.ordering ?? 0;
        message.connectionHops = object.connectionHops?.map(e => e) || [];
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpgradeFields();
        if (object.ordering !== undefined && object.ordering !== null) {
            message.ordering = object.ordering;
        }
        message.connectionHops = object.connection_hops?.map(e => e) || [];
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ordering = message.ordering === 0 ? undefined : message.ordering;
        if (message.connectionHops) {
            obj.connection_hops = message.connectionHops.map(e => e);
        }
        else {
            obj.connection_hops = message.connectionHops;
        }
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpgradeFields.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UpgradeFields",
            value: exports.UpgradeFields.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpgradeFields.decode(message.value);
    },
    toProto(message) {
        return exports.UpgradeFields.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.UpgradeFields",
            value: exports.UpgradeFields.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UpgradeFields.typeUrl, exports.UpgradeFields);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpgradeFields.aminoType, exports.UpgradeFields.typeUrl);
function createBaseErrorReceipt() {
    return {
        sequence: BigInt(0),
        message: ""
    };
}
exports.ErrorReceipt = {
    typeUrl: "/ibc.core.channel.v1.ErrorReceipt",
    aminoType: "cosmos-sdk/ErrorReceipt",
    is(o) {
        return o && (o.$typeUrl === exports.ErrorReceipt.typeUrl || typeof o.sequence === "bigint" && typeof o.message === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ErrorReceipt.typeUrl || typeof o.sequence === "bigint" && typeof o.message === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseErrorReceipt();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseErrorReceipt();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.message = object.message ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseErrorReceipt();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
        obj.message = message.message === "" ? undefined : message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ErrorReceipt.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ErrorReceipt",
            value: exports.ErrorReceipt.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ErrorReceipt.decode(message.value);
    },
    toProto(message) {
        return exports.ErrorReceipt.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.ErrorReceipt",
            value: exports.ErrorReceipt.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ErrorReceipt.typeUrl, exports.ErrorReceipt);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ErrorReceipt.aminoType, exports.ErrorReceipt.typeUrl);
