import { Component, Prop } from 'vue-property-decorator';
import Ui from '@/components/ui/ui';
import AnswerModel from '@/models/answer-model';

@Component
export default class RadioInput extends Ui {
  @Prop() selected!: number;

  test(): void {
    const answer: AnswerModel = this.question.answers[this.selected];
    this.nest(answer.question);
    this.add(answer.fulfillment);
  }
}
