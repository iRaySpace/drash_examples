import { Drash } from "https://deno.land/x/drash@v1.0.3/mod.ts";
import { debugLog } from "../utils.ts";

export class FlashcardResource extends Drash.Http.Resource {
  static paths = [
    "/flashcards",
    "/flashcards/:id",
  ];

  public GET() {
    const id = this.request.getPathParam("id");
    if (!id) {
      throw new Drash.Exceptions.HttpException(
        400,
        "This resource requires `id`.",
      );
    }

    this.response.body = `${id}`;
    
    return this.response;
  }
}
