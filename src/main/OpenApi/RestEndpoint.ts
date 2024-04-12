import QueryParameter from 'QueryParameter';

export default class RestEndpoint {
  query_parameters: QueryParameter[];

  id: String;

  method: String;

  path: String;

  is_selected: Boolean;

  constructor(id: String, method: String, path: String, is_selected: Boolean) {
    this.id = id;
    this.method = method;
    this.path = path;
    this.is_selected = is_selected;
    this.query_parameters = [];
  }
}
