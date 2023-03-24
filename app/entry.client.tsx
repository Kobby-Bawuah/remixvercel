import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { useLocation, useMatches } from "@remix-run/react";
import * as Sentry from "@sentry/remix";
import { useEffect } from "react";

Sentry.init({
  dsn: "https://07e70b0a717e4b6aaf298d6c2f3330b1:c6e1f6eae95d4863b10718227df1fe13@o1145044.ingest.sentry.io/4504600711200769",
  tracesSampleRate: 1,
  release: "my-project-name@" + 1.2,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.remixRouterInstrumentation(
        useEffect,
        useLocation,
        useMatches
      ),
    }),
  ],
  debug :true,
});

hydrate(<RemixBrowser />, document);
