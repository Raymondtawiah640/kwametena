// ErrorPage.js
import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <pre style={{ color: "red" }}>
        <i>{error.statusText || error.message}</i>
      </pre>
    </div>
  );
}
