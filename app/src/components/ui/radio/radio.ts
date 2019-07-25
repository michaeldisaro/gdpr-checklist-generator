import { Component, Prop, Vue } from 'vue-property-decorator';
import * as questionsJson from '../../../data/it/questions.json';
import * as answersJson from '../../../data/it/answers.json';

@Component
export default class Radio extends Vue {
  @Prop() question!: string;

  @Prop() answers!: object[];

  getQuestionText(id: string): string {
    const q = questionsJson as {[key: string]: any};
    return q.default[id];
  }

  getAnswerText(id: string): string {
    const a = answersJson as {[key: string]: any};
    return a.default[id];
  }
}
