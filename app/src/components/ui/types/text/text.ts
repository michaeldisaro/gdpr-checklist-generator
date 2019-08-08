import { Component, Prop, Vue } from 'vue-property-decorator';
import QuestionModel from '@/models/question-model';
import FulfillmentModel from '@/models/fulfillment-model';
import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';

const safeEval = require('safe-eval');
const appStore = getModule(AppStore);

@Component
export default class TextInput extends Vue {
  @Prop() question!: QuestionModel;

  @Prop() nested!: QuestionModel[];

  @Prop() fulfillments!: FulfillmentModel[];

  userText: string = '';

  test(): void {
    for (let idx = 0; idx < this.question.answers.length; idx += 1) {
      const answer = this.question.answers[idx];
      const check = (this.userText || '0') + answer.value;
      if (safeEval(check)) {
        if (answer.question)
          Vue.set(this.nested, answer.question, appStore.quiz[answer.question]);
        if(answer.fulfillment)
          this.$parent.$emit('fulfillmentAdded', answer.fulfillment);
      } else {
        if (answer.question)
          Vue.delete(this.nested, answer.question);
        if(answer.fulfillment)
          this.$parent.$emit('fulfillmentRemoved', answer.fulfillment);
      }
    }
  }
}
