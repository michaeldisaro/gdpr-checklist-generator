import { Component, Prop, Vue } from 'vue-property-decorator';
import DataManager from "@/data/DataManager";

@Component
export default class Ui extends Vue {
  @Prop() data: any;

  get question(){
    return {
      id: this.data.question,
      text: DataManager.getQuestionText(this.data.question)
    };
  }

  get answers(){
    for(let i in this.data.answers){
      this.data.answers[i].text = DataManager.getAnswerText(this.data.answers[i].id);
    }
    return this.data.answers;
  }
}
