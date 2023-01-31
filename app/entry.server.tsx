import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";
import * as Sentry from "@sentry/remix";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  Sentry.init({
    dsn: "https://07e70b0a717e4b6aaf298d6c2f3330b1:c6e1f6eae95d4863b10718227df1fe13@o1145044.ingest.sentry.io/4504600711200769",
    tracesSampleRate: 1,
    debug: true
  });

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
