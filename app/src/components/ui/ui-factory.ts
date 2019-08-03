import RadioInput from "@/components/ui/radio/Radio.vue";
import TextInput from "@/components/ui/text/Text.vue";
import {Vue} from "vue-property-decorator";

export default class UiFactory {
  static instance(question: { [key: string]: any }): Node {
    const ui = {
      Radio: RadioInput,
      Text: TextInput,
    } as { [key: string]: any };
    const Component = Vue.extend(ui[question.type]);
    const instance = new Component({
      propsData: {
        data: question
      }
    });
    instance.$mount();
    return instance.$el;
  }
}
