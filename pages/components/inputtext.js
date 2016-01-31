export class DemoInputText {
  text: string;
  disabled: boolean = true;

  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}
