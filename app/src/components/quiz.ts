import { Component, Prop, Vue } from 'vue-property-decorator';
import DataManager from "@/data/DataManager";
import UiFactory from '@/components/ui/ui-factory';

@Component
export default class Quiz extends Vue {
  start(): void {
    const q = DataManager.getQuiz();
    for (const data in q) {
      if (!q.hasOwnProperty(data)) continue;
      const d = q[data];
      this.$el.appendChild(UiFactory.instance(d));
    }
  }

  mounted(): void {
    this.start();
  }
}
