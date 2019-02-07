import React from "react";
import ReactDOM from "react-dom/server";
import App from "./components";
import xssFilters from "xss-filters";

export default req => {
  const email = req.query.email;

  // determine the state (this may be async and require DB calls etc..)
  const state = {
    email: email ? xssFilters.inHTMLData(email) : "",
    showValidation: !!email
  };

  // render React to HTML string, passing the current state as a prop
  const html = ReactDOM.renderToString(<App state={state} />);

  // Express action expects a Promise (so we can do async stuff in here)
  return Promise.resolve({ html, state });
};
