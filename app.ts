import { Drash } from "https://deno.land/x/drash@v1.0.3/mod.ts";
import { HomeResource } from "./resources/home_resource.ts";
import { FlashcardResource } from "./resources/flashcard_resource.ts";
import { LogMiddleware } from "./middlewares/log_middleware.ts";
import { debugLog } from "./utils.ts";

const server = new Drash.Http.Server({
  middleware: {
    after_request: [
      LogMiddleware,
    ],
  },
  resources: [
    HomeResource,
    FlashcardResource,
  ],
});

const hostname = "localhost";
const port = 5000;
server.run({ hostname, port });

debugLog(`Server running at ${hostname}:${port}`);
