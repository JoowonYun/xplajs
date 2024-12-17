import { SigningClientResolver } from "../../../../helper-func-types";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams } from "./tx";
export declare const createCreateClient: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgCreateClient, fee: import("../../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../../helper-func-types").DeliverTxResponse>;
export declare const createUpdateClient: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgUpdateClient, fee: import("../../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../../helper-func-types").DeliverTxResponse>;
export declare const createUpgradeClient: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgUpgradeClient, fee: import("../../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../../helper-func-types").DeliverTxResponse>;
export declare const createSubmitMisbehaviour: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgSubmitMisbehaviour, fee: import("../../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../../helper-func-types").DeliverTxResponse>;
export declare const createRecoverClient: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgRecoverClient, fee: import("../../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../../helper-func-types").DeliverTxResponse>;
export declare const createIBCSoftwareUpgrade: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgIBCSoftwareUpgrade, fee: import("../../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../../helper-func-types").DeliverTxResponse>;
export declare const createUpdateClientParams: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgUpdateParams, fee: import("../../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../../helper-func-types").DeliverTxResponse>;
