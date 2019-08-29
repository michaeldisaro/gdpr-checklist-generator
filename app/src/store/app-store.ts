import Vue from 'vue';
import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import QuestionModel from '@/models/question-model';
import Store from './store';
import FulfillmentModel from '@/models/fulfillment-model';
import FulfillmentMutationPayload from '@/interfaces/FulfillmentMutationPayload';

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
  addFulfillmentMutation(p: any) {
    let fulfillment: FulfillmentModel = p.fulfillment;
    let uiId: string = p.uiId;
    if (!this.fulfillments[fulfillment.id]) {
      Vue.set(this.fulfillments, fulfillment.id, fulfillment);
    }
    if (this.fulfillments[fulfillment.id].parentUiIds.indexOf(uiId) < 0) {
      this.fulfillments[fulfillment.id].parentUiIds.push(uiId);
    }
  }

  @Mutation
  removeFulfillmentMutation(p: any) {
    let fulfillment: FulfillmentModel = p.fulfillment;
    let uiId: string = p.uiId;
    if(this.fulfillments[fulfillment.id]) {
      const parents: string[] = this.fulfillments[fulfillment.id].parentUiIds;
      this.fulfillments[fulfillment.id].parentUiIds
        .splice(parents.indexOf(uiId), 1);
      if (this.fulfillments[fulfillment.id].parentUiIds.length <= 0) {
        Vue.delete(this.fulfillments, fulfillment.id);
      }
    }
  }

  @Action
  addQuestion(question: QuestionModel) {
    this.context.commit('addQuestionMutation', question);
  }

  @Action
  addFulfillment(p: FulfillmentMutationPayload) {
    this.context.commit('addFulfillmentMutation', p);
  }

  @Action
  removeFulfillment(p: FulfillmentMutationPayload) {
    this.context.commit('removeFulfillmentMutation', p);
  }
}
