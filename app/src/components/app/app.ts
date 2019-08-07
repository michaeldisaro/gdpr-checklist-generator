import { Component, Vue } from 'vue-property-decorator';
import Quiz from '@/components/quiz/Quiz.vue';
import Checklist from '@/components/checklist/Checklist.vue';

@Component({
  components: {
    Checklist,
    Quiz,
  },
})
export default class App extends Vue {
}
