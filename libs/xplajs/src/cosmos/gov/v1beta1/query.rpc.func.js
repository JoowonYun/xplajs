"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetTallyResult = exports.createGetDeposits = exports.createGetDeposit = exports.createGetParams = exports.createGetVotes = exports.createGetVote = exports.createGetProposals = exports.createGetProposal = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const query_1 = require("./query");
const createGetProposal = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryProposalRequest.encode,
    decode: query_1.QueryProposalResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Proposal",
    clientResolver
});
exports.createGetProposal = createGetProposal;
const createGetProposals = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryProposalsRequest.encode,
    decode: query_1.QueryProposalsResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Proposals",
    clientResolver
});
exports.createGetProposals = createGetProposals;
const createGetVote = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryVoteRequest.encode,
    decode: query_1.QueryVoteResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Vote",
    clientResolver
});
exports.createGetVote = createGetVote;
const createGetVotes = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryVotesRequest.encode,
    decode: query_1.QueryVotesResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Votes",
    clientResolver
});
exports.createGetVotes = createGetVotes;
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
const createGetDeposit = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDepositRequest.encode,
    decode: query_1.QueryDepositResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Deposit",
    clientResolver
});
exports.createGetDeposit = createGetDeposit;
const createGetDeposits = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDepositsRequest.encode,
    decode: query_1.QueryDepositsResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Deposits",
    clientResolver
});
exports.createGetDeposits = createGetDeposits;
const createGetTallyResult = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryTallyResultRequest.encode,
    decode: query_1.QueryTallyResultResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "TallyResult",
    clientResolver
});
exports.createGetTallyResult = createGetTallyResult;
