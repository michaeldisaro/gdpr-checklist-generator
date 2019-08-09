import Vue from 'vue';
import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import QuestionModel from '@/models/question-model';
import Store from './store';
import FulfillmentModel from '@/models/fulfillment-model';

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
    Vue.set(this.quiz, question.id, question);
  }

  @Mutation
  addFulfillmentMutation(fulfillment: FulfillmentModel) {
    if (this.fulfillments[fulfillment.id]
      && this.fulfillments[fulfillment.id].parentUiIds.indexOf(fulfillment.parentUiIds[0]) < 0) {
      this.fulfillments[fulfillment.id].parentUiIds.push(fulfillment.parentUiIds[0]);
    } else {
      Vue.set(this.fulfillments, fulfillment.id, fulfillment);
    }
  }

  @Mutation
  removeFulfillmentMutation(fulfillment: FulfillmentModel) {
    const parents: string[] = this.fulfillments[fulfillment.id].parentUiIds;
    this.fulfillments[fulfillment.id].parentUiIds
      .splice(parents.indexOf(fulfillment.parentUiIds[0]), 1);
    if (this.fulfillments[fulfillment.id].parentUiIds.length <= 0) {
      Vue.delete(this.fulfillments, fulfillment.id);
    }
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
