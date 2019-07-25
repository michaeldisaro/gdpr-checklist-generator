import * as questionsJson from './it/questions.json';
import * as answersJson from './it/answers.json';

export default class DataManager {
  static getQuestionText(id: string): string {
    const q = questionsJson as {[key: string]: any};
    return q.default[id];
  }

  static getAnswerText(id: string): string {
    const a = answersJson as {[key: string]: any};
    return a.default[id];
  }
}
