import AnswerModel from '@/models/answer-model';

export default class QuestionModel {
  id: number = 0;

  type: string = '';

  text: string = '';

  dependsOn: number[] = [];

  answers: Array<AnswerModel> = <Array<AnswerModel>>[];
}
