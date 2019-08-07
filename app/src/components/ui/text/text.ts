import { Component, Prop } from 'vue-property-decorator';
import Ui from '@/components/ui/ui';

const safeEval = require('safe-eval');

@Component
export default class TextInput extends Ui {
  @Prop() userText: string = '';

  test(): void {
    for (let idx = 0; idx < this.answers.length; idx += 1) {
      const answer = this.answers[idx];
      const check = (this.userText || '0') + answer.value;
      if (safeEval(check)) {
        this.nested(answer.question);
        this.show(answer.fulfillment);
      } else {
        this.nested();
        this.show();
      }
    }
  }
}
