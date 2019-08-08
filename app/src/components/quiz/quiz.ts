import { Component, Vue } from 'vue-property-decorator';
import DataManager from '@/data/DataManager';
import Ui from "@/components/ui/Ui.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    Ui
  },
  computed: mapGetters({
    quiz: 'appStore/qz',
  })
})
export default class Quiz extends Vue {
  created(): void {
    DataManager.prepareQuiz();
  }
}
