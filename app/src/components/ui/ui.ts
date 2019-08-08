import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';
import QuestionModel from '@/models/question-model';
import RadioInput from '@/components/ui/types/radio/Radio.vue';
import TextInput from '@/components/ui/types/text/Text.vue';
import FulfillmentModel from '@/models/fulfillment-model';

const md5 = require('md5');
const appStore = getModule(AppStore);

@Component({
  components: {
    RadioInput,
    TextInput,
    Ui,
  },
})
export default class Ui extends Vue {
  @Prop() question!: QuestionModel;

  uiId: number = md5(Math.random() * (999999 - 111111) + 111111);

  nested: { [key: number]: QuestionModel } = {};

  fulfillments: { [key: number]: FulfillmentModel } = {};

  get type(): any {
    const types = {
      "Radio": RadioInput,
      "Text": TextInput,
    } as { [key: string]: any };
    return types[this.question.type];
  }

  created() {
    this.$on('fulfillmentAdded', this.fulfillmentAdded);
    this.$on('fulfillmentRemoved', this.fulfillmentRemoved);
  }

  fulfillmentAdded(f: FulfillmentModel): void {
    console.log(`adding fulfillment ${f}`);
    appStore.addFulfillment(f);
    Vue.set(this.fulfillments, f.id, f);
  }

  fulfillmentRemoved(f: FulfillmentModel): void {
    console.log(`removing fulfillment ${f}`);
    appStore.removeFulfillment(f);
    Vue.delete(this.fulfillments, f.id);
  }

  beforeDestroy() {
    console.log(`destroying ${this.uiId}`);
    Object.values(this.fulfillments).forEach((v: FulfillmentModel) => {
      console.log(`removing fulfillment ${v.id}`);
      appStore.removeFulfillment(v);
    });
  }
}
