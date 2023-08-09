import { defineConfig } from "cypress";
const preprocessor = require("badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

export default defineConfig({
  projectId: "xq62ky",
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await preprocessor.addCucumberPreprocesorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
    },
    specPattern: "cypress/integration/examples/BDD*.feature",
  },

  env: {
    url: "https://rahulshettyacademy.com",
    userId: "raluca",
    password: "890",
  },
});
