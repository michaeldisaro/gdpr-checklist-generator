import { Component, Prop, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';
import QuestionModel from '@/models/question-model';
import UiFactory from '@/components/ui/ui-factory';
import FulfillmentModel from '@/models/fulfillment-model';

const appStore = getModule(AppStore);

@Component
export default class Ui extends Vue {
  @Prop() question!: QuestionModel;

  uiId: number = Math.random() * (9999 - 1111) + 1111;

  nest(questionId?: number) {
    const container = this.$el.querySelector('.children');
    if (!container) return;
    container.innerHTML = '';
    if (questionId) {
      container.appendChild(UiFactory.instance(appStore.quiz[questionId]));
    }
  }

  add(fulfillment?: FulfillmentModel) {
    if (fulfillment) {
      fulfillment.parentUiIds.push(this.uiId);
      appStore.addFulfillment(fulfillment);
    }
  }
}
