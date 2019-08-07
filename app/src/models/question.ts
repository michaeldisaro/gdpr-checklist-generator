import Answer from '@/models/answer';

export default class Question {
  id: number = 0;

  type: string = '';

  text: string = '';

  dependsOn: number[] = [];

  answers: Array<Answer> = <Array<Answer>>[];
}
