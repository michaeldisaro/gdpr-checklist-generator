import { Component, Prop, Vue } from 'vue-property-decorator';
import AnswerModel from '@/models/answer-model';
import QuestionModel from '@/models/question-model';

const md5 = require('md5');

@Component
export default class RadioInput extends Vue {
  @Prop() question!: QuestionModel;

  uiId: string = md5(Math.random() * (999999 - 111111) + 111111);

  selected: number = -1;

  test(): void {
    const answer: AnswerModel = this.question.answers[this.selected];
    this.$parent.$emit('nestedClear');
    this.$parent.$emit('fulfillmentClear');
    if (answer.question) this.$parent.$emit('nestedAdded', answer.question);
    if (answer.fulfillment) this.$parent.$emit('fulfillmentAdded', answer.fulfillment);
  }
}
