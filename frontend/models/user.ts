export default class User {
    id: String;
    name: String;
    type: String;

    constructor(props: any) {
      this.id = props.id || this.id;
      this.name = props.name;
      this.type = props.type;
    }
  }