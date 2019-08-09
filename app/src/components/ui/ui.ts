import { Component, Prop, Vue } from 'vue-property-decorator';
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
  },
})
export default class Ui extends Vue {
  @Prop() question!: QuestionModel;

  uiId: string = md5(Math.random() * (999999 - 111111) + 111111);

  nested: { [key: number]: QuestionModel } = {};

  fulfillments: { [key: number]: FulfillmentModel } = {};

  get type(): any {
    const types = {
      Radio: RadioInput,
      Text: TextInput,
    } as { [key: string]: any };
    return types[this.question.type];
  }

  created() {
    this.$on('nestedClear', this.nestedClear);
    this.$on('nestedAdded', this.nestedAdded);
    this.$on('nestedRemoved', this.nestedRemoved);
    this.$on('fulfillmentClear', this.fulfillmentClear);
    this.$on('fulfillmentAdded', this.fulfillmentAdded);
    this.$on('fulfillmentRemoved', this.fulfillmentRemoved);
  }

  nestedClear() {
    // console.log(`clearing nested`);
    Object.keys(this.nested).forEach((k) => {
      Vue.delete(this.nested, k);
    });
  }

  nestedAdded(q: number) {
    // console.log(`adding nested ${q}`);
    Vue.set(this.nested, q, appStore.quiz[q]);
  }

  nestedRemoved(q: number) {
    // console.log(`removing nested ${q}`);
    Vue.delete(this.nested, q);
  }

  fulfillmentClear() {
    // console.log(`clearing fulfillments`);
    Object.values(this.fulfillments).forEach((v) => {
      appStore.removeFulfillment(this.fulfillments[v.id]);
      Vue.delete(this.fulfillments, v.id);
    });
  }

  fulfillmentAdded(f: FulfillmentModel): void {
    // console.log(`adding fulfillment ${f}`);
    f.parentUiIds.push(this.uiId);
    Vue.set(this.fulfillments, f.id, f);
    appStore.addFulfillment(f);
  }

  fulfillmentRemoved(f: FulfillmentModel): void {
    // console.log(`removing fulfillment ${f}`);
    appStore.removeFulfillment(f);
    Vue.delete(this.fulfillments, f.id);
  }

  beforeDestroy() {
    // console.log(`destroying ${this.uiId}`);
    Object.values(this.fulfillments).forEach((v: FulfillmentModel) => {
      // console.log(`removing fulfillment ${v.id}`);
      appStore.removeFulfillment(v);
      Vue.delete(this.fulfillments, v.id);
    });
  }
}
