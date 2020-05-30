import { Drash } from "https://deno.land/x/drash@v1.0.3/mod.ts";

export class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  
  public GET() {
    this.response.body = "GET request received!";
    return this.response;
  }

  public POST() {
    this.response.body = "POST request received!";
    return this.response;
  }
}