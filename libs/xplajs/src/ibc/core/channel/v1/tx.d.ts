import { Channel, ChannelAmino, Packet, PacketAmino, State } from "./channel";
import { Height, HeightAmino, Params, ParamsAmino } from "../../client/v1/client";
import { UpgradeFields, UpgradeFieldsAmino, Upgrade, UpgradeAmino, ErrorReceipt, ErrorReceiptAmino } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export declare enum ResponseResultType {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    RESPONSE_RESULT_TYPE_NOOP = 1,
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    RESPONSE_RESULT_TYPE_SUCCESS = 2,
    /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
    RESPONSE_RESULT_TYPE_FAILURE = 3,
    UNRECOGNIZED = -1
}
export declare const ResponseResultTypeAmino: typeof ResponseResultType;
export declare function responseResultTypeFromJSON(object: any): ResponseResultType;
export declare function responseResultTypeToJSON(object: ResponseResultType): string;
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
    portId: string;
    channel: Channel;
    signer: string;
}
export interface MsgChannelOpenInitProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit";
    value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitAmino {
    port_id: string;
    channel: ChannelAmino;
    signer: string;
}
export interface MsgChannelOpenInitAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenInit";
    value: MsgChannelOpenInitAmino;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
    channelId: string;
    version: string;
}
export interface MsgChannelOpenInitResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse";
    value: Uint8Array;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseAmino {
    channel_id: string;
    version: string;
}
export interface MsgChannelOpenInitResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenInitResponse";
    value: MsgChannelOpenInitResponseAmino;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
    portId: string;
    /** Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC. */
    /** @deprecated */
    previousChannelId: string;
    /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
    channel: Channel;
    counterpartyVersion: string;
    proofInit: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgChannelOpenTryProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry";
    value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTryAmino {
    port_id: string;
    /** Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC. */
    /** @deprecated */
    previous_channel_id: string;
    /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
    channel: ChannelAmino;
    counterparty_version: string;
    proof_init: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgChannelOpenTryAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenTry";
    value: MsgChannelOpenTryAmino;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
    version: string;
    channelId: string;
}
export interface MsgChannelOpenTryResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse";
    value: Uint8Array;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseAmino {
    version: string;
    channel_id: string;
}
export interface MsgChannelOpenTryResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenTryResponse";
    value: MsgChannelOpenTryResponseAmino;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 */
export interface MsgChannelOpenAck {
    portId: string;
    channelId: string;
    counterpartyChannelId: string;
    counterpartyVersion: string;
    proofTry: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgChannelOpenAckProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck";
    value: Uint8Array;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 */
export interface MsgChannelOpenAckAmino {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgChannelOpenAckAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenAck";
    value: MsgChannelOpenAckAmino;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {
}
export interface MsgChannelOpenAckResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse";
    value: Uint8Array;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseAmino {
}
export interface MsgChannelOpenAckResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenAckResponse";
    value: MsgChannelOpenAckResponseAmino;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
    portId: string;
    channelId: string;
    proofAck: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgChannelOpenConfirmProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm";
    value: Uint8Array;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmAmino {
    port_id: string;
    channel_id: string;
    proof_ack: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgChannelOpenConfirmAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenConfirm";
    value: MsgChannelOpenConfirmAmino;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {
}
export interface MsgChannelOpenConfirmResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse";
    value: Uint8Array;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseAmino {
}
export interface MsgChannelOpenConfirmResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenConfirmResponse";
    value: MsgChannelOpenConfirmResponseAmino;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
    portId: string;
    channelId: string;
    signer: string;
}
export interface MsgChannelCloseInitProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit";
    value: Uint8Array;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitAmino {
    port_id: string;
    channel_id: string;
    signer: string;
}
export interface MsgChannelCloseInitAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseInit";
    value: MsgChannelCloseInitAmino;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {
}
export interface MsgChannelCloseInitResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse";
    value: Uint8Array;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseAmino {
}
export interface MsgChannelCloseInitResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseInitResponse";
    value: MsgChannelCloseInitResponseAmino;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
    portId: string;
    channelId: string;
    proofInit: Uint8Array;
    proofHeight: Height;
    signer: string;
    counterpartyUpgradeSequence: bigint;
}
export interface MsgChannelCloseConfirmProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm";
    value: Uint8Array;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmAmino {
    port_id: string;
    channel_id: string;
    proof_init: string;
    proof_height: HeightAmino;
    signer: string;
    counterparty_upgrade_sequence: string;
}
export interface MsgChannelCloseConfirmAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseConfirm";
    value: MsgChannelCloseConfirmAmino;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {
}
export interface MsgChannelCloseConfirmResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse";
    value: Uint8Array;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseAmino {
}
export interface MsgChannelCloseConfirmResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseConfirmResponse";
    value: MsgChannelCloseConfirmResponseAmino;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
    packet: Packet;
    proofCommitment: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgRecvPacketProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacket";
    value: Uint8Array;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketAmino {
    packet: PacketAmino;
    proof_commitment: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgRecvPacketAminoMsg {
    type: "cosmos-sdk/MsgRecvPacket";
    value: MsgRecvPacketAmino;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
    result: ResponseResultType;
}
export interface MsgRecvPacketResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse";
    value: Uint8Array;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseAmino {
    result: ResponseResultType;
}
export interface MsgRecvPacketResponseAminoMsg {
    type: "cosmos-sdk/MsgRecvPacketResponse";
    value: MsgRecvPacketResponseAmino;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
    packet: Packet;
    proofUnreceived: Uint8Array;
    proofHeight: Height;
    nextSequenceRecv: bigint;
    signer: string;
}
export interface MsgTimeoutProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeout";
    value: Uint8Array;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutAmino {
    packet: PacketAmino;
    proof_unreceived: string;
    proof_height: HeightAmino;
    next_sequence_recv: string;
    signer: string;
}
export interface MsgTimeoutAminoMsg {
    type: "cosmos-sdk/MsgTimeout";
    value: MsgTimeoutAmino;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
    result: ResponseResultType;
}
export interface MsgTimeoutResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse";
    value: Uint8Array;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseAmino {
    result: ResponseResultType;
}
export interface MsgTimeoutResponseAminoMsg {
    type: "cosmos-sdk/MsgTimeoutResponse";
    value: MsgTimeoutResponseAmino;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
    packet: Packet;
    proofUnreceived: Uint8Array;
    proofClose: Uint8Array;
    proofHeight: Height;
    nextSequenceRecv: bigint;
    signer: string;
    counterpartyUpgradeSequence: bigint;
}
export interface MsgTimeoutOnCloseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose";
    value: Uint8Array;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseAmino {
    packet: PacketAmino;
    proof_unreceived: string;
    proof_close: string;
    proof_height: HeightAmino;
    next_sequence_recv: string;
    signer: string;
    counterparty_upgrade_sequence: string;
}
export interface MsgTimeoutOnCloseAminoMsg {
    type: "cosmos-sdk/MsgTimeoutOnClose";
    value: MsgTimeoutOnCloseAmino;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
    result: ResponseResultType;
}
export interface MsgTimeoutOnCloseResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse";
    value: Uint8Array;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseAmino {
    result: ResponseResultType;
}
export interface MsgTimeoutOnCloseResponseAminoMsg {
    type: "cosmos-sdk/MsgTimeoutOnCloseResponse";
    value: MsgTimeoutOnCloseResponseAmino;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
    packet: Packet;
    acknowledgement: Uint8Array;
    proofAcked: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgAcknowledgementProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement";
    value: Uint8Array;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementAmino {
    packet: PacketAmino;
    acknowledgement: string;
    proof_acked: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgAcknowledgementAminoMsg {
    type: "cosmos-sdk/MsgAcknowledgement";
    value: MsgAcknowledgementAmino;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
    result: ResponseResultType;
}
export interface MsgAcknowledgementResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse";
    value: Uint8Array;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseAmino {
    result: ResponseResultType;
}
export interface MsgAcknowledgementResponseAminoMsg {
    type: "cosmos-sdk/MsgAcknowledgementResponse";
    value: MsgAcknowledgementResponseAmino;
}
/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 */
export interface MsgChannelUpgradeInit {
    portId: string;
    channelId: string;
    fields: UpgradeFields;
    signer: string;
}
export interface MsgChannelUpgradeInitProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit";
    value: Uint8Array;
}
/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 */
export interface MsgChannelUpgradeInitAmino {
    port_id: string;
    channel_id: string;
    fields: UpgradeFieldsAmino;
    signer: string;
}
export interface MsgChannelUpgradeInitAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeInit";
    value: MsgChannelUpgradeInitAmino;
}
/** MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type */
export interface MsgChannelUpgradeInitResponse {
    upgrade: Upgrade;
    upgradeSequence: bigint;
}
export interface MsgChannelUpgradeInitResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse";
    value: Uint8Array;
}
/** MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type */
export interface MsgChannelUpgradeInitResponseAmino {
    upgrade: UpgradeAmino;
    upgrade_sequence: string;
}
export interface MsgChannelUpgradeInitResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeInitResponse";
    value: MsgChannelUpgradeInitResponseAmino;
}
/** MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc */
export interface MsgChannelUpgradeTry {
    portId: string;
    channelId: string;
    proposedUpgradeConnectionHops: string[];
    counterpartyUpgradeFields: UpgradeFields;
    counterpartyUpgradeSequence: bigint;
    proofChannel: Uint8Array;
    proofUpgrade: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgChannelUpgradeTryProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry";
    value: Uint8Array;
}
/** MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc */
export interface MsgChannelUpgradeTryAmino {
    port_id: string;
    channel_id: string;
    proposed_upgrade_connection_hops: string[];
    counterparty_upgrade_fields: UpgradeFieldsAmino;
    counterparty_upgrade_sequence: string;
    proof_channel: string;
    proof_upgrade: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgChannelUpgradeTryAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeTry";
    value: MsgChannelUpgradeTryAmino;
}
/** MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type */
export interface MsgChannelUpgradeTryResponse {
    upgrade: Upgrade;
    upgradeSequence: bigint;
    result: ResponseResultType;
}
export interface MsgChannelUpgradeTryResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse";
    value: Uint8Array;
}
/** MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type */
export interface MsgChannelUpgradeTryResponseAmino {
    upgrade: UpgradeAmino;
    upgrade_sequence: string;
    result: ResponseResultType;
}
export interface MsgChannelUpgradeTryResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeTryResponse";
    value: MsgChannelUpgradeTryResponseAmino;
}
/** MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc */
export interface MsgChannelUpgradeAck {
    portId: string;
    channelId: string;
    counterpartyUpgrade: Upgrade;
    proofChannel: Uint8Array;
    proofUpgrade: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgChannelUpgradeAckProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck";
    value: Uint8Array;
}
/** MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc */
export interface MsgChannelUpgradeAckAmino {
    port_id: string;
    channel_id: string;
    counterparty_upgrade: UpgradeAmino;
    proof_channel: string;
    proof_upgrade: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgChannelUpgradeAckAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeAck";
    value: MsgChannelUpgradeAckAmino;
}
/** MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type */
export interface MsgChannelUpgradeAckResponse {
    result: ResponseResultType;
}
export interface MsgChannelUpgradeAckResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse";
    value: Uint8Array;
}
/** MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type */
export interface MsgChannelUpgradeAckResponseAmino {
    result: ResponseResultType;
}
export interface MsgChannelUpgradeAckResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeAckResponse";
    value: MsgChannelUpgradeAckResponseAmino;
}
/** MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc */
export interface MsgChannelUpgradeConfirm {
    portId: string;
    channelId: string;
    counterpartyChannelState: State;
    counterpartyUpgrade: Upgrade;
    proofChannel: Uint8Array;
    proofUpgrade: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgChannelUpgradeConfirmProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm";
    value: Uint8Array;
}
/** MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc */
export interface MsgChannelUpgradeConfirmAmino {
    port_id: string;
    channel_id: string;
    counterparty_channel_state: State;
    counterparty_upgrade: UpgradeAmino;
    proof_channel: string;
    proof_upgrade: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgChannelUpgradeConfirmAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeConfirm";
    value: MsgChannelUpgradeConfirmAmino;
}
/** MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type */
export interface MsgChannelUpgradeConfirmResponse {
    result: ResponseResultType;
}
export interface MsgChannelUpgradeConfirmResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse";
    value: Uint8Array;
}
/** MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type */
export interface MsgChannelUpgradeConfirmResponseAmino {
    result: ResponseResultType;
}
export interface MsgChannelUpgradeConfirmResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeConfirmResponse";
    value: MsgChannelUpgradeConfirmResponseAmino;
}
/** MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc */
export interface MsgChannelUpgradeOpen {
    portId: string;
    channelId: string;
    counterpartyChannelState: State;
    counterpartyUpgradeSequence: bigint;
    proofChannel: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgChannelUpgradeOpenProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen";
    value: Uint8Array;
}
/** MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc */
export interface MsgChannelUpgradeOpenAmino {
    port_id: string;
    channel_id: string;
    counterparty_channel_state: State;
    counterparty_upgrade_sequence: string;
    proof_channel: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgChannelUpgradeOpenAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeOpen";
    value: MsgChannelUpgradeOpenAmino;
}
/** MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type */
export interface MsgChannelUpgradeOpenResponse {
}
export interface MsgChannelUpgradeOpenResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse";
    value: Uint8Array;
}
/** MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type */
export interface MsgChannelUpgradeOpenResponseAmino {
}
export interface MsgChannelUpgradeOpenResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeOpenResponse";
    value: MsgChannelUpgradeOpenResponseAmino;
}
/** MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc */
export interface MsgChannelUpgradeTimeout {
    portId: string;
    channelId: string;
    counterpartyChannel: Channel;
    proofChannel: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgChannelUpgradeTimeoutProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout";
    value: Uint8Array;
}
/** MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc */
export interface MsgChannelUpgradeTimeoutAmino {
    port_id: string;
    channel_id: string;
    counterparty_channel: ChannelAmino;
    proof_channel: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgChannelUpgradeTimeoutAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeTimeout";
    value: MsgChannelUpgradeTimeoutAmino;
}
/** MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type */
export interface MsgChannelUpgradeTimeoutResponse {
}
export interface MsgChannelUpgradeTimeoutResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse";
    value: Uint8Array;
}
/** MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type */
export interface MsgChannelUpgradeTimeoutResponseAmino {
}
export interface MsgChannelUpgradeTimeoutResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse";
    value: MsgChannelUpgradeTimeoutResponseAmino;
}
/** MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc */
export interface MsgChannelUpgradeCancel {
    portId: string;
    channelId: string;
    errorReceipt: ErrorReceipt;
    proofErrorReceipt: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgChannelUpgradeCancelProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel";
    value: Uint8Array;
}
/** MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc */
export interface MsgChannelUpgradeCancelAmino {
    port_id: string;
    channel_id: string;
    error_receipt: ErrorReceiptAmino;
    proof_error_receipt: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgChannelUpgradeCancelAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeCancel";
    value: MsgChannelUpgradeCancelAmino;
}
/** MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type */
export interface MsgChannelUpgradeCancelResponse {
}
export interface MsgChannelUpgradeCancelResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse";
    value: Uint8Array;
}
/** MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type */
export interface MsgChannelUpgradeCancelResponseAmino {
}
export interface MsgChannelUpgradeCancelResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelUpgradeCancelResponse";
    value: MsgChannelUpgradeCancelResponseAmino;
}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the channel parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the channel parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgements {
    portId: string;
    channelId: string;
    limit: bigint;
    signer: string;
}
export interface MsgPruneAcknowledgementsProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements";
    value: Uint8Array;
}
/** MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsAmino {
    port_id: string;
    channel_id: string;
    limit: string;
    signer: string;
}
export interface MsgPruneAcknowledgementsAminoMsg {
    type: "cosmos-sdk/MsgPruneAcknowledgements";
    value: MsgPruneAcknowledgementsAmino;
}
/** MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsResponse {
    /** Number of sequences pruned (includes both packet acknowledgements and packet receipts where appropriate). */
    totalPrunedSequences: bigint;
    /** Number of sequences left after pruning. */
    totalRemainingSequences: bigint;
}
export interface MsgPruneAcknowledgementsResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse";
    value: Uint8Array;
}
/** MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsResponseAmino {
    /** Number of sequences pruned (includes both packet acknowledgements and packet receipts where appropriate). */
    total_pruned_sequences: string;
    /** Number of sequences left after pruning. */
    total_remaining_sequences: string;
}
export interface MsgPruneAcknowledgementsResponseAminoMsg {
    type: "cosmos-sdk/MsgPruneAcknowledgementsResponse";
    value: MsgPruneAcknowledgementsResponseAmino;
}
export declare const MsgChannelOpenInit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenInit;
    isAmino(o: any): o is MsgChannelOpenInitAmino;
    encode(message: MsgChannelOpenInit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenInit;
    fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit;
    fromAmino(object: MsgChannelOpenInitAmino): MsgChannelOpenInit;
    toAmino(message: MsgChannelOpenInit): MsgChannelOpenInitAmino;
    fromAminoMsg(object: MsgChannelOpenInitAminoMsg): MsgChannelOpenInit;
    toAminoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitAminoMsg;
    fromProtoMsg(message: MsgChannelOpenInitProtoMsg): MsgChannelOpenInit;
    toProto(message: MsgChannelOpenInit): Uint8Array;
    toProtoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitProtoMsg;
};
export declare const MsgChannelOpenInitResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenInitResponse;
    isAmino(o: any): o is MsgChannelOpenInitResponseAmino;
    encode(message: MsgChannelOpenInitResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenInitResponse;
    fromPartial(object: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse;
    fromAmino(object: MsgChannelOpenInitResponseAmino): MsgChannelOpenInitResponse;
    toAmino(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAmino;
    fromAminoMsg(object: MsgChannelOpenInitResponseAminoMsg): MsgChannelOpenInitResponse;
    toAminoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenInitResponseProtoMsg): MsgChannelOpenInitResponse;
    toProto(message: MsgChannelOpenInitResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseProtoMsg;
};
export declare const MsgChannelOpenTry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenTry;
    isAmino(o: any): o is MsgChannelOpenTryAmino;
    encode(message: MsgChannelOpenTry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenTry;
    fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry;
    fromAmino(object: MsgChannelOpenTryAmino): MsgChannelOpenTry;
    toAmino(message: MsgChannelOpenTry): MsgChannelOpenTryAmino;
    fromAminoMsg(object: MsgChannelOpenTryAminoMsg): MsgChannelOpenTry;
    toAminoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryAminoMsg;
    fromProtoMsg(message: MsgChannelOpenTryProtoMsg): MsgChannelOpenTry;
    toProto(message: MsgChannelOpenTry): Uint8Array;
    toProtoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryProtoMsg;
};
export declare const MsgChannelOpenTryResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenTryResponse;
    isAmino(o: any): o is MsgChannelOpenTryResponseAmino;
    encode(message: MsgChannelOpenTryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenTryResponse;
    fromPartial(object: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse;
    fromAmino(object: MsgChannelOpenTryResponseAmino): MsgChannelOpenTryResponse;
    toAmino(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAmino;
    fromAminoMsg(object: MsgChannelOpenTryResponseAminoMsg): MsgChannelOpenTryResponse;
    toAminoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenTryResponseProtoMsg): MsgChannelOpenTryResponse;
    toProto(message: MsgChannelOpenTryResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseProtoMsg;
};
export declare const MsgChannelOpenAck: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenAck;
    isAmino(o: any): o is MsgChannelOpenAckAmino;
    encode(message: MsgChannelOpenAck, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenAck;
    fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck;
    fromAmino(object: MsgChannelOpenAckAmino): MsgChannelOpenAck;
    toAmino(message: MsgChannelOpenAck): MsgChannelOpenAckAmino;
    fromAminoMsg(object: MsgChannelOpenAckAminoMsg): MsgChannelOpenAck;
    toAminoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckAminoMsg;
    fromProtoMsg(message: MsgChannelOpenAckProtoMsg): MsgChannelOpenAck;
    toProto(message: MsgChannelOpenAck): Uint8Array;
    toProtoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckProtoMsg;
};
export declare const MsgChannelOpenAckResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenAckResponse;
    isAmino(o: any): o is MsgChannelOpenAckResponseAmino;
    encode(_: MsgChannelOpenAckResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenAckResponse;
    fromPartial(_: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse;
    fromAmino(_: MsgChannelOpenAckResponseAmino): MsgChannelOpenAckResponse;
    toAmino(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAmino;
    fromAminoMsg(object: MsgChannelOpenAckResponseAminoMsg): MsgChannelOpenAckResponse;
    toAminoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenAckResponseProtoMsg): MsgChannelOpenAckResponse;
    toProto(message: MsgChannelOpenAckResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseProtoMsg;
};
export declare const MsgChannelOpenConfirm: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenConfirm;
    isAmino(o: any): o is MsgChannelOpenConfirmAmino;
    encode(message: MsgChannelOpenConfirm, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenConfirm;
    fromPartial(object: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm;
    fromAmino(object: MsgChannelOpenConfirmAmino): MsgChannelOpenConfirm;
    toAmino(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAmino;
    fromAminoMsg(object: MsgChannelOpenConfirmAminoMsg): MsgChannelOpenConfirm;
    toAminoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAminoMsg;
    fromProtoMsg(message: MsgChannelOpenConfirmProtoMsg): MsgChannelOpenConfirm;
    toProto(message: MsgChannelOpenConfirm): Uint8Array;
    toProtoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmProtoMsg;
};
export declare const MsgChannelOpenConfirmResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenConfirmResponse;
    isAmino(o: any): o is MsgChannelOpenConfirmResponseAmino;
    encode(_: MsgChannelOpenConfirmResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse;
    fromPartial(_: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse;
    fromAmino(_: MsgChannelOpenConfirmResponseAmino): MsgChannelOpenConfirmResponse;
    toAmino(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAmino;
    fromAminoMsg(object: MsgChannelOpenConfirmResponseAminoMsg): MsgChannelOpenConfirmResponse;
    toAminoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenConfirmResponseProtoMsg): MsgChannelOpenConfirmResponse;
    toProto(message: MsgChannelOpenConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseProtoMsg;
};
export declare const MsgChannelCloseInit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelCloseInit;
    isAmino(o: any): o is MsgChannelCloseInitAmino;
    encode(message: MsgChannelCloseInit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseInit;
    fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit;
    fromAmino(object: MsgChannelCloseInitAmino): MsgChannelCloseInit;
    toAmino(message: MsgChannelCloseInit): MsgChannelCloseInitAmino;
    fromAminoMsg(object: MsgChannelCloseInitAminoMsg): MsgChannelCloseInit;
    toAminoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitAminoMsg;
    fromProtoMsg(message: MsgChannelCloseInitProtoMsg): MsgChannelCloseInit;
    toProto(message: MsgChannelCloseInit): Uint8Array;
    toProtoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitProtoMsg;
};
export declare const MsgChannelCloseInitResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelCloseInitResponse;
    isAmino(o: any): o is MsgChannelCloseInitResponseAmino;
    encode(_: MsgChannelCloseInitResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseInitResponse;
    fromPartial(_: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse;
    fromAmino(_: MsgChannelCloseInitResponseAmino): MsgChannelCloseInitResponse;
    toAmino(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAmino;
    fromAminoMsg(object: MsgChannelCloseInitResponseAminoMsg): MsgChannelCloseInitResponse;
    toAminoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAminoMsg;
    fromProtoMsg(message: MsgChannelCloseInitResponseProtoMsg): MsgChannelCloseInitResponse;
    toProto(message: MsgChannelCloseInitResponse): Uint8Array;
    toProtoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseProtoMsg;
};
export declare const MsgChannelCloseConfirm: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelCloseConfirm;
    isAmino(o: any): o is MsgChannelCloseConfirmAmino;
    encode(message: MsgChannelCloseConfirm, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseConfirm;
    fromPartial(object: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm;
    fromAmino(object: MsgChannelCloseConfirmAmino): MsgChannelCloseConfirm;
    toAmino(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAmino;
    fromAminoMsg(object: MsgChannelCloseConfirmAminoMsg): MsgChannelCloseConfirm;
    toAminoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAminoMsg;
    fromProtoMsg(message: MsgChannelCloseConfirmProtoMsg): MsgChannelCloseConfirm;
    toProto(message: MsgChannelCloseConfirm): Uint8Array;
    toProtoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmProtoMsg;
};
export declare const MsgChannelCloseConfirmResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelCloseConfirmResponse;
    isAmino(o: any): o is MsgChannelCloseConfirmResponseAmino;
    encode(_: MsgChannelCloseConfirmResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse;
    fromPartial(_: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse;
    fromAmino(_: MsgChannelCloseConfirmResponseAmino): MsgChannelCloseConfirmResponse;
    toAmino(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAmino;
    fromAminoMsg(object: MsgChannelCloseConfirmResponseAminoMsg): MsgChannelCloseConfirmResponse;
    toAminoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAminoMsg;
    fromProtoMsg(message: MsgChannelCloseConfirmResponseProtoMsg): MsgChannelCloseConfirmResponse;
    toProto(message: MsgChannelCloseConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseProtoMsg;
};
export declare const MsgRecvPacket: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRecvPacket;
    isAmino(o: any): o is MsgRecvPacketAmino;
    encode(message: MsgRecvPacket, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacket;
    fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket;
    fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket;
    toAmino(message: MsgRecvPacket): MsgRecvPacketAmino;
    fromAminoMsg(object: MsgRecvPacketAminoMsg): MsgRecvPacket;
    toAminoMsg(message: MsgRecvPacket): MsgRecvPacketAminoMsg;
    fromProtoMsg(message: MsgRecvPacketProtoMsg): MsgRecvPacket;
    toProto(message: MsgRecvPacket): Uint8Array;
    toProtoMsg(message: MsgRecvPacket): MsgRecvPacketProtoMsg;
};
export declare const MsgRecvPacketResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRecvPacketResponse;
    isAmino(o: any): o is MsgRecvPacketResponseAmino;
    encode(message: MsgRecvPacketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacketResponse;
    fromPartial(object: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse;
    fromAmino(object: MsgRecvPacketResponseAmino): MsgRecvPacketResponse;
    toAmino(message: MsgRecvPacketResponse): MsgRecvPacketResponseAmino;
    fromAminoMsg(object: MsgRecvPacketResponseAminoMsg): MsgRecvPacketResponse;
    toAminoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseAminoMsg;
    fromProtoMsg(message: MsgRecvPacketResponseProtoMsg): MsgRecvPacketResponse;
    toProto(message: MsgRecvPacketResponse): Uint8Array;
    toProtoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseProtoMsg;
};
export declare const MsgTimeout: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTimeout;
    isAmino(o: any): o is MsgTimeoutAmino;
    encode(message: MsgTimeout, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeout;
    fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout;
    fromAmino(object: MsgTimeoutAmino): MsgTimeout;
    toAmino(message: MsgTimeout): MsgTimeoutAmino;
    fromAminoMsg(object: MsgTimeoutAminoMsg): MsgTimeout;
    toAminoMsg(message: MsgTimeout): MsgTimeoutAminoMsg;
    fromProtoMsg(message: MsgTimeoutProtoMsg): MsgTimeout;
    toProto(message: MsgTimeout): Uint8Array;
    toProtoMsg(message: MsgTimeout): MsgTimeoutProtoMsg;
};
export declare const MsgTimeoutResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTimeoutResponse;
    isAmino(o: any): o is MsgTimeoutResponseAmino;
    encode(message: MsgTimeoutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutResponse;
    fromPartial(object: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse;
    fromAmino(object: MsgTimeoutResponseAmino): MsgTimeoutResponse;
    toAmino(message: MsgTimeoutResponse): MsgTimeoutResponseAmino;
    fromAminoMsg(object: MsgTimeoutResponseAminoMsg): MsgTimeoutResponse;
    toAminoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseAminoMsg;
    fromProtoMsg(message: MsgTimeoutResponseProtoMsg): MsgTimeoutResponse;
    toProto(message: MsgTimeoutResponse): Uint8Array;
    toProtoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseProtoMsg;
};
export declare const MsgTimeoutOnClose: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTimeoutOnClose;
    isAmino(o: any): o is MsgTimeoutOnCloseAmino;
    encode(message: MsgTimeoutOnClose, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutOnClose;
    fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose;
    fromAmino(object: MsgTimeoutOnCloseAmino): MsgTimeoutOnClose;
    toAmino(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAmino;
    fromAminoMsg(object: MsgTimeoutOnCloseAminoMsg): MsgTimeoutOnClose;
    toAminoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAminoMsg;
    fromProtoMsg(message: MsgTimeoutOnCloseProtoMsg): MsgTimeoutOnClose;
    toProto(message: MsgTimeoutOnClose): Uint8Array;
    toProtoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseProtoMsg;
};
export declare const MsgTimeoutOnCloseResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTimeoutOnCloseResponse;
    isAmino(o: any): o is MsgTimeoutOnCloseResponseAmino;
    encode(message: MsgTimeoutOnCloseResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse;
    fromPartial(object: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse;
    fromAmino(object: MsgTimeoutOnCloseResponseAmino): MsgTimeoutOnCloseResponse;
    toAmino(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAmino;
    fromAminoMsg(object: MsgTimeoutOnCloseResponseAminoMsg): MsgTimeoutOnCloseResponse;
    toAminoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAminoMsg;
    fromProtoMsg(message: MsgTimeoutOnCloseResponseProtoMsg): MsgTimeoutOnCloseResponse;
    toProto(message: MsgTimeoutOnCloseResponse): Uint8Array;
    toProtoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseProtoMsg;
};
export declare const MsgAcknowledgement: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgAcknowledgement;
    isAmino(o: any): o is MsgAcknowledgementAmino;
    encode(message: MsgAcknowledgement, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgement;
    fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement;
    fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement;
    toAmino(message: MsgAcknowledgement): MsgAcknowledgementAmino;
    fromAminoMsg(object: MsgAcknowledgementAminoMsg): MsgAcknowledgement;
    toAminoMsg(message: MsgAcknowledgement): MsgAcknowledgementAminoMsg;
    fromProtoMsg(message: MsgAcknowledgementProtoMsg): MsgAcknowledgement;
    toProto(message: MsgAcknowledgement): Uint8Array;
    toProtoMsg(message: MsgAcknowledgement): MsgAcknowledgementProtoMsg;
};
export declare const MsgAcknowledgementResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgAcknowledgementResponse;
    isAmino(o: any): o is MsgAcknowledgementResponseAmino;
    encode(message: MsgAcknowledgementResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgementResponse;
    fromPartial(object: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse;
    fromAmino(object: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse;
    toAmino(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAmino;
    fromAminoMsg(object: MsgAcknowledgementResponseAminoMsg): MsgAcknowledgementResponse;
    toAminoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAminoMsg;
    fromProtoMsg(message: MsgAcknowledgementResponseProtoMsg): MsgAcknowledgementResponse;
    toProto(message: MsgAcknowledgementResponse): Uint8Array;
    toProtoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseProtoMsg;
};
export declare const MsgChannelUpgradeInit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeInit;
    isAmino(o: any): o is MsgChannelUpgradeInitAmino;
    encode(message: MsgChannelUpgradeInit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeInit;
    fromPartial(object: DeepPartial<MsgChannelUpgradeInit>): MsgChannelUpgradeInit;
    fromAmino(object: MsgChannelUpgradeInitAmino): MsgChannelUpgradeInit;
    toAmino(message: MsgChannelUpgradeInit): MsgChannelUpgradeInitAmino;
    fromAminoMsg(object: MsgChannelUpgradeInitAminoMsg): MsgChannelUpgradeInit;
    toAminoMsg(message: MsgChannelUpgradeInit): MsgChannelUpgradeInitAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeInitProtoMsg): MsgChannelUpgradeInit;
    toProto(message: MsgChannelUpgradeInit): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeInit): MsgChannelUpgradeInitProtoMsg;
};
export declare const MsgChannelUpgradeInitResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeInitResponse;
    isAmino(o: any): o is MsgChannelUpgradeInitResponseAmino;
    encode(message: MsgChannelUpgradeInitResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeInitResponse;
    fromPartial(object: DeepPartial<MsgChannelUpgradeInitResponse>): MsgChannelUpgradeInitResponse;
    fromAmino(object: MsgChannelUpgradeInitResponseAmino): MsgChannelUpgradeInitResponse;
    toAmino(message: MsgChannelUpgradeInitResponse): MsgChannelUpgradeInitResponseAmino;
    fromAminoMsg(object: MsgChannelUpgradeInitResponseAminoMsg): MsgChannelUpgradeInitResponse;
    toAminoMsg(message: MsgChannelUpgradeInitResponse): MsgChannelUpgradeInitResponseAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeInitResponseProtoMsg): MsgChannelUpgradeInitResponse;
    toProto(message: MsgChannelUpgradeInitResponse): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeInitResponse): MsgChannelUpgradeInitResponseProtoMsg;
};
export declare const MsgChannelUpgradeTry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeTry;
    isAmino(o: any): o is MsgChannelUpgradeTryAmino;
    encode(message: MsgChannelUpgradeTry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTry;
    fromPartial(object: DeepPartial<MsgChannelUpgradeTry>): MsgChannelUpgradeTry;
    fromAmino(object: MsgChannelUpgradeTryAmino): MsgChannelUpgradeTry;
    toAmino(message: MsgChannelUpgradeTry): MsgChannelUpgradeTryAmino;
    fromAminoMsg(object: MsgChannelUpgradeTryAminoMsg): MsgChannelUpgradeTry;
    toAminoMsg(message: MsgChannelUpgradeTry): MsgChannelUpgradeTryAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeTryProtoMsg): MsgChannelUpgradeTry;
    toProto(message: MsgChannelUpgradeTry): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeTry): MsgChannelUpgradeTryProtoMsg;
};
export declare const MsgChannelUpgradeTryResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeTryResponse;
    isAmino(o: any): o is MsgChannelUpgradeTryResponseAmino;
    encode(message: MsgChannelUpgradeTryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTryResponse;
    fromPartial(object: DeepPartial<MsgChannelUpgradeTryResponse>): MsgChannelUpgradeTryResponse;
    fromAmino(object: MsgChannelUpgradeTryResponseAmino): MsgChannelUpgradeTryResponse;
    toAmino(message: MsgChannelUpgradeTryResponse): MsgChannelUpgradeTryResponseAmino;
    fromAminoMsg(object: MsgChannelUpgradeTryResponseAminoMsg): MsgChannelUpgradeTryResponse;
    toAminoMsg(message: MsgChannelUpgradeTryResponse): MsgChannelUpgradeTryResponseAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeTryResponseProtoMsg): MsgChannelUpgradeTryResponse;
    toProto(message: MsgChannelUpgradeTryResponse): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeTryResponse): MsgChannelUpgradeTryResponseProtoMsg;
};
export declare const MsgChannelUpgradeAck: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeAck;
    isAmino(o: any): o is MsgChannelUpgradeAckAmino;
    encode(message: MsgChannelUpgradeAck, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeAck;
    fromPartial(object: DeepPartial<MsgChannelUpgradeAck>): MsgChannelUpgradeAck;
    fromAmino(object: MsgChannelUpgradeAckAmino): MsgChannelUpgradeAck;
    toAmino(message: MsgChannelUpgradeAck): MsgChannelUpgradeAckAmino;
    fromAminoMsg(object: MsgChannelUpgradeAckAminoMsg): MsgChannelUpgradeAck;
    toAminoMsg(message: MsgChannelUpgradeAck): MsgChannelUpgradeAckAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeAckProtoMsg): MsgChannelUpgradeAck;
    toProto(message: MsgChannelUpgradeAck): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeAck): MsgChannelUpgradeAckProtoMsg;
};
export declare const MsgChannelUpgradeAckResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeAckResponse;
    isAmino(o: any): o is MsgChannelUpgradeAckResponseAmino;
    encode(message: MsgChannelUpgradeAckResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeAckResponse;
    fromPartial(object: DeepPartial<MsgChannelUpgradeAckResponse>): MsgChannelUpgradeAckResponse;
    fromAmino(object: MsgChannelUpgradeAckResponseAmino): MsgChannelUpgradeAckResponse;
    toAmino(message: MsgChannelUpgradeAckResponse): MsgChannelUpgradeAckResponseAmino;
    fromAminoMsg(object: MsgChannelUpgradeAckResponseAminoMsg): MsgChannelUpgradeAckResponse;
    toAminoMsg(message: MsgChannelUpgradeAckResponse): MsgChannelUpgradeAckResponseAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeAckResponseProtoMsg): MsgChannelUpgradeAckResponse;
    toProto(message: MsgChannelUpgradeAckResponse): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeAckResponse): MsgChannelUpgradeAckResponseProtoMsg;
};
export declare const MsgChannelUpgradeConfirm: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeConfirm;
    isAmino(o: any): o is MsgChannelUpgradeConfirmAmino;
    encode(message: MsgChannelUpgradeConfirm, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeConfirm;
    fromPartial(object: DeepPartial<MsgChannelUpgradeConfirm>): MsgChannelUpgradeConfirm;
    fromAmino(object: MsgChannelUpgradeConfirmAmino): MsgChannelUpgradeConfirm;
    toAmino(message: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirmAmino;
    fromAminoMsg(object: MsgChannelUpgradeConfirmAminoMsg): MsgChannelUpgradeConfirm;
    toAminoMsg(message: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirmAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeConfirmProtoMsg): MsgChannelUpgradeConfirm;
    toProto(message: MsgChannelUpgradeConfirm): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirmProtoMsg;
};
export declare const MsgChannelUpgradeConfirmResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeConfirmResponse;
    isAmino(o: any): o is MsgChannelUpgradeConfirmResponseAmino;
    encode(message: MsgChannelUpgradeConfirmResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeConfirmResponse;
    fromPartial(object: DeepPartial<MsgChannelUpgradeConfirmResponse>): MsgChannelUpgradeConfirmResponse;
    fromAmino(object: MsgChannelUpgradeConfirmResponseAmino): MsgChannelUpgradeConfirmResponse;
    toAmino(message: MsgChannelUpgradeConfirmResponse): MsgChannelUpgradeConfirmResponseAmino;
    fromAminoMsg(object: MsgChannelUpgradeConfirmResponseAminoMsg): MsgChannelUpgradeConfirmResponse;
    toAminoMsg(message: MsgChannelUpgradeConfirmResponse): MsgChannelUpgradeConfirmResponseAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeConfirmResponseProtoMsg): MsgChannelUpgradeConfirmResponse;
    toProto(message: MsgChannelUpgradeConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeConfirmResponse): MsgChannelUpgradeConfirmResponseProtoMsg;
};
export declare const MsgChannelUpgradeOpen: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeOpen;
    isAmino(o: any): o is MsgChannelUpgradeOpenAmino;
    encode(message: MsgChannelUpgradeOpen, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeOpen;
    fromPartial(object: DeepPartial<MsgChannelUpgradeOpen>): MsgChannelUpgradeOpen;
    fromAmino(object: MsgChannelUpgradeOpenAmino): MsgChannelUpgradeOpen;
    toAmino(message: MsgChannelUpgradeOpen): MsgChannelUpgradeOpenAmino;
    fromAminoMsg(object: MsgChannelUpgradeOpenAminoMsg): MsgChannelUpgradeOpen;
    toAminoMsg(message: MsgChannelUpgradeOpen): MsgChannelUpgradeOpenAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeOpenProtoMsg): MsgChannelUpgradeOpen;
    toProto(message: MsgChannelUpgradeOpen): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeOpen): MsgChannelUpgradeOpenProtoMsg;
};
export declare const MsgChannelUpgradeOpenResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeOpenResponse;
    isAmino(o: any): o is MsgChannelUpgradeOpenResponseAmino;
    encode(_: MsgChannelUpgradeOpenResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeOpenResponse;
    fromPartial(_: DeepPartial<MsgChannelUpgradeOpenResponse>): MsgChannelUpgradeOpenResponse;
    fromAmino(_: MsgChannelUpgradeOpenResponseAmino): MsgChannelUpgradeOpenResponse;
    toAmino(_: MsgChannelUpgradeOpenResponse): MsgChannelUpgradeOpenResponseAmino;
    fromAminoMsg(object: MsgChannelUpgradeOpenResponseAminoMsg): MsgChannelUpgradeOpenResponse;
    toAminoMsg(message: MsgChannelUpgradeOpenResponse): MsgChannelUpgradeOpenResponseAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeOpenResponseProtoMsg): MsgChannelUpgradeOpenResponse;
    toProto(message: MsgChannelUpgradeOpenResponse): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeOpenResponse): MsgChannelUpgradeOpenResponseProtoMsg;
};
export declare const MsgChannelUpgradeTimeout: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeTimeout;
    isAmino(o: any): o is MsgChannelUpgradeTimeoutAmino;
    encode(message: MsgChannelUpgradeTimeout, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTimeout;
    fromPartial(object: DeepPartial<MsgChannelUpgradeTimeout>): MsgChannelUpgradeTimeout;
    fromAmino(object: MsgChannelUpgradeTimeoutAmino): MsgChannelUpgradeTimeout;
    toAmino(message: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeoutAmino;
    fromAminoMsg(object: MsgChannelUpgradeTimeoutAminoMsg): MsgChannelUpgradeTimeout;
    toAminoMsg(message: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeoutAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeTimeoutProtoMsg): MsgChannelUpgradeTimeout;
    toProto(message: MsgChannelUpgradeTimeout): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeoutProtoMsg;
};
export declare const MsgChannelUpgradeTimeoutResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeTimeoutResponse;
    isAmino(o: any): o is MsgChannelUpgradeTimeoutResponseAmino;
    encode(_: MsgChannelUpgradeTimeoutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTimeoutResponse;
    fromPartial(_: DeepPartial<MsgChannelUpgradeTimeoutResponse>): MsgChannelUpgradeTimeoutResponse;
    fromAmino(_: MsgChannelUpgradeTimeoutResponseAmino): MsgChannelUpgradeTimeoutResponse;
    toAmino(_: MsgChannelUpgradeTimeoutResponse): MsgChannelUpgradeTimeoutResponseAmino;
    fromAminoMsg(object: MsgChannelUpgradeTimeoutResponseAminoMsg): MsgChannelUpgradeTimeoutResponse;
    toAminoMsg(message: MsgChannelUpgradeTimeoutResponse): MsgChannelUpgradeTimeoutResponseAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeTimeoutResponseProtoMsg): MsgChannelUpgradeTimeoutResponse;
    toProto(message: MsgChannelUpgradeTimeoutResponse): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeTimeoutResponse): MsgChannelUpgradeTimeoutResponseProtoMsg;
};
export declare const MsgChannelUpgradeCancel: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeCancel;
    isAmino(o: any): o is MsgChannelUpgradeCancelAmino;
    encode(message: MsgChannelUpgradeCancel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeCancel;
    fromPartial(object: DeepPartial<MsgChannelUpgradeCancel>): MsgChannelUpgradeCancel;
    fromAmino(object: MsgChannelUpgradeCancelAmino): MsgChannelUpgradeCancel;
    toAmino(message: MsgChannelUpgradeCancel): MsgChannelUpgradeCancelAmino;
    fromAminoMsg(object: MsgChannelUpgradeCancelAminoMsg): MsgChannelUpgradeCancel;
    toAminoMsg(message: MsgChannelUpgradeCancel): MsgChannelUpgradeCancelAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeCancelProtoMsg): MsgChannelUpgradeCancel;
    toProto(message: MsgChannelUpgradeCancel): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeCancel): MsgChannelUpgradeCancelProtoMsg;
};
export declare const MsgChannelUpgradeCancelResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelUpgradeCancelResponse;
    isAmino(o: any): o is MsgChannelUpgradeCancelResponseAmino;
    encode(_: MsgChannelUpgradeCancelResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeCancelResponse;
    fromPartial(_: DeepPartial<MsgChannelUpgradeCancelResponse>): MsgChannelUpgradeCancelResponse;
    fromAmino(_: MsgChannelUpgradeCancelResponseAmino): MsgChannelUpgradeCancelResponse;
    toAmino(_: MsgChannelUpgradeCancelResponse): MsgChannelUpgradeCancelResponseAmino;
    fromAminoMsg(object: MsgChannelUpgradeCancelResponseAminoMsg): MsgChannelUpgradeCancelResponse;
    toAminoMsg(message: MsgChannelUpgradeCancelResponse): MsgChannelUpgradeCancelResponseAminoMsg;
    fromProtoMsg(message: MsgChannelUpgradeCancelResponseProtoMsg): MsgChannelUpgradeCancelResponse;
    toProto(message: MsgChannelUpgradeCancelResponse): Uint8Array;
    toProtoMsg(message: MsgChannelUpgradeCancelResponse): MsgChannelUpgradeCancelResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParams;
    isAmino(o: any): o is MsgUpdateParamsAmino;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParamsResponse;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgPruneAcknowledgements: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgPruneAcknowledgements;
    isAmino(o: any): o is MsgPruneAcknowledgementsAmino;
    encode(message: MsgPruneAcknowledgements, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAcknowledgements;
    fromPartial(object: DeepPartial<MsgPruneAcknowledgements>): MsgPruneAcknowledgements;
    fromAmino(object: MsgPruneAcknowledgementsAmino): MsgPruneAcknowledgements;
    toAmino(message: MsgPruneAcknowledgements): MsgPruneAcknowledgementsAmino;
    fromAminoMsg(object: MsgPruneAcknowledgementsAminoMsg): MsgPruneAcknowledgements;
    toAminoMsg(message: MsgPruneAcknowledgements): MsgPruneAcknowledgementsAminoMsg;
    fromProtoMsg(message: MsgPruneAcknowledgementsProtoMsg): MsgPruneAcknowledgements;
    toProto(message: MsgPruneAcknowledgements): Uint8Array;
    toProtoMsg(message: MsgPruneAcknowledgements): MsgPruneAcknowledgementsProtoMsg;
};
export declare const MsgPruneAcknowledgementsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgPruneAcknowledgementsResponse;
    isAmino(o: any): o is MsgPruneAcknowledgementsResponseAmino;
    encode(message: MsgPruneAcknowledgementsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAcknowledgementsResponse;
    fromPartial(object: DeepPartial<MsgPruneAcknowledgementsResponse>): MsgPruneAcknowledgementsResponse;
    fromAmino(object: MsgPruneAcknowledgementsResponseAmino): MsgPruneAcknowledgementsResponse;
    toAmino(message: MsgPruneAcknowledgementsResponse): MsgPruneAcknowledgementsResponseAmino;
    fromAminoMsg(object: MsgPruneAcknowledgementsResponseAminoMsg): MsgPruneAcknowledgementsResponse;
    toAminoMsg(message: MsgPruneAcknowledgementsResponse): MsgPruneAcknowledgementsResponseAminoMsg;
    fromProtoMsg(message: MsgPruneAcknowledgementsResponseProtoMsg): MsgPruneAcknowledgementsResponse;
    toProto(message: MsgPruneAcknowledgementsResponse): Uint8Array;
    toProtoMsg(message: MsgPruneAcknowledgementsResponse): MsgPruneAcknowledgementsResponseProtoMsg;
};
