import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Fulfillment extends Vue {
  @Prop() data?: any;

  @Prop() text?: string;
}
