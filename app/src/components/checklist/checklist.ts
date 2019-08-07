import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';
import { mapGetters } from 'vuex';

const appStore = getModule(AppStore);

@Component({
  computed: mapGetters({
    getFf: 'appStore/ffments'
  })
})
export default class Checklist extends Vue {

}
