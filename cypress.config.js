const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  return config;
}

// Make sure to return the config object as it might have been modified by the plugin.

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  retries: {
    runMode: 1,
  },
  projectId: "xq62ky",

  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents,
    stepDefinitions: "cypress/integration/examples/*{js}",
    specPattern: ["**/*.feature"],
    baseUrl: "https://www.saucedemo.com/",
  },
});

on ('task', tasks);
on ('task',{
  excelToJsonConverter(filePath){
       const result = excelToJson({
         sourceFile: fs.readFileSync(filePath),
       });
       return result;
  }
})
