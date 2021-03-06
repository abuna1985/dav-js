import NeedParams from './NeedParams';
import BidParams from './BidParams';
import MissionParams from './MissionParams';
import ChargingArrivalMessageParams from './messages/ChargingArrivalMessageParams';
import ChargingCompleteMessageParams from './messages/ChargingCompleteMessageParams';
import ChargingStartedMessageParams from './messages/ChargingStartedMessageParams';
import DeclineMessageParams from './messages/DeclineMessageParams';
import ProviderStatusMessageParams from './messages/ProviderStatusMessageParams';
import StartingMessageParams from './messages/StartingMessageParams';
import StatusRequestMessageParams from './messages/StatusRequestMessageParams';
import VesselStatusMessageParams from './messages/VesselStatusMessageParams';
import NeedFilterParams from './NeedFilterParams';
declare const _default: {
    need_filter: typeof NeedFilterParams;
    need: typeof NeedParams;
    bid: typeof BidParams;
    mission: typeof MissionParams;
    charging_arrival_message: typeof ChargingArrivalMessageParams;
    charging_complete_message: typeof ChargingCompleteMessageParams;
    charging_started_message: typeof ChargingStartedMessageParams;
    decline_message: typeof DeclineMessageParams;
    provider_status_message: typeof ProviderStatusMessageParams;
    starting_message: typeof StartingMessageParams;
    status_request_message: typeof StatusRequestMessageParams;
    vessel_status_message: typeof VesselStatusMessageParams;
    needFilters: string[];
    needs: string[];
    bids: string[];
    missions: string[];
    messages: string[];
};
export default _default;
//# sourceMappingURL=ProtocolTypes.d.ts.map