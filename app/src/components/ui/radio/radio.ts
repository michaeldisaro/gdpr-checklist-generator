import { Component, Prop, Vue } from 'vue-property-decorator';
import Ui from "@/components/ui/ui";

@Component
export default class RadioInput extends Ui {
  @Prop() selected;

  test(): void {
    console.log("checking Radio... TODO:" + this.selected);
  }
}
