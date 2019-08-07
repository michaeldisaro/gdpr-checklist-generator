import { Component, Prop, Vue } from 'vue-property-decorator';
import DataManager from '@/data/DataManager';
import UiFactory from '@/components/ui/ui-factory';
import Fulfillment from '@/components/fulfillment/Fulfillment.vue';

@Component
export default class Ui extends Vue {
  @Prop() data: any;

  get question() {
    return {
      id: this.data.question,
      text: DataManager.getQuestionText(this.data.question),
    };
  }

  get answers() {
    Object.entries(this.data.answers).forEach((e: {[key: string]: any}) => {
      e.text = DataManager.getAnswerText(e.id);
    });
    return this.data.answers;
  }

  nested(question?: string) {
    const container = this.$el.querySelector('.children');
    if (!container) return;
    container.innerHTML = '';
    if (question) container.appendChild(UiFactory.instance(DataManager.getQuestion(question)));
  }

  show(fulfillment?: string) {
    const container = window.document.querySelector('ul.fulfillments');
    if (!container) return;
    const questionFulfillments = container.querySelector(`li[data-question="${this.data.question}"]`);
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
}
