import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';
import quiz from './quiz.json';
import questions from './it/questions.json';
import answers from './it/answers.json';
import fulfillments from './it/fulfillments.json';
import QuestionModel from '@/models/question-model';
import AnswerModel from '@/models/answer-model';
import FulfillmentModel from '@/models/fulfillment-model';

const appStore = getModule(AppStore);

export default class DataManager {
  static prepareQuiz() {
    Object.values(quiz).forEach((data) => {
      const q = new QuestionModel();
      q.id = data.question;
      q.type = data.type;
      q.text = this.getQuestionText(data.question);
      q.dependsOn = data.dependsOn || [];
      Object.values(data.answers).forEach((answer) => {
        const a = new AnswerModel();
        a.id = answer.id || 0;
        a.text = this.getAnswerText(answer.id) || '';
        a.question = answer.question || null;
        a.value = answer.value || '';
        if (answer.fulfillment) {
          const f = new FulfillmentModel();
          f.id = <number>answer.fulfillment;
          f.text = this.getFulfillmentText(<number>answer.fulfillment);
          a.fulfillment = f;
        }
        q.answers.push(a);
      });
      appStore.addQuestion(q);
    });
  }

  static getQuestionText(id: number): string {
    const q = questions as { [key: number]: any };
    return q[id];
  }

  static getAnswerText(id: number): string {
    const a = answers as { [key: number]: any };
    return a[id];
  }

  static getFulfillmentText(id: number): string {
    const f = fulfillments as { [key: number]: any };
    return f[id];
  }
}
