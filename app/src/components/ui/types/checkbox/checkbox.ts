import { Component, Prop, Vue } from 'vue-property-decorator';
import AnswerModel from '@/models/answer-model';
import QuestionModel from '@/models/question-model';

const md5 = require('md5');

@Component
export default class CheckboxInput extends Vue {
  @Prop() question!: QuestionModel;

  uiId: string = md5(Math.random() * (999999 - 111111) + 111111);

  checked: number = 0;

  test(): void {
    this.$parent.$emit('nestedClear');
    this.$parent.$emit('fulfillmentClear');
    if (this.checked) {
      this.question.answers.forEach((answer: AnswerModel) => {
        if (answer.question) this.$parent.$emit('nestedAdded', answer.question);
        if (answer.fulfillment) this.$parent.$emit('fulfillmentAdded', answer.fulfillment);
      });
    }
  }
}
