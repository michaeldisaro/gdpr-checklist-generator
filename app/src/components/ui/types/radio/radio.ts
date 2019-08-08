import { Component, Prop, Vue } from 'vue-property-decorator';
import AnswerModel from '@/models/answer-model';
import QuestionModel from '@/models/question-model';
import FulfillmentModel from '@/models/fulfillment-model';
import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';

const appStore = getModule(AppStore);

@Component
export default class RadioInput extends Vue {
  @Prop() question!: QuestionModel;

  @Prop() nested!: QuestionModel[];

  @Prop() fulfillments!: FulfillmentModel[];

  selected: number = -1;

  test(): void {
    const answer: AnswerModel = this.question.answers[this.selected];
    Object.keys(this.nested).forEach((k) => {
      Vue.delete(this.nested, k);
    });
    Object.values(this.fulfillments).forEach((f) => {
      this.$parent.$emit('fulfillmentRemoved', f);
    });
    if (answer.question) Vue.set(this.nested, answer.question, appStore.quiz[answer.question]);
    if (answer.fulfillment) this.$parent.$emit('fulfillmentAdded', answer.fulfillment);

  }
}
