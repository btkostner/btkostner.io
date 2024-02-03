import { createError, getQuery, sendRedirect } from "h3";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (
    typeof query.resource === "string" &&
    query.resource.startsWith("acct:btkostner")
  ) {
    return sendRedirect(
      event,
      "https://mastodon.social/.well-known/webfinger?resource=acct:btkostner@mastodon.social",
      307,
    );
  } else {
    return createError({ status: 404 });
  }
});
