import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';
import DataManager from '@/data/DataManager';
import UiFactory from '@/components/ui/ui-factory';
import QuestionModel from '@/models/question-model';

const appStore = getModule(AppStore);

@Component
export default class Quiz extends Vue {
  created(): void {
    DataManager.prepareQuiz();
  }

  mounted(): void {
    Object.values(appStore.quiz).forEach((q: QuestionModel) => {
      if (q.dependsOn.length > 0) return;
      this.$el.appendChild(UiFactory.instance(q));
    });
  }
}
