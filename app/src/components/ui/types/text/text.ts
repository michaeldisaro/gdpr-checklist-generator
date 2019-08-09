import { Component, Prop, Vue } from 'vue-property-decorator';
import QuestionModel from '@/models/question-model';

const md5 = require('md5');

const safeEval = require('safe-eval');

@Component
export default class TextInput extends Vue {
  @Prop() question!: QuestionModel;

  uiId: string = md5(Math.random() * (999999 - 111111) + 111111);

  userText: string = '';

  test(): void {
    for (let idx = 0; idx < this.question.answers.length; idx += 1) {
      const answer = this.question.answers[idx];
      const check = (this.userText || '0') + answer.value;
      if (safeEval(check)) {
        if (answer.question) this.$parent.$emit('nestedAdded', answer.question);
        if (answer.fulfillment) this.$parent.$emit('fulfillmentAdded', answer.fulfillment);
      } else {
        if (answer.question) this.$parent.$emit('nestedRemoved', answer.question);
        if (answer.fulfillment) this.$parent.$emit('fulfillmentRemoved', answer.fulfillment);
      }
    }
  }
}
