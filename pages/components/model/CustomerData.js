import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "http://localhost:3000/api/customers";

@inject(HttpClient)
export class CustomerData {
  constructor(httpClient) {
    this.http=httpClient;
  }

  getAll(){
    return this.http.get(baseUrl)
    .then(response => {
      return response.content;
    });
  }
}
