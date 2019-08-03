import {Component, Prop, Vue} from 'vue-property-decorator';
import DataManager from "@/data/DataManager";
import UiFactory from "@/components/ui/ui-factory";

@Component
export default class Ui extends Vue {
  @Prop() data: any;

  get question() {
    return {
      id: this.data.question,
      text: DataManager.getQuestionText(this.data.question)
    };
  }

  get answers() {
    for (const i in this.data.answers) {
      if(!this.data.answers.hasOwnProperty(i)) continue;
      this.data.answers[i].text = DataManager.getAnswerText(this.data.answers[i].id);
    }
    return this.data.answers;
  }

  nested(question?: string) {
    const container = this.$el.querySelector('.children');
    container.innerHTML = '';
    if (question)
      container.appendChild(UiFactory.instance(DataManager.getQuestion(question)))
  }

  show(fulfillment: string) {
    console.log('fulfillment: '+ fulfillment);
  }
}
