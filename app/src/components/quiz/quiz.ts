import { Component, Vue } from 'vue-property-decorator';
import DataManager from '@/data/DataManager';
import UiFactory from '@/components/ui/ui-factory';

@Component
export default class Quiz extends Vue {
  mounted(): void {
    const q = DataManager.getQuiz();
    Object.keys(q).forEach((k) => {
      const d = q[k];
      if (d.dependsOn) return;
      this.$el.appendChild(UiFactory.instance(d));
    });
  }
}
