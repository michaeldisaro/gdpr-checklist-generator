import {Component, Prop, Vue} from 'vue-property-decorator';
import Ui from "@/components/ui/ui";

@Component
export default class TextInput extends Ui {
  @Prop() userText;

  test(): void {
    console.log("checking Text... TODO: "+ this.userText);
  }
}
