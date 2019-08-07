import { Component, Prop, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';
import Question from '@/models/question';
import UiFactory from '@/components/ui/ui-factory';

const appStore = getModule(AppStore);

@Component
export default class Ui extends Vue {
  @Prop() question!: Question;

  nested(question?: number) {
    const container = this.$el.querySelector('.children');
    if (!container) return;
    container.innerHTML = '';
    if (question) {
      container.appendChild(UiFactory.instance(appStore.quiz[question]));
    }
  }

  /*
  show(fulfillment?: string) {
    const container = window.document.querySelector('ul.fulfillments');
    if (!container) return;
    const questionFulfillments =
      container.querySelector(`li[data-question="${this.data.question}"]`);
    if (questionFulfillments) questionFulfillments.remove();
    if (fulfillment) {
      const instance = new Fulfillment({
        propsData: {
          data: this.data,
          text: DataManager.getFulfillmentText(fulfillment),
        },
      });
      instance.$mount();
      container.append(instance.$el);
    }
  }
  */
}
