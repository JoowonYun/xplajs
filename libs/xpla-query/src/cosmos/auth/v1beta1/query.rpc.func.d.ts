import { RpcResolver } from "../../../helper-func-types";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
export declare const createGetAccounts: (clientResolver?: RpcResolver) => (request: QueryAccountsRequest) => Promise<QueryAccountsResponse>;
export declare const useGetAccounts: <TData = QueryAccountsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryAccountsRequest, QueryAccountsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetAccount: (clientResolver?: RpcResolver) => (request: QueryAccountRequest) => Promise<QueryAccountResponse>;
export declare const useGetAccount: <TData = QueryAccountResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryAccountRequest, QueryAccountResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetAccountAddressByID: (clientResolver?: RpcResolver) => (request: QueryAccountAddressByIDRequest) => Promise<QueryAccountAddressByIDResponse>;
export declare const useGetAccountAddressByID: <TData = QueryAccountAddressByIDResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetParams: (clientResolver?: RpcResolver) => (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
export declare const useGetParams: <TData = QueryParamsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryParamsRequest, QueryParamsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetModuleAccounts: (clientResolver?: RpcResolver) => (request: QueryModuleAccountsRequest) => Promise<QueryModuleAccountsResponse>;
export declare const useGetModuleAccounts: <TData = QueryModuleAccountsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryModuleAccountsRequest, QueryModuleAccountsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetModuleAccountByName: (clientResolver?: RpcResolver) => (request: QueryModuleAccountByNameRequest) => Promise<QueryModuleAccountByNameResponse>;
export declare const useGetModuleAccountByName: <TData = QueryModuleAccountByNameResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetBech32Prefix: (clientResolver?: RpcResolver) => (request: Bech32PrefixRequest) => Promise<Bech32PrefixResponse>;
export declare const useGetBech32Prefix: <TData = Bech32PrefixResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<Bech32PrefixRequest, Bech32PrefixResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetAddressBytesToString: (clientResolver?: RpcResolver) => (request: AddressBytesToStringRequest) => Promise<AddressBytesToStringResponse>;
export declare const useGetAddressBytesToString: <TData = AddressBytesToStringResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<AddressBytesToStringRequest, AddressBytesToStringResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetAddressStringToBytes: (clientResolver?: RpcResolver) => (request: AddressStringToBytesRequest) => Promise<AddressStringToBytesResponse>;
export declare const useGetAddressStringToBytes: <TData = AddressStringToBytesResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<AddressStringToBytesRequest, AddressStringToBytesResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetAccountInfo: (clientResolver?: RpcResolver) => (request: QueryAccountInfoRequest) => Promise<QueryAccountInfoResponse>;
export declare const useGetAccountInfo: <TData = QueryAccountInfoResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryAccountInfoRequest, QueryAccountInfoResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
