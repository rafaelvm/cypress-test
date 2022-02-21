import React from "react";
import App from "./App";
import { mount } from "@cypress/react";

it("renders learn react link", () => {
  mount(<App />);

  cy.get("p").contains("src/App.js");
  cy.get("button").click();
  cy.get("p").contains("src/App.test.js");
});
