import FulfillmentModel from "@/models/fulfillment-model";

interface FulfillmentMutationPayload {
  fulfillment: FulfillmentModel;
  uiId: string;
}
