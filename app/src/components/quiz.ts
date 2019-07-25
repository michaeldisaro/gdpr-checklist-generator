import {Component, Prop, Vue} from 'vue-property-decorator';
import * as quiz from '../data/quiz.json';
import RadioInput from './ui/radio/Radio.vue';
import TextInput from "./ui/text/Text.vue";

@Component({
  components: {
    RadioInput,
    TextInput,
  },
})
export default class Quiz extends Vue {
  start(): void {
    const ui = {
      Radio: RadioInput,
      Text: TextInput,
    };
    const q = quiz.default;
    for (let data in q) {
      const d = q[data];
      const Component = Vue.extend(ui[d.type]);
      const instance = new Component({
        propsData: {
          data: d
        }
      });
      instance.$mount();
      this.$el.appendChild(instance.$el);
    }
  }

  mounted(): void {
    this.start();
  }
}
