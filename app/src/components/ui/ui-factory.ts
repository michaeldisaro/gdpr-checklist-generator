import { Vue } from 'vue-property-decorator';
import RadioInput from '@/components/ui/radio/Radio.vue';
import TextInput from '@/components/ui/text/Text.vue';
import QuestionModel from '@/models/question-model';

export default class UiFactory {
  static instance(question: QuestionModel): Node {
    const ui = {
      Radio: RadioInput,
      Text: TextInput,
    } as { [key: string]: any };
    const instance = new ui[question.type]({
      propsData: {
        question,
      },
    });
    instance.$mount();
    return instance.$el;
  }
}
