"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxProof = exports.BlockMeta = exports.LightBlock = exports.SignedHeader = exports.Proposal = exports.ExtendedCommitSig = exports.ExtendedCommit = exports.CommitSig = exports.Commit = exports.Vote = exports.Data = exports.Header = exports.BlockID = exports.Part = exports.PartSetHeader = exports.SignedMsgType = void 0;
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
var proof_1 = require("../crypto/proof");
var types_1 = require("../version/types");
var timestamp_1 = require("../../google/protobuf/timestamp");
var validator_1 = require("./validator");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (exports.SignedMsgType = SignedMsgType = {}));
function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBasePartSetHeader() {
    return {
        total: 0,
        hash: new Uint8Array()
    };
}
exports.PartSetHeader = {
    typeUrl: "/tendermint.types.PartSetHeader",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePartSetHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePartSetHeader();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : 0;
        message.hash = (_b = object.hash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBasePart() {
    return {
        index: 0,
        bytes: new Uint8Array(),
        proof: proof_1.Proof.fromPartial({})
    };
}
exports.Part = {
    typeUrl: "/tendermint.types.Part",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.bytes = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePart();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.bytes = (_b = object.bytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    }
};
function createBaseBlockID() {
    return {
        hash: new Uint8Array(),
        partSetHeader: exports.PartSetHeader.fromPartial({})
    };
}
exports.BlockID = {
    typeUrl: "/tendermint.types.BlockID",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.partSetHeader !== undefined) {
            exports.PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockID();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.partSetHeader = exports.PartSetHeader.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBlockID();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? exports.PartSetHeader.fromPartial(object.partSetHeader) : undefined;
        return message;
    }
};
function createBaseHeader() {
    return {
        version: types_1.Consensus.fromPartial({}),
        chainId: "",
        height: BigInt(0),
        time: new Date(),
        lastBlockId: exports.BlockID.fromPartial({}),
        lastCommitHash: new Uint8Array(),
        dataHash: new Uint8Array(),
        validatorsHash: new Uint8Array(),
        nextValidatorsHash: new Uint8Array(),
        consensusHash: new Uint8Array(),
        appHash: new Uint8Array(),
        lastResultsHash: new Uint8Array(),
        evidenceHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
exports.Header = {
    typeUrl: "/tendermint.types.Header",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.version !== undefined) {
            types_1.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockId !== undefined) {
            exports.BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastCommitHash.length !== 0) {
            writer.uint32(50).bytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(58).bytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            writer.uint32(66).bytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(74).bytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            writer.uint32(82).bytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(90).bytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            writer.uint32(106).bytes(message.evidenceHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(114).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = types_1.Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastBlockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.lastCommitHash = reader.bytes();
                    break;
                case 7:
                    message.dataHash = reader.bytes();
                    break;
                case 8:
                    message.validatorsHash = reader.bytes();
                    break;
                case 9:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 10:
                    message.consensusHash = reader.bytes();
                    break;
                case 11:
                    message.appHash = reader.bytes();
                    break;
                case 12:
                    message.lastResultsHash = reader.bytes();
                    break;
                case 13:
                    message.evidenceHash = reader.bytes();
                    break;
                case 14:
                    message.proposerAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? types_1.Consensus.fromPartial(object.version) : undefined;
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? exports.BlockID.fromPartial(object.lastBlockId) : undefined;
        message.lastCommitHash = (_c = object.lastCommitHash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.dataHash = (_d = object.dataHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.validatorsHash = (_e = object.validatorsHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.nextValidatorsHash = (_f = object.nextValidatorsHash) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.consensusHash = (_g = object.consensusHash) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.appHash = (_h = object.appHash) !== null && _h !== void 0 ? _h : new Uint8Array();
        message.lastResultsHash = (_j = object.lastResultsHash) !== null && _j !== void 0 ? _j : new Uint8Array();
        message.evidenceHash = (_k = object.evidenceHash) !== null && _k !== void 0 ? _k : new Uint8Array();
        message.proposerAddress = (_l = object.proposerAddress) !== null && _l !== void 0 ? _l : new Uint8Array();
        return message;
    }
};
function createBaseData() {
    return {
        txs: []
    };
}
exports.Data = {
    typeUrl: "/tendermint.types.Data",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseData();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseVote() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        blockId: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        validatorAddress: new Uint8Array(),
        validatorIndex: 0,
        signature: new Uint8Array(),
        extension: new Uint8Array(),
        extensionSignature: new Uint8Array()
    };
}
exports.Vote = {
    typeUrl: "/tendermint.types.Vote",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(50).bytes(message.validatorAddress);
        }
        if (message.validatorIndex !== 0) {
            writer.uint32(56).int32(message.validatorIndex);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        if (message.extension.length !== 0) {
            writer.uint32(74).bytes(message.extension);
        }
        if (message.extensionSignature.length !== 0) {
            writer.uint32(82).bytes(message.extensionSignature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAddress = reader.bytes();
                    break;
                case 7:
                    message.validatorIndex = reader.int32();
                    break;
                case 8:
                    message.signature = reader.bytes();
                    break;
                case 9:
                    message.extension = reader.bytes();
                    break;
                case 10:
                    message.extensionSignature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseVote();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : undefined;
        message.validatorAddress = (_d = object.validatorAddress) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.validatorIndex = (_e = object.validatorIndex) !== null && _e !== void 0 ? _e : 0;
        message.signature = (_f = object.signature) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.extension = (_g = object.extension) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.extensionSignature = (_h = object.extensionSignature) !== null && _h !== void 0 ? _h : new Uint8Array();
        return message;
    }
};
function createBaseCommit() {
    return {
        height: BigInt(0),
        round: 0,
        blockId: exports.BlockID.fromPartial({}),
        signatures: []
    };
}
exports.Commit = {
    typeUrl: "/tendermint.types.Commit",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
        }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatures.push(exports.CommitSig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCommit();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.signatures = ((_b = object.signatures) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.CommitSig.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseCommitSig() {
    return {
        blockIdFlag: 0,
        validatorAddress: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.CommitSig = {
    typeUrl: "/tendermint.types.CommitSig",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockIdFlag !== 0) {
            writer.uint32(8).int32(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommitSig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockIdFlag = reader.int32();
                    break;
                case 2:
                    message.validatorAddress = reader.bytes();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseCommitSig();
        message.blockIdFlag = (_a = object.blockIdFlag) !== null && _a !== void 0 ? _a : 0;
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : undefined;
        message.signature = (_d = object.signature) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    }
};
function createBaseExtendedCommit() {
    return {
        height: BigInt(0),
        round: 0,
        blockId: exports.BlockID.fromPartial({}),
        extendedSignatures: []
    };
}
exports.ExtendedCommit = {
    typeUrl: "/tendermint.types.ExtendedCommit",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
        }
        for (var _i = 0, _a = message.extendedSignatures; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ExtendedCommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExtendedCommit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extendedSignatures.push(exports.ExtendedCommitSig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExtendedCommit();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.extendedSignatures = ((_b = object.extendedSignatures) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ExtendedCommitSig.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseExtendedCommitSig() {
    return {
        blockIdFlag: 0,
        validatorAddress: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array(),
        extension: new Uint8Array(),
        extensionSignature: new Uint8Array()
    };
}
exports.ExtendedCommitSig = {
    typeUrl: "/tendermint.types.ExtendedCommitSig",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockIdFlag !== 0) {
            writer.uint32(8).int32(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        if (message.extension.length !== 0) {
            writer.uint32(42).bytes(message.extension);
        }
        if (message.extensionSignature.length !== 0) {
            writer.uint32(50).bytes(message.extensionSignature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExtendedCommitSig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockIdFlag = reader.int32();
                    break;
                case 2:
                    message.validatorAddress = reader.bytes();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
                    break;
                case 5:
                    message.extension = reader.bytes();
                    break;
                case 6:
                    message.extensionSignature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseExtendedCommitSig();
        message.blockIdFlag = (_a = object.blockIdFlag) !== null && _a !== void 0 ? _a : 0;
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : undefined;
        message.signature = (_d = object.signature) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.extension = (_e = object.extension) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.extensionSignature = (_f = object.extensionSignature) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    }
};
function createBaseProposal() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        polRound: 0,
        blockId: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.Proposal = {
    typeUrl: "/tendermint.types.Proposal",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.polRound !== 0) {
            writer.uint32(32).int32(message.polRound);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.polRound = reader.int32();
                    break;
                case 5:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseProposal();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.polRound = (_c = object.polRound) !== null && _c !== void 0 ? _c : 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : undefined;
        message.signature = (_e = object.signature) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    }
};
function createBaseSignedHeader() {
    return {
        header: undefined,
        commit: undefined
    };
}
exports.SignedHeader = {
    typeUrl: "/tendermint.types.SignedHeader",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignedHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commit = exports.Commit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseSignedHeader();
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.Commit.fromPartial(object.commit) : undefined;
        return message;
    }
};
function createBaseLightBlock() {
    return {
        signedHeader: undefined,
        validatorSet: undefined
    };
}
exports.LightBlock = {
    typeUrl: "/tendermint.types.LightBlock",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.signedHeader !== undefined) {
            exports.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLightBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedHeader = exports.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseLightBlock();
        message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? exports.SignedHeader.fromPartial(object.signedHeader) : undefined;
        message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? validator_1.ValidatorSet.fromPartial(object.validatorSet) : undefined;
        return message;
    }
};
function createBaseBlockMeta() {
    return {
        blockId: exports.BlockID.fromPartial({}),
        blockSize: BigInt(0),
        header: exports.Header.fromPartial({}),
        numTxs: BigInt(0)
    };
}
exports.BlockMeta = {
    typeUrl: "/tendermint.types.BlockMeta",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockSize !== BigInt(0)) {
            writer.uint32(16).int64(message.blockSize);
        }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.numTxs !== BigInt(0)) {
            writer.uint32(32).int64(message.numTxs);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockMeta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blockSize = reader.int64();
                    break;
                case 3:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.numTxs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseBlockMeta();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? exports.BlockID.fromPartial(object.blockId) : undefined;
        message.blockSize = object.blockSize !== undefined && object.blockSize !== null ? BigInt(object.blockSize.toString()) : BigInt(0);
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.numTxs = object.numTxs !== undefined && object.numTxs !== null ? BigInt(object.numTxs.toString()) : BigInt(0);
        return message;
    }
};
function createBaseTxProof() {
    return {
        rootHash: new Uint8Array(),
        data: new Uint8Array(),
        proof: undefined
    };
}
exports.TxProof = {
    typeUrl: "/tendermint.types.TxProof",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.rootHash.length !== 0) {
            writer.uint32(10).bytes(message.rootHash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxProof();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rootHash = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTxProof();
        message.rootHash = (_a = object.rootHash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    }
};
