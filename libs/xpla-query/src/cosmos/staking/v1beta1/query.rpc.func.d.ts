import { RpcResolver } from "../../../helper-func-types";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export declare const createGetValidators: (clientResolver?: RpcResolver) => (request: QueryValidatorsRequest) => Promise<QueryValidatorsResponse>;
export declare const useGetValidators: <TData = QueryValidatorsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryValidatorsRequest, QueryValidatorsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetValidator: (clientResolver?: RpcResolver) => (request: QueryValidatorRequest) => Promise<QueryValidatorResponse>;
export declare const useGetValidator: <TData = QueryValidatorResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryValidatorRequest, QueryValidatorResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetValidatorDelegations: (clientResolver?: RpcResolver) => (request: QueryValidatorDelegationsRequest) => Promise<QueryValidatorDelegationsResponse>;
export declare const useGetValidatorDelegations: <TData = QueryValidatorDelegationsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetValidatorUnbondingDelegations: (clientResolver?: RpcResolver) => (request: QueryValidatorUnbondingDelegationsRequest) => Promise<QueryValidatorUnbondingDelegationsResponse>;
export declare const useGetValidatorUnbondingDelegations: <TData = QueryValidatorUnbondingDelegationsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetDelegation: (clientResolver?: RpcResolver) => (request: QueryDelegationRequest) => Promise<QueryDelegationResponse>;
export declare const useGetDelegation: <TData = QueryDelegationResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryDelegationRequest, QueryDelegationResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetUnbondingDelegation: (clientResolver?: RpcResolver) => (request: QueryUnbondingDelegationRequest) => Promise<QueryUnbondingDelegationResponse>;
export declare const useGetUnbondingDelegation: <TData = QueryUnbondingDelegationResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetDelegatorDelegations: (clientResolver?: RpcResolver) => (request: QueryDelegatorDelegationsRequest) => Promise<QueryDelegatorDelegationsResponse>;
export declare const useGetDelegatorDelegations: <TData = QueryDelegatorDelegationsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetDelegatorUnbondingDelegations: (clientResolver?: RpcResolver) => (request: QueryDelegatorUnbondingDelegationsRequest) => Promise<QueryDelegatorUnbondingDelegationsResponse>;
export declare const useGetDelegatorUnbondingDelegations: <TData = QueryDelegatorUnbondingDelegationsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetRedelegations: (clientResolver?: RpcResolver) => (request: QueryRedelegationsRequest) => Promise<QueryRedelegationsResponse>;
export declare const useGetRedelegations: <TData = QueryRedelegationsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryRedelegationsRequest, QueryRedelegationsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetDelegatorValidators: (clientResolver?: RpcResolver) => (request: QueryDelegatorValidatorsRequest) => Promise<QueryDelegatorValidatorsResponse>;
export declare const useGetDelegatorValidators: <TData = QueryDelegatorValidatorsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetDelegatorValidator: (clientResolver?: RpcResolver) => (request: QueryDelegatorValidatorRequest) => Promise<QueryDelegatorValidatorResponse>;
export declare const useGetDelegatorValidator: <TData = QueryDelegatorValidatorResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetHistoricalInfo: (clientResolver?: RpcResolver) => (request: QueryHistoricalInfoRequest) => Promise<QueryHistoricalInfoResponse>;
export declare const useGetHistoricalInfo: <TData = QueryHistoricalInfoResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetPool: (clientResolver?: RpcResolver) => (request: QueryPoolRequest) => Promise<QueryPoolResponse>;
export declare const useGetPool: <TData = QueryPoolResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryPoolRequest, QueryPoolResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetParams: (clientResolver?: RpcResolver) => (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
export declare const useGetParams: <TData = QueryParamsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryParamsRequest, QueryParamsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
