"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgConnectionOpenConfirmResponse = exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAckResponse = exports.MsgConnectionOpenAck = exports.MsgConnectionOpenTryResponse = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInitResponse = exports.MsgConnectionOpenInit = void 0;
const connection_1 = require("./connection");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("../../client/v1/client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseMsgConnectionOpenInit() {
    return {
        clientId: "",
        counterparty: connection_1.Counterparty.fromPartial({}),
        version: undefined,
        delayPeriod: BigInt(0),
        signer: ""
    };
}
exports.MsgConnectionOpenInit = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
    aminoType: "cosmos-sdk/MsgConnectionOpenInit",
    is(o) {
        return o && (o.$typeUrl === exports.MsgConnectionOpenInit.typeUrl || typeof o.clientId === "string" && connection_1.Counterparty.is(o.counterparty) && typeof o.delayPeriod === "bigint" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgConnectionOpenInit.typeUrl || typeof o.client_id === "string" && connection_1.Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint" && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.delayPeriod !== BigInt(0)) {
            writer.uint32(32).uint64(message.delayPeriod);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.delayPeriod = reader.uint64();
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenInit();
        message.clientId = object.clientId ?? "";
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? connection_1.Counterparty.fromPartial(object.counterparty) : undefined;
        message.version = object.version !== undefined && object.version !== null ? connection_1.Version.fromPartial(object.version) : undefined;
        message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenInit();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = connection_1.Counterparty.fromAmino(object.counterparty);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = connection_1.Version.fromAmino(object.version);
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delayPeriod = BigInt(object.delay_period);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        obj.counterparty = message.counterparty ? connection_1.Counterparty.toAmino(message.counterparty) : undefined;
        obj.version = message.version ? connection_1.Version.toAmino(message.version) : undefined;
        obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod?.toString() : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInit",
            value: exports.MsgConnectionOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
            value: exports.MsgConnectionOpenInit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgConnectionOpenInit.typeUrl, exports.MsgConnectionOpenInit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgConnectionOpenInit.aminoType, exports.MsgConnectionOpenInit.typeUrl);
function createBaseMsgConnectionOpenInitResponse() {
    return {};
}
exports.MsgConnectionOpenInitResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenInitResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgConnectionOpenInitResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgConnectionOpenInitResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenInitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConnectionOpenInitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInitResponse",
            value: exports.MsgConnectionOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
            value: exports.MsgConnectionOpenInitResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgConnectionOpenInitResponse.typeUrl, exports.MsgConnectionOpenInitResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgConnectionOpenInitResponse.aminoType, exports.MsgConnectionOpenInitResponse.typeUrl);
function createBaseMsgConnectionOpenTry() {
    return {
        clientId: "",
        previousConnectionId: "",
        clientState: undefined,
        counterparty: connection_1.Counterparty.fromPartial({}),
        delayPeriod: BigInt(0),
        counterpartyVersions: [],
        proofHeight: client_1.Height.fromPartial({}),
        proofInit: new Uint8Array(),
        proofClient: new Uint8Array(),
        proofConsensus: new Uint8Array(),
        consensusHeight: client_1.Height.fromPartial({}),
        signer: "",
        hostConsensusStateProof: new Uint8Array()
    };
}
exports.MsgConnectionOpenTry = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
    aminoType: "cosmos-sdk/MsgConnectionOpenTry",
    is(o) {
        return o && (o.$typeUrl === exports.MsgConnectionOpenTry.typeUrl || typeof o.clientId === "string" && typeof o.previousConnectionId === "string" && connection_1.Counterparty.is(o.counterparty) && typeof o.delayPeriod === "bigint" && Array.isArray(o.counterpartyVersions) && (!o.counterpartyVersions.length || connection_1.Version.is(o.counterpartyVersions[0])) && client_1.Height.is(o.proofHeight) && (o.proofInit instanceof Uint8Array || typeof o.proofInit === "string") && (o.proofClient instanceof Uint8Array || typeof o.proofClient === "string") && (o.proofConsensus instanceof Uint8Array || typeof o.proofConsensus === "string") && client_1.Height.is(o.consensusHeight) && typeof o.signer === "string" && (o.hostConsensusStateProof instanceof Uint8Array || typeof o.hostConsensusStateProof === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgConnectionOpenTry.typeUrl || typeof o.client_id === "string" && typeof o.previous_connection_id === "string" && connection_1.Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint" && Array.isArray(o.counterparty_versions) && (!o.counterparty_versions.length || connection_1.Version.isAmino(o.counterparty_versions[0])) && client_1.Height.isAmino(o.proof_height) && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && client_1.Height.isAmino(o.consensus_height) && typeof o.signer === "string" && (o.host_consensus_state_proof instanceof Uint8Array || typeof o.host_consensus_state_proof === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.previousConnectionId !== "") {
            writer.uint32(18).string(message.previousConnectionId);
        }
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delayPeriod !== BigInt(0)) {
            writer.uint32(40).uint64(message.delayPeriod);
        }
        for (const v of message.counterpartyVersions) {
            connection_1.Version.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(66).bytes(message.proofInit);
        }
        if (message.proofClient.length !== 0) {
            writer.uint32(74).bytes(message.proofClient);
        }
        if (message.proofConsensus.length !== 0) {
            writer.uint32(82).bytes(message.proofConsensus);
        }
        if (message.consensusHeight !== undefined) {
            client_1.Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(98).string(message.signer);
        }
        if (message.hostConsensusStateProof.length !== 0) {
            writer.uint32(106).bytes(message.hostConsensusStateProof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.previousConnectionId = reader.string();
                    break;
                case 3:
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delayPeriod = reader.uint64();
                    break;
                case 6:
                    message.counterpartyVersions.push(connection_1.Version.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proofInit = reader.bytes();
                    break;
                case 9:
                    message.proofClient = reader.bytes();
                    break;
                case 10:
                    message.proofConsensus = reader.bytes();
                    break;
                case 11:
                    message.consensusHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.signer = reader.string();
                    break;
                case 13:
                    message.hostConsensusStateProof = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenTry();
        message.clientId = object.clientId ?? "";
        message.previousConnectionId = object.previousConnectionId ?? "";
        message.clientState = object.clientState !== undefined && object.clientState !== null ? any_1.Any.fromPartial(object.clientState) : undefined;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? connection_1.Counterparty.fromPartial(object.counterparty) : undefined;
        message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt(0);
        message.counterpartyVersions = object.counterpartyVersions?.map(e => connection_1.Version.fromPartial(e)) || [];
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.proofInit = object.proofInit ?? new Uint8Array();
        message.proofClient = object.proofClient ?? new Uint8Array();
        message.proofConsensus = object.proofConsensus ?? new Uint8Array();
        message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? client_1.Height.fromPartial(object.consensusHeight) : undefined;
        message.signer = object.signer ?? "";
        message.hostConsensusStateProof = object.hostConsensusStateProof ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenTry();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.previous_connection_id !== undefined && object.previous_connection_id !== null) {
            message.previousConnectionId = object.previous_connection_id;
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = any_1.Any.fromAmino(object.client_state);
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = connection_1.Counterparty.fromAmino(object.counterparty);
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delayPeriod = BigInt(object.delay_period);
        }
        message.counterpartyVersions = object.counterparty_versions?.map(e => connection_1.Version.fromAmino(e)) || [];
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proofInit = (0, helpers_1.bytesFromBase64)(object.proof_init);
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proofClient = (0, helpers_1.bytesFromBase64)(object.proof_client);
        }
        if (object.proof_consensus !== undefined && object.proof_consensus !== null) {
            message.proofConsensus = (0, helpers_1.bytesFromBase64)(object.proof_consensus);
        }
        if (object.consensus_height !== undefined && object.consensus_height !== null) {
            message.consensusHeight = client_1.Height.fromAmino(object.consensus_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.host_consensus_state_proof !== undefined && object.host_consensus_state_proof !== null) {
            message.hostConsensusStateProof = (0, helpers_1.bytesFromBase64)(object.host_consensus_state_proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId === "" ? undefined : message.clientId;
        obj.previous_connection_id = message.previousConnectionId === "" ? undefined : message.previousConnectionId;
        obj.client_state = message.clientState ? any_1.Any.toAmino(message.clientState) : undefined;
        obj.counterparty = message.counterparty ? connection_1.Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod?.toString() : undefined;
        if (message.counterpartyVersions) {
            obj.counterparty_versions = message.counterpartyVersions.map(e => e ? connection_1.Version.toAmino(e) : undefined);
        }
        else {
            obj.counterparty_versions = message.counterpartyVersions;
        }
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.proof_init = message.proofInit ? (0, helpers_1.base64FromBytes)(message.proofInit) : undefined;
        obj.proof_client = message.proofClient ? (0, helpers_1.base64FromBytes)(message.proofClient) : undefined;
        obj.proof_consensus = message.proofConsensus ? (0, helpers_1.base64FromBytes)(message.proofConsensus) : undefined;
        obj.consensus_height = message.consensusHeight ? client_1.Height.toAmino(message.consensusHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.host_consensus_state_proof = message.hostConsensusStateProof ? (0, helpers_1.base64FromBytes)(message.hostConsensusStateProof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTry",
            value: exports.MsgConnectionOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenTry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
            value: exports.MsgConnectionOpenTry.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgConnectionOpenTry.typeUrl, exports.MsgConnectionOpenTry);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgConnectionOpenTry.aminoType, exports.MsgConnectionOpenTry.typeUrl);
function createBaseMsgConnectionOpenTryResponse() {
    return {};
}
exports.MsgConnectionOpenTryResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenTryResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgConnectionOpenTryResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgConnectionOpenTryResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenTryResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConnectionOpenTryResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTryResponse",
            value: exports.MsgConnectionOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
            value: exports.MsgConnectionOpenTryResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgConnectionOpenTryResponse.typeUrl, exports.MsgConnectionOpenTryResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgConnectionOpenTryResponse.aminoType, exports.MsgConnectionOpenTryResponse.typeUrl);
function createBaseMsgConnectionOpenAck() {
    return {
        connectionId: "",
        counterpartyConnectionId: "",
        version: undefined,
        clientState: undefined,
        proofHeight: client_1.Height.fromPartial({}),
        proofTry: new Uint8Array(),
        proofClient: new Uint8Array(),
        proofConsensus: new Uint8Array(),
        consensusHeight: client_1.Height.fromPartial({}),
        signer: "",
        hostConsensusStateProof: new Uint8Array()
    };
}
exports.MsgConnectionOpenAck = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
    aminoType: "cosmos-sdk/MsgConnectionOpenAck",
    is(o) {
        return o && (o.$typeUrl === exports.MsgConnectionOpenAck.typeUrl || typeof o.connectionId === "string" && typeof o.counterpartyConnectionId === "string" && client_1.Height.is(o.proofHeight) && (o.proofTry instanceof Uint8Array || typeof o.proofTry === "string") && (o.proofClient instanceof Uint8Array || typeof o.proofClient === "string") && (o.proofConsensus instanceof Uint8Array || typeof o.proofConsensus === "string") && client_1.Height.is(o.consensusHeight) && typeof o.signer === "string" && (o.hostConsensusStateProof instanceof Uint8Array || typeof o.hostConsensusStateProof === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgConnectionOpenAck.typeUrl || typeof o.connection_id === "string" && typeof o.counterparty_connection_id === "string" && client_1.Height.isAmino(o.proof_height) && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && client_1.Height.isAmino(o.consensus_height) && typeof o.signer === "string" && (o.host_consensus_state_proof instanceof Uint8Array || typeof o.host_consensus_state_proof === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.counterpartyConnectionId !== "") {
            writer.uint32(18).string(message.counterpartyConnectionId);
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(50).bytes(message.proofTry);
        }
        if (message.proofClient.length !== 0) {
            writer.uint32(58).bytes(message.proofClient);
        }
        if (message.proofConsensus.length !== 0) {
            writer.uint32(66).bytes(message.proofConsensus);
        }
        if (message.consensusHeight !== undefined) {
            client_1.Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(82).string(message.signer);
        }
        if (message.hostConsensusStateProof.length !== 0) {
            writer.uint32(90).bytes(message.hostConsensusStateProof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.counterpartyConnectionId = reader.string();
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.proofTry = reader.bytes();
                    break;
                case 7:
                    message.proofClient = reader.bytes();
                    break;
                case 8:
                    message.proofConsensus = reader.bytes();
                    break;
                case 9:
                    message.consensusHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.signer = reader.string();
                    break;
                case 11:
                    message.hostConsensusStateProof = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenAck();
        message.connectionId = object.connectionId ?? "";
        message.counterpartyConnectionId = object.counterpartyConnectionId ?? "";
        message.version = object.version !== undefined && object.version !== null ? connection_1.Version.fromPartial(object.version) : undefined;
        message.clientState = object.clientState !== undefined && object.clientState !== null ? any_1.Any.fromPartial(object.clientState) : undefined;
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.proofTry = object.proofTry ?? new Uint8Array();
        message.proofClient = object.proofClient ?? new Uint8Array();
        message.proofConsensus = object.proofConsensus ?? new Uint8Array();
        message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? client_1.Height.fromPartial(object.consensusHeight) : undefined;
        message.signer = object.signer ?? "";
        message.hostConsensusStateProof = object.hostConsensusStateProof ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenAck();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.counterparty_connection_id !== undefined && object.counterparty_connection_id !== null) {
            message.counterpartyConnectionId = object.counterparty_connection_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = connection_1.Version.fromAmino(object.version);
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = any_1.Any.fromAmino(object.client_state);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.proof_try !== undefined && object.proof_try !== null) {
            message.proofTry = (0, helpers_1.bytesFromBase64)(object.proof_try);
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proofClient = (0, helpers_1.bytesFromBase64)(object.proof_client);
        }
        if (object.proof_consensus !== undefined && object.proof_consensus !== null) {
            message.proofConsensus = (0, helpers_1.bytesFromBase64)(object.proof_consensus);
        }
        if (object.consensus_height !== undefined && object.consensus_height !== null) {
            message.consensusHeight = client_1.Height.fromAmino(object.consensus_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.host_consensus_state_proof !== undefined && object.host_consensus_state_proof !== null) {
            message.hostConsensusStateProof = (0, helpers_1.bytesFromBase64)(object.host_consensus_state_proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
        obj.counterparty_connection_id = message.counterpartyConnectionId === "" ? undefined : message.counterpartyConnectionId;
        obj.version = message.version ? connection_1.Version.toAmino(message.version) : undefined;
        obj.client_state = message.clientState ? any_1.Any.toAmino(message.clientState) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.proof_try = message.proofTry ? (0, helpers_1.base64FromBytes)(message.proofTry) : undefined;
        obj.proof_client = message.proofClient ? (0, helpers_1.base64FromBytes)(message.proofClient) : undefined;
        obj.proof_consensus = message.proofConsensus ? (0, helpers_1.base64FromBytes)(message.proofConsensus) : undefined;
        obj.consensus_height = message.consensusHeight ? client_1.Height.toAmino(message.consensusHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.host_consensus_state_proof = message.hostConsensusStateProof ? (0, helpers_1.base64FromBytes)(message.hostConsensusStateProof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAck",
            value: exports.MsgConnectionOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenAck.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
            value: exports.MsgConnectionOpenAck.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgConnectionOpenAck.typeUrl, exports.MsgConnectionOpenAck);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgConnectionOpenAck.aminoType, exports.MsgConnectionOpenAck.typeUrl);
function createBaseMsgConnectionOpenAckResponse() {
    return {};
}
exports.MsgConnectionOpenAckResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenAckResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgConnectionOpenAckResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgConnectionOpenAckResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAckResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenAckResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConnectionOpenAckResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAckResponse",
            value: exports.MsgConnectionOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
            value: exports.MsgConnectionOpenAckResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgConnectionOpenAckResponse.typeUrl, exports.MsgConnectionOpenAckResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgConnectionOpenAckResponse.aminoType, exports.MsgConnectionOpenAckResponse.typeUrl);
function createBaseMsgConnectionOpenConfirm() {
    return {
        connectionId: "",
        proofAck: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgConnectionOpenConfirm = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
    is(o) {
        return o && (o.$typeUrl === exports.MsgConnectionOpenConfirm.typeUrl || typeof o.connectionId === "string" && (o.proofAck instanceof Uint8Array || typeof o.proofAck === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgConnectionOpenConfirm.typeUrl || typeof o.connection_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(18).bytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.proofAck = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenConfirm();
        message.connectionId = object.connectionId ?? "";
        message.proofAck = object.proofAck ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenConfirm();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.proof_ack !== undefined && object.proof_ack !== null) {
            message.proofAck = (0, helpers_1.bytesFromBase64)(object.proof_ack);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
        obj.proof_ack = message.proofAck ? (0, helpers_1.base64FromBytes)(message.proofAck) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirm",
            value: exports.MsgConnectionOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
            value: exports.MsgConnectionOpenConfirm.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgConnectionOpenConfirm.typeUrl, exports.MsgConnectionOpenConfirm);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgConnectionOpenConfirm.aminoType, exports.MsgConnectionOpenConfirm.typeUrl);
function createBaseMsgConnectionOpenConfirmResponse() {
    return {};
}
exports.MsgConnectionOpenConfirmResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgConnectionOpenConfirmResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgConnectionOpenConfirmResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgConnectionOpenConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConnectionOpenConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
            value: exports.MsgConnectionOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
            value: exports.MsgConnectionOpenConfirmResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgConnectionOpenConfirmResponse.typeUrl, exports.MsgConnectionOpenConfirmResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgConnectionOpenConfirmResponse.aminoType, exports.MsgConnectionOpenConfirmResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        signer: "",
        params: client_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/ibc.core.connection.v1.MsgUpdateParams",
    aminoType: "cosmos-sdk/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.signer === "string" && client_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.signer === "string" && client_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.params = client_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.signer = object.signer ?? "";
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgUpdateParamsResponse",
    aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParamsResponse.aminoType, exports.MsgUpdateParamsResponse.typeUrl);
