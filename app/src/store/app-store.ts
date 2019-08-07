import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import QuestionModel from '@/models/question-model';
import Store from './store';
import FulfillmentModel from '@/models/fulfillment-model';
import Vue from "vue";

@Module({
  dynamic: true,
  store: Store,
  name: 'appStore',
  namespaced: true,
})
export default class AppStore extends VuexModule {
  quiz: { [key: number]: QuestionModel } = {};

  fulfillments: { [key: number]: FulfillmentModel } = {};

  get ffments() {
    return this.fulfillments;
  }

  @Mutation
  questionMutation(question: QuestionModel) {
    Vue.set(this.quiz,question.id,question);
  }

  @Mutation
  fulfillmentMutation(fulfillment: FulfillmentModel) {
    Vue.set(this.fulfillments, fulfillment.id, fulfillment);
  }

  @Action
  addQuestion(question: QuestionModel) {
    this.context.commit('questionMutation', question);
  }

  @Action
  addFulfillment(fulfillment: FulfillmentModel) {
    this.context.commit('fulfillmentMutation', fulfillment);
  }
}
