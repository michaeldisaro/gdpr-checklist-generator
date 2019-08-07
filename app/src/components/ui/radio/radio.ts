import { Component, Prop } from 'vue-property-decorator';
import Ui from '@/components/ui/ui';
import Answer from '@/models/answer';

@Component
export default class RadioInput extends Ui {
  @Prop() selected!: number;

  test(): void {
    const answer: Answer = this.question.answers[this.selected];
    this.nested(answer.question);
  }
}
