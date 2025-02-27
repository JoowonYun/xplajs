import { RpcResolver } from "../../../helper-func-types";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export declare const createGetProposal: (clientResolver?: RpcResolver) => (request: QueryProposalRequest) => Promise<QueryProposalResponse>;
export declare const createGetProposals: (clientResolver?: RpcResolver) => (request: QueryProposalsRequest) => Promise<QueryProposalsResponse>;
export declare const createGetVote: (clientResolver?: RpcResolver) => (request: QueryVoteRequest) => Promise<QueryVoteResponse>;
export declare const createGetVotes: (clientResolver?: RpcResolver) => (request: QueryVotesRequest) => Promise<QueryVotesResponse>;
export declare const createGetParams: (clientResolver?: RpcResolver) => (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
export declare const createGetDeposit: (clientResolver?: RpcResolver) => (request: QueryDepositRequest) => Promise<QueryDepositResponse>;
export declare const createGetDeposits: (clientResolver?: RpcResolver) => (request: QueryDepositsRequest) => Promise<QueryDepositsResponse>;
export declare const createGetTallyResult: (clientResolver?: RpcResolver) => (request: QueryTallyResultRequest) => Promise<QueryTallyResultResponse>;
