import { SigningClientResolver } from "../../../helper-func-types";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool, MsgUpdateParams, MsgCommunityPoolSpend, MsgDepositValidatorRewardsPool } from "./tx";
export declare const createSetWithdrawAddress: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgSetWithdrawAddress, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createWithdrawDelegatorReward: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgWithdrawDelegatorReward, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createWithdrawValidatorCommission: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgWithdrawValidatorCommission, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createFundCommunityPool: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgFundCommunityPool, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createUpdateParams: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgUpdateParams, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createCommunityPoolSpend: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgCommunityPoolSpend, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createDepositValidatorRewardsPool: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgDepositValidatorRewardsPool, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
