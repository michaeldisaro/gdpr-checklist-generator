import {Component, Prop, Vue} from 'vue-property-decorator';
import Ui from '@/components/ui/ui';

@Component
export default class RadioInput extends Ui {
  @Prop() selected: string = '';

  test(): void {
    const answer = this.data.answers[this.selected];
    this.nested(answer.question);
    this.show(answer.fulfillment);
  }
}
