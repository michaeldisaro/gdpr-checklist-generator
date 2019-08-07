import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import Fulfillment from '@/components/fulfillment/Fulfillment.vue';
import Question from '@/models/question';
import Store from './store';

@Module({
  dynamic: true,
  store: Store,
  name: 'appStore',
  namespaced: true,
})
export default class AppStore extends VuexModule {
  quiz: { [key: number]: Question } = {};

  fulfillments: Array<Fulfillment> = [];

  @Mutation
  addQuestion(question: Question) {
    this.quiz[question.id] = question;
  }

  @Mutation
  commitFulfillment(fulfillment: Fulfillment) {
    this.fulfillments.push(fulfillment);
  }
}
