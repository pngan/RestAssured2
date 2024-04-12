export default class QueryParameter {
  name: String;

  type: any;

  required: Boolean;

  constructor(name: String, type: any, required: Boolean) {
    this.name = name;
    this.type = type;
    this.required = required;
  }
}
