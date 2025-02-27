"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.TallyParams = exports.VotingParams = exports.DepositParams = exports.Vote = exports.TallyResult = exports.Proposal = exports.Deposit = exports.WeightedVoteOption = exports.ProposalStatusAmino = exports.ProposalStatus = exports.VoteOptionAmino = exports.VoteOption = void 0;
exports.voteOptionFromJSON = voteOptionFromJSON;
exports.voteOptionToJSON = voteOptionToJSON;
exports.proposalStatusFromJSON = proposalStatusFromJSON;
exports.proposalStatusToJSON = proposalStatusToJSON;
const coin_1 = require("../../base/v1beta1/coin");
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const helpers_1 = require("../../../helpers");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
/** VoteOption enumerates the valid vote options for a given governance proposal. */
var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (exports.VoteOption = VoteOption = {}));
exports.VoteOptionAmino = VoteOption;
function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (exports.ProposalStatus = ProposalStatus = {}));
exports.ProposalStatusAmino = ProposalStatus;
function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
        case 2:
        case "PROPOSAL_STATUS_VOTING_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
        case 3:
        case "PROPOSAL_STATUS_PASSED":
            return ProposalStatus.PROPOSAL_STATUS_PASSED;
        case 4:
        case "PROPOSAL_STATUS_REJECTED":
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 5:
        case "PROPOSAL_STATUS_FAILED":
            return ProposalStatus.PROPOSAL_STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
            return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
            return "PROPOSAL_STATUS_VOTING_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_PASSED:
            return "PROPOSAL_STATUS_PASSED";
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return "PROPOSAL_STATUS_REJECTED";
        case ProposalStatus.PROPOSAL_STATUS_FAILED:
            return "PROPOSAL_STATUS_FAILED";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseWeightedVoteOption() {
    return {
        option: 0,
        weight: ""
    };
}
exports.WeightedVoteOption = {
    typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
    aminoType: "cosmos-sdk/v1/WeightedVoteOption",
    is(o) {
        return o && (o.$typeUrl === exports.WeightedVoteOption.typeUrl || (0, helpers_1.isSet)(o.option) && typeof o.weight === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.WeightedVoteOption.typeUrl || (0, helpers_1.isSet)(o.option) && typeof o.weight === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedVoteOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightedVoteOption();
        message.option = object.option ?? 0;
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWeightedVoteOption();
        if (object.option !== undefined && object.option !== null) {
            message.option = object.option;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.option = message.option === 0 ? undefined : message.option;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WeightedVoteOption.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/WeightedVoteOption",
            value: exports.WeightedVoteOption.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.WeightedVoteOption.decode(message.value);
    },
    toProto(message) {
        return exports.WeightedVoteOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.WeightedVoteOption",
            value: exports.WeightedVoteOption.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.WeightedVoteOption.typeUrl, exports.WeightedVoteOption);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.WeightedVoteOption.aminoType, exports.WeightedVoteOption.typeUrl);
function createBaseDeposit() {
    return {
        proposalId: BigInt(0),
        depositor: "",
        amount: []
    };
}
exports.Deposit = {
    typeUrl: "/cosmos.gov.v1.Deposit",
    aminoType: "cosmos-sdk/v1/Deposit",
    is(o) {
        return o && (o.$typeUrl === exports.Deposit.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Deposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDeposit();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeposit();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
        obj.depositor = message.depositor === "" ? undefined : message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Deposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/Deposit",
            value: exports.Deposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Deposit.decode(message.value);
    },
    toProto(message) {
        return exports.Deposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.Deposit",
            value: exports.Deposit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Deposit.typeUrl, exports.Deposit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Deposit.aminoType, exports.Deposit.typeUrl);
function createBaseProposal() {
    return {
        id: BigInt(0),
        messages: [],
        status: 0,
        finalTallyResult: undefined,
        submitTime: undefined,
        depositEndTime: undefined,
        totalDeposit: [],
        votingStartTime: undefined,
        votingEndTime: undefined,
        metadata: "",
        title: "",
        summary: "",
        proposer: "",
        expedited: false,
        failedReason: ""
    };
}
exports.Proposal = {
    typeUrl: "/cosmos.gov.v1.Proposal",
    aminoType: "cosmos-sdk/v1/Proposal",
    is(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.messages) && (!o.messages.length || any_1.Any.is(o.messages[0])) && (0, helpers_1.isSet)(o.status) && Array.isArray(o.totalDeposit) && (!o.totalDeposit.length || coin_1.Coin.is(o.totalDeposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string" && typeof o.expedited === "boolean" && typeof o.failedReason === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || typeof o.id === "bigint" && Array.isArray(o.messages) && (!o.messages.length || any_1.Any.isAmino(o.messages[0])) && (0, helpers_1.isSet)(o.status) && Array.isArray(o.total_deposit) && (!o.total_deposit.length || coin_1.Coin.isAmino(o.total_deposit[0])) && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.proposer === "string" && typeof o.expedited === "boolean" && typeof o.failed_reason === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.finalTallyResult !== undefined) {
            exports.TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
        }
        if (message.submitTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.depositEndTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.depositEndTime), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.totalDeposit) {
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.votingStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingStartTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.votingEndTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingEndTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(82).string(message.metadata);
        }
        if (message.title !== "") {
            writer.uint32(90).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(98).string(message.summary);
        }
        if (message.proposer !== "") {
            writer.uint32(106).string(message.proposer);
        }
        if (message.expedited === true) {
            writer.uint32(112).bool(message.expedited);
        }
        if (message.failedReason !== "") {
            writer.uint32(122).string(message.failedReason);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.finalTallyResult = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.depositEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.totalDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votingStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.votingEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.metadata = reader.string();
                    break;
                case 11:
                    message.title = reader.string();
                    break;
                case 12:
                    message.summary = reader.string();
                    break;
                case 13:
                    message.proposer = reader.string();
                    break;
                case 14:
                    message.expedited = reader.bool();
                    break;
                case 15:
                    message.failedReason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.status = object.status ?? 0;
        message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? exports.TallyResult.fromPartial(object.finalTallyResult) : undefined;
        message.submitTime = object.submitTime ?? undefined;
        message.depositEndTime = object.depositEndTime ?? undefined;
        message.totalDeposit = object.totalDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.votingStartTime = object.votingStartTime ?? undefined;
        message.votingEndTime = object.votingEndTime ?? undefined;
        message.metadata = object.metadata ?? "";
        message.title = object.title ?? "";
        message.summary = object.summary ?? "";
        message.proposer = object.proposer ?? "";
        message.expedited = object.expedited ?? false;
        message.failedReason = object.failedReason ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseProposal();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        message.messages = object.messages?.map(e => any_1.Any.fromAmino(e)) || [];
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
            message.finalTallyResult = exports.TallyResult.fromAmino(object.final_tally_result);
        }
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.submit_time));
        }
        if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
            message.depositEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.deposit_end_time));
        }
        message.totalDeposit = object.total_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
            message.votingStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_start_time));
        }
        if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
            message.votingEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_end_time));
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.summary !== undefined && object.summary !== null) {
            message.summary = object.summary;
        }
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = object.proposer;
        }
        if (object.expedited !== undefined && object.expedited !== null) {
            message.expedited = object.expedited;
        }
        if (object.failed_reason !== undefined && object.failed_reason !== null) {
            message.failedReason = object.failed_reason;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = message.messages;
        }
        obj.status = message.status === 0 ? undefined : message.status;
        obj.final_tally_result = message.finalTallyResult ? exports.TallyResult.toAmino(message.finalTallyResult) : undefined;
        obj.submit_time = message.submitTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.submitTime)) : undefined;
        obj.deposit_end_time = message.depositEndTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.depositEndTime)) : undefined;
        if (message.totalDeposit) {
            obj.total_deposit = message.totalDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_deposit = message.totalDeposit;
        }
        obj.voting_start_time = message.votingStartTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.votingStartTime)) : undefined;
        obj.voting_end_time = message.votingEndTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.votingEndTime)) : undefined;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.title = message.title === "" ? undefined : message.title;
        obj.summary = message.summary === "" ? undefined : message.summary;
        obj.proposer = message.proposer === "" ? undefined : message.proposer;
        obj.expedited = message.expedited === false ? undefined : message.expedited;
        obj.failed_reason = message.failedReason === "" ? undefined : message.failedReason;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/Proposal",
            value: exports.Proposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Proposal.typeUrl, exports.Proposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Proposal.aminoType, exports.Proposal.typeUrl);
function createBaseTallyResult() {
    return {
        yesCount: "",
        abstainCount: "",
        noCount: "",
        noWithVetoCount: ""
    };
}
exports.TallyResult = {
    typeUrl: "/cosmos.gov.v1.TallyResult",
    aminoType: "cosmos-sdk/v1/TallyResult",
    is(o) {
        return o && (o.$typeUrl === exports.TallyResult.typeUrl || typeof o.yesCount === "string" && typeof o.abstainCount === "string" && typeof o.noCount === "string" && typeof o.noWithVetoCount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TallyResult.typeUrl || typeof o.yes_count === "string" && typeof o.abstain_count === "string" && typeof o.no_count === "string" && typeof o.no_with_veto_count === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.yesCount !== "") {
            writer.uint32(10).string(message.yesCount);
        }
        if (message.abstainCount !== "") {
            writer.uint32(18).string(message.abstainCount);
        }
        if (message.noCount !== "") {
            writer.uint32(26).string(message.noCount);
        }
        if (message.noWithVetoCount !== "") {
            writer.uint32(34).string(message.noWithVetoCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yesCount = reader.string();
                    break;
                case 2:
                    message.abstainCount = reader.string();
                    break;
                case 3:
                    message.noCount = reader.string();
                    break;
                case 4:
                    message.noWithVetoCount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTallyResult();
        message.yesCount = object.yesCount ?? "";
        message.abstainCount = object.abstainCount ?? "";
        message.noCount = object.noCount ?? "";
        message.noWithVetoCount = object.noWithVetoCount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTallyResult();
        if (object.yes_count !== undefined && object.yes_count !== null) {
            message.yesCount = object.yes_count;
        }
        if (object.abstain_count !== undefined && object.abstain_count !== null) {
            message.abstainCount = object.abstain_count;
        }
        if (object.no_count !== undefined && object.no_count !== null) {
            message.noCount = object.no_count;
        }
        if (object.no_with_veto_count !== undefined && object.no_with_veto_count !== null) {
            message.noWithVetoCount = object.no_with_veto_count;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.yes_count = message.yesCount === "" ? undefined : message.yesCount;
        obj.abstain_count = message.abstainCount === "" ? undefined : message.abstainCount;
        obj.no_count = message.noCount === "" ? undefined : message.noCount;
        obj.no_with_veto_count = message.noWithVetoCount === "" ? undefined : message.noWithVetoCount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TallyResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/TallyResult",
            value: exports.TallyResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TallyResult.decode(message.value);
    },
    toProto(message) {
        return exports.TallyResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.TallyResult",
            value: exports.TallyResult.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TallyResult.typeUrl, exports.TallyResult);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TallyResult.aminoType, exports.TallyResult.typeUrl);
function createBaseVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        options: [],
        metadata: ""
    };
}
exports.Vote = {
    typeUrl: "/cosmos.gov.v1.Vote",
    aminoType: "cosmos-sdk/v1/Vote",
    is(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || exports.WeightedVoteOption.is(o.options[0])) && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || exports.WeightedVoteOption.isAmino(o.options[0])) && typeof o.metadata === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            exports.WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 4:
                    message.options.push(exports.WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.options = object.options?.map(e => exports.WeightedVoteOption.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        message.options = object.options?.map(e => exports.WeightedVoteOption.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
        obj.voter = message.voter === "" ? undefined : message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? exports.WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = message.options;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/Vote",
            value: exports.Vote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Vote.decode(message.value);
    },
    toProto(message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Vote.typeUrl, exports.Vote);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Vote.aminoType, exports.Vote.typeUrl);
function createBaseDepositParams() {
    return {
        minDeposit: [],
        maxDepositPeriod: undefined
    };
}
exports.DepositParams = {
    typeUrl: "/cosmos.gov.v1.DepositParams",
    aminoType: "cosmos-sdk/v1/DepositParams",
    is(o) {
        return o && (o.$typeUrl === exports.DepositParams.typeUrl || Array.isArray(o.minDeposit) && (!o.minDeposit.length || coin_1.Coin.is(o.minDeposit[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DepositParams.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || coin_1.Coin.isAmino(o.min_deposit[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.minDeposit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxDepositPeriod !== undefined) {
            duration_1.Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxDepositPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDepositParams();
        message.minDeposit = object.minDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? duration_1.Duration.fromPartial(object.maxDepositPeriod) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositParams();
        message.minDeposit = object.min_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
            message.maxDepositPeriod = duration_1.Duration.fromAmino(object.max_deposit_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.minDeposit) {
            obj.min_deposit = message.minDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_deposit = message.minDeposit;
        }
        obj.max_deposit_period = message.maxDepositPeriod ? duration_1.Duration.toAmino(message.maxDepositPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DepositParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/DepositParams",
            value: exports.DepositParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DepositParams.decode(message.value);
    },
    toProto(message) {
        return exports.DepositParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.DepositParams",
            value: exports.DepositParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DepositParams.typeUrl, exports.DepositParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DepositParams.aminoType, exports.DepositParams.typeUrl);
function createBaseVotingParams() {
    return {
        votingPeriod: undefined
    };
}
exports.VotingParams = {
    typeUrl: "/cosmos.gov.v1.VotingParams",
    aminoType: "cosmos-sdk/v1/VotingParams",
    is(o) {
        return o && o.$typeUrl === exports.VotingParams.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.VotingParams.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.votingPeriod !== undefined) {
            duration_1.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVotingParams();
        message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? duration_1.Duration.fromPartial(object.votingPeriod) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVotingParams();
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.votingPeriod = duration_1.Duration.fromAmino(object.voting_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voting_period = message.votingPeriod ? duration_1.Duration.toAmino(message.votingPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VotingParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/VotingParams",
            value: exports.VotingParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.VotingParams.decode(message.value);
    },
    toProto(message) {
        return exports.VotingParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.VotingParams",
            value: exports.VotingParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.VotingParams.typeUrl, exports.VotingParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.VotingParams.aminoType, exports.VotingParams.typeUrl);
function createBaseTallyParams() {
    return {
        quorum: "",
        threshold: "",
        vetoThreshold: ""
    };
}
exports.TallyParams = {
    typeUrl: "/cosmos.gov.v1.TallyParams",
    aminoType: "cosmos-sdk/v1/TallyParams",
    is(o) {
        return o && (o.$typeUrl === exports.TallyParams.typeUrl || typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.vetoThreshold === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TallyParams.typeUrl || typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.veto_threshold === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.quorum !== "") {
            writer.uint32(10).string(message.quorum);
        }
        if (message.threshold !== "") {
            writer.uint32(18).string(message.threshold);
        }
        if (message.vetoThreshold !== "") {
            writer.uint32(26).string(message.vetoThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.string();
                    break;
                case 2:
                    message.threshold = reader.string();
                    break;
                case 3:
                    message.vetoThreshold = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTallyParams();
        message.quorum = object.quorum ?? "";
        message.threshold = object.threshold ?? "";
        message.vetoThreshold = object.vetoThreshold ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTallyParams();
        if (object.quorum !== undefined && object.quorum !== null) {
            message.quorum = object.quorum;
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
            message.vetoThreshold = object.veto_threshold;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quorum = message.quorum === "" ? undefined : message.quorum;
        obj.threshold = message.threshold === "" ? undefined : message.threshold;
        obj.veto_threshold = message.vetoThreshold === "" ? undefined : message.vetoThreshold;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TallyParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/TallyParams",
            value: exports.TallyParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TallyParams.decode(message.value);
    },
    toProto(message) {
        return exports.TallyParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.TallyParams",
            value: exports.TallyParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TallyParams.typeUrl, exports.TallyParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.TallyParams.aminoType, exports.TallyParams.typeUrl);
function createBaseParams() {
    return {
        minDeposit: [],
        maxDepositPeriod: undefined,
        votingPeriod: undefined,
        quorum: "",
        threshold: "",
        vetoThreshold: "",
        minInitialDepositRatio: "",
        proposalCancelRatio: "",
        proposalCancelDest: "",
        expeditedVotingPeriod: undefined,
        expeditedThreshold: "",
        expeditedMinDeposit: [],
        burnVoteQuorum: false,
        burnProposalDepositPrevote: false,
        burnVoteVeto: false,
        minDepositRatio: ""
    };
}
exports.Params = {
    typeUrl: "/cosmos.gov.v1.Params",
    aminoType: "cosmos-sdk/v1/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.minDeposit) && (!o.minDeposit.length || coin_1.Coin.is(o.minDeposit[0])) && typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.vetoThreshold === "string" && typeof o.minInitialDepositRatio === "string" && typeof o.proposalCancelRatio === "string" && typeof o.proposalCancelDest === "string" && typeof o.expeditedThreshold === "string" && Array.isArray(o.expeditedMinDeposit) && (!o.expeditedMinDeposit.length || coin_1.Coin.is(o.expeditedMinDeposit[0])) && typeof o.burnVoteQuorum === "boolean" && typeof o.burnProposalDepositPrevote === "boolean" && typeof o.burnVoteVeto === "boolean" && typeof o.minDepositRatio === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || coin_1.Coin.isAmino(o.min_deposit[0])) && typeof o.quorum === "string" && typeof o.threshold === "string" && typeof o.veto_threshold === "string" && typeof o.min_initial_deposit_ratio === "string" && typeof o.proposal_cancel_ratio === "string" && typeof o.proposal_cancel_dest === "string" && typeof o.expedited_threshold === "string" && Array.isArray(o.expedited_min_deposit) && (!o.expedited_min_deposit.length || coin_1.Coin.isAmino(o.expedited_min_deposit[0])) && typeof o.burn_vote_quorum === "boolean" && typeof o.burn_proposal_deposit_prevote === "boolean" && typeof o.burn_vote_veto === "boolean" && typeof o.min_deposit_ratio === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.minDeposit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxDepositPeriod !== undefined) {
            duration_1.Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPeriod !== undefined) {
            duration_1.Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
        }
        if (message.quorum !== "") {
            writer.uint32(34).string(message.quorum);
        }
        if (message.threshold !== "") {
            writer.uint32(42).string(message.threshold);
        }
        if (message.vetoThreshold !== "") {
            writer.uint32(50).string(message.vetoThreshold);
        }
        if (message.minInitialDepositRatio !== "") {
            writer.uint32(58).string(message.minInitialDepositRatio);
        }
        if (message.proposalCancelRatio !== "") {
            writer.uint32(66).string(message.proposalCancelRatio);
        }
        if (message.proposalCancelDest !== "") {
            writer.uint32(74).string(message.proposalCancelDest);
        }
        if (message.expeditedVotingPeriod !== undefined) {
            duration_1.Duration.encode(message.expeditedVotingPeriod, writer.uint32(82).fork()).ldelim();
        }
        if (message.expeditedThreshold !== "") {
            writer.uint32(90).string(message.expeditedThreshold);
        }
        for (const v of message.expeditedMinDeposit) {
            coin_1.Coin.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.burnVoteQuorum === true) {
            writer.uint32(104).bool(message.burnVoteQuorum);
        }
        if (message.burnProposalDepositPrevote === true) {
            writer.uint32(112).bool(message.burnProposalDepositPrevote);
        }
        if (message.burnVoteVeto === true) {
            writer.uint32(120).bool(message.burnVoteVeto);
        }
        if (message.minDepositRatio !== "") {
            writer.uint32(130).string(message.minDepositRatio);
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
                    message.minDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxDepositPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.votingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.quorum = reader.string();
                    break;
                case 5:
                    message.threshold = reader.string();
                    break;
                case 6:
                    message.vetoThreshold = reader.string();
                    break;
                case 7:
                    message.minInitialDepositRatio = reader.string();
                    break;
                case 8:
                    message.proposalCancelRatio = reader.string();
                    break;
                case 9:
                    message.proposalCancelDest = reader.string();
                    break;
                case 10:
                    message.expeditedVotingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.expeditedThreshold = reader.string();
                    break;
                case 12:
                    message.expeditedMinDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.burnVoteQuorum = reader.bool();
                    break;
                case 14:
                    message.burnProposalDepositPrevote = reader.bool();
                    break;
                case 15:
                    message.burnVoteVeto = reader.bool();
                    break;
                case 16:
                    message.minDepositRatio = reader.string();
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
        message.minDeposit = object.minDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? duration_1.Duration.fromPartial(object.maxDepositPeriod) : undefined;
        message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? duration_1.Duration.fromPartial(object.votingPeriod) : undefined;
        message.quorum = object.quorum ?? "";
        message.threshold = object.threshold ?? "";
        message.vetoThreshold = object.vetoThreshold ?? "";
        message.minInitialDepositRatio = object.minInitialDepositRatio ?? "";
        message.proposalCancelRatio = object.proposalCancelRatio ?? "";
        message.proposalCancelDest = object.proposalCancelDest ?? "";
        message.expeditedVotingPeriod = object.expeditedVotingPeriod !== undefined && object.expeditedVotingPeriod !== null ? duration_1.Duration.fromPartial(object.expeditedVotingPeriod) : undefined;
        message.expeditedThreshold = object.expeditedThreshold ?? "";
        message.expeditedMinDeposit = object.expeditedMinDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.burnVoteQuorum = object.burnVoteQuorum ?? false;
        message.burnProposalDepositPrevote = object.burnProposalDepositPrevote ?? false;
        message.burnVoteVeto = object.burnVoteVeto ?? false;
        message.minDepositRatio = object.minDepositRatio ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.minDeposit = object.min_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
            message.maxDepositPeriod = duration_1.Duration.fromAmino(object.max_deposit_period);
        }
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.votingPeriod = duration_1.Duration.fromAmino(object.voting_period);
        }
        if (object.quorum !== undefined && object.quorum !== null) {
            message.quorum = object.quorum;
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
            message.vetoThreshold = object.veto_threshold;
        }
        if (object.min_initial_deposit_ratio !== undefined && object.min_initial_deposit_ratio !== null) {
            message.minInitialDepositRatio = object.min_initial_deposit_ratio;
        }
        if (object.proposal_cancel_ratio !== undefined && object.proposal_cancel_ratio !== null) {
            message.proposalCancelRatio = object.proposal_cancel_ratio;
        }
        if (object.proposal_cancel_dest !== undefined && object.proposal_cancel_dest !== null) {
            message.proposalCancelDest = object.proposal_cancel_dest;
        }
        if (object.expedited_voting_period !== undefined && object.expedited_voting_period !== null) {
            message.expeditedVotingPeriod = duration_1.Duration.fromAmino(object.expedited_voting_period);
        }
        if (object.expedited_threshold !== undefined && object.expedited_threshold !== null) {
            message.expeditedThreshold = object.expedited_threshold;
        }
        message.expeditedMinDeposit = object.expedited_min_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.burn_vote_quorum !== undefined && object.burn_vote_quorum !== null) {
            message.burnVoteQuorum = object.burn_vote_quorum;
        }
        if (object.burn_proposal_deposit_prevote !== undefined && object.burn_proposal_deposit_prevote !== null) {
            message.burnProposalDepositPrevote = object.burn_proposal_deposit_prevote;
        }
        if (object.burn_vote_veto !== undefined && object.burn_vote_veto !== null) {
            message.burnVoteVeto = object.burn_vote_veto;
        }
        if (object.min_deposit_ratio !== undefined && object.min_deposit_ratio !== null) {
            message.minDepositRatio = object.min_deposit_ratio;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.minDeposit) {
            obj.min_deposit = message.minDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_deposit = message.minDeposit;
        }
        obj.max_deposit_period = message.maxDepositPeriod ? duration_1.Duration.toAmino(message.maxDepositPeriod) : undefined;
        obj.voting_period = message.votingPeriod ? duration_1.Duration.toAmino(message.votingPeriod) : undefined;
        obj.quorum = message.quorum === "" ? undefined : message.quorum;
        obj.threshold = message.threshold === "" ? undefined : message.threshold;
        obj.veto_threshold = message.vetoThreshold === "" ? undefined : message.vetoThreshold;
        obj.min_initial_deposit_ratio = message.minInitialDepositRatio === "" ? undefined : message.minInitialDepositRatio;
        obj.proposal_cancel_ratio = message.proposalCancelRatio === "" ? undefined : message.proposalCancelRatio;
        obj.proposal_cancel_dest = message.proposalCancelDest === "" ? undefined : message.proposalCancelDest;
        obj.expedited_voting_period = message.expeditedVotingPeriod ? duration_1.Duration.toAmino(message.expeditedVotingPeriod) : undefined;
        obj.expedited_threshold = message.expeditedThreshold === "" ? undefined : message.expeditedThreshold;
        if (message.expeditedMinDeposit) {
            obj.expedited_min_deposit = message.expeditedMinDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.expedited_min_deposit = message.expeditedMinDeposit;
        }
        obj.burn_vote_quorum = message.burnVoteQuorum === false ? undefined : message.burnVoteQuorum;
        obj.burn_proposal_deposit_prevote = message.burnProposalDepositPrevote === false ? undefined : message.burnProposalDepositPrevote;
        obj.burn_vote_veto = message.burnVoteVeto === false ? undefined : message.burnVoteVeto;
        obj.min_deposit_ratio = message.minDepositRatio === "" ? undefined : message.minDepositRatio;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/Params",
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
            typeUrl: "/cosmos.gov.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
