export default class ProductUI {
  id: String;
  name: String;

  constructor(props: any) {
    this.id = props.id || this.id;
    this.name = props.name;
  }

  public capitalize() {
    return this.name.toUpperCase();
  }
}
