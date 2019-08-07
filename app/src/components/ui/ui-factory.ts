import { Vue } from 'vue-property-decorator';
import RadioInput from '@/components/ui/radio/Radio.vue';
import TextInput from '@/components/ui/text/Text.vue';

export default class UiFactory {
  static instance(question: { [key: string]: any }): Node {
    const ui = {
      Radio: RadioInput,
      Text: TextInput,
    } as { [key: string]: any };
    const instance = new ui[question.type]({
      propsData: {
        data: question,
      },
    });
    instance.$mount();
    return instance.$el;
  }
}
