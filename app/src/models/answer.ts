import Fulfillment from '@/models/fulfillment';

export default class Answer {
  id: number = 0;

  text: string = '';

  fulfillment?: Fulfillment;

  question?: number;

  value?: string;
}
