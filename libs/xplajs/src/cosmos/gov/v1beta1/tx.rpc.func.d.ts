import { SigningClientResolver } from "../../../helper-func-types";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export declare const createSubmitProposal: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgSubmitProposal, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createVote: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgVote, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createVoteWeighted: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgVoteWeighted, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createDeposit: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgDeposit, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
