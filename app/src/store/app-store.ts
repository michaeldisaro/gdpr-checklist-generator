import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import QuestionModel from '@/models/question-model';
import Store from './store';
import FulfillmentModel from '@/models/fulfillment-model';
import Vue from 'vue';

@Module({
  dynamic: true,
  store: Store,
  name: 'appStore',
  namespaced: true,
})
export default class AppStore extends VuexModule {
  quiz: { [key: number]: QuestionModel } = {};

  fulfillments: { [key: number]: FulfillmentModel } = {};

  get qz() {
    return this.quiz;
  }

  get ff() {
    return this.fulfillments;
  }

  @Mutation
  addQuestionMutation(question: QuestionModel) {
    Vue.set(this.quiz,question.id,question);
  }

  @Mutation
  addFulfillmentMutation(fulfillment: FulfillmentModel) {
    Vue.set(this.fulfillments, fulfillment.id, fulfillment);
  }

  @Mutation
  removeFulfillmentMutation(fulfillment: FulfillmentModel) {
    Vue.delete(this.fulfillments, fulfillment.id);
  }

  @Action
  addQuestion(question: QuestionModel) {
    this.context.commit('addQuestionMutation', question);
  }

  @Action
  addFulfillment(fulfillment: FulfillmentModel) {
    this.context.commit('addFulfillmentMutation', fulfillment);
  }

  @Action
  removeFulfillment(fulfillment: FulfillmentModel) {
    this.context.commit('removeFulfillmentMutation', fulfillment);
  }
}
