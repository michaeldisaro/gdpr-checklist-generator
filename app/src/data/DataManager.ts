import quiz from '../data/quiz.json';
import questions from './it/questions.json';
import answers from './it/answers.json';
import fulfillments from './it/fulfillments.json';

export default class DataManager {
  static getQuiz(): { [key: string]: any } {
    return quiz;
  }

  static getQuestion(id: string): { [key: string]: any } {
    const qz = quiz as { [key: string]: any };
    return qz[id];
  }

  static getQuestionText(id: string): string {
    const q = questions as { [key: string]: any };
    return q[id];
  }

  static getAnswerText(id: string): string {
    const a = answers as { [key: string]: any };
    return a[id];
  }

  static getFulfillmentText(id: string): string {
    const f = fulfillments as { [key: string]: any };
    return f[id];
  }
}
