import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';
import quiz from './quiz.json';
import questions from './it/questions.json';
import answers from './it/answers.json';
import fulfillments from './it/fulfillments.json';
import Question from '@/models/question';
import Answer from '@/models/answer';
import Fulfillment from '@/models/fulfillment';

const appStore = getModule(AppStore);

export default class DataManager {
  static prepareQuiz() {
    Object.values(quiz).forEach((d) => {
      const question = new Question();
      question.id = d.question;
      question.type = d.type;
      question.text = this.getQuestionText(d.question);
      question.dependsOn = d.dependsOn || [];
      Object.values(d.answers).forEach((a) => {
        const answer = new Answer();
        answer.id = a.id || 0;
        answer.text = this.getAnswerText(a.id) || '';
        answer.question = a.question || null;
        answer.value = a.value || '';
        if (a.fulfillment) {
          const fulfillmentModel = new Fulfillment();
          fulfillmentModel.id = a.fulfillment;
          fulfillmentModel.text = this.getFulfillmentText(a.fulfillment);
          answer.fulfillment = fulfillmentModel;
        }
        question.answers.push(answer);
      });
      appStore.addQuestion(question);
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
