import { Drash } from "https://deno.land/x/drash@v1.0.3/mod.ts";
import { debugLog } from "../utils.ts";

export function LogMiddleware(request: any, response?: Drash.Http.Response) : void {
  debugLog(`${request.method} "${request.url}" ${response?.status_code}`);
}
