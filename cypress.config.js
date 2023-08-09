import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "xq62ky",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
  },

  env: {
    url: "https://rahulshettyacademy.com",
    userId: "raluca",
    password: "890",
  },
});
