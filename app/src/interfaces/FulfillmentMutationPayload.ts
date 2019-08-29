import FulfillmentModel from "@/models/fulfillment-model";

export default interface FulfillmentMutationPayload {
  fulfillment: FulfillmentModel;
  uiId: string;
}
