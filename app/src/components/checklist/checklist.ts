import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import AppStore from '@/store/app-store';
import { mapGetters } from 'vuex';

const appStore = getModule(AppStore);

@Component({
  computed: mapGetters({
    fulfillments: 'appStore/ff'
  })
})
export default class Checklist extends Vue {

}
