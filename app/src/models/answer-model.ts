import FulfillmentModel from '@/models/fulfillment-model';

export default class AnswerModel {
  id: number = 0;

  text: string = '';

  fulfillment?: FulfillmentModel;

  question?: number;

  value?: string;
}
