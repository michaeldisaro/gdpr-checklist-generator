import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';
import DataManager from '@/data/DataManager';
import UiFactory from '@/components/ui/ui-factory';
import Question from '@/models/question';

const appStore = getModule(AppStore);

@Component
export default class Quiz extends Vue {
  mounted(): void {
    DataManager.prepareQuiz();
    Object.values(appStore.quiz).forEach((q: Question) => {
      if (q.dependsOn.length > 0) return;
      this.$el.appendChild(UiFactory.instance(q));
    });
  }
}
