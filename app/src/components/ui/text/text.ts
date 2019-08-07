import { Component, Prop } from 'vue-property-decorator';
import Ui from '@/components/ui/ui';

const safeEval = require('safe-eval');

@Component
export default class TextInput extends Ui {
  @Prop() userText: string = '';

  test(): void {
    for (let idx = 0; idx < this.question.answers.length; idx += 1) {
      const answer = this.question.answers[idx];
      const check = (this.userText || '0') + answer.value;
      if (safeEval(check)) {
        this.nested(answer.question);
      } else {
        this.nested();
      }
    }
  }
}
