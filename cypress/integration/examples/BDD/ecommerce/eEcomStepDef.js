/// <reference types="Cypress" />
import HomePage from "/Users/rabirzu/JavaScriptTraining/cypressEx/cypress/integration/examples/pageObjects/HomePage.js";
import ProductPage from "/Users/rabirzu/JavaScriptTraining/cypressEx/cypress/integration/examples/pageObjects/ProductPage.js";
import CheckoutPage from "/Users/rabirzu/JavaScriptTraining/cypressEx/cypress/integration/examples/pageObjects/CheckoutPage.js";

import {
  Given,
  And,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage();
const productPage = new ProductPage();
let name;

Given("I open Ecommerce Page", () => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

/// When I add items to Cart
When("I add items to Cart", function () {
  cy.wait(3000);
  homePage.getShopTab().click();

  this.data.productName.forEach(function (element) {
    cy.selectProduct(element);
  });
  productPage.getCheckOutButton().click();
});

//And Validate the total prices
When("Validation the total prices", () => {
  var sum = 0;
  cy.get("tr td:nth-child(4) strong")
    .each(($el, index, $list) => {
      const amount = $el.text();
      var res = amount.split(" ");
      res = res[1].trim();
      sum = Number(sum) + Number(res);
    })
    .then(function () {
      cy.log(sum);
    });
  cy.get("h3 strong").then(function (element) {
    const amount = element.text();
    var res = amount.split(" ");
    var total = res[1].trim();
    expect(Number(total)).to.equal(sum);
  });
});

//Then select the country submit and verify Thankyou

Then("Select the country submit and verify Thank you", () => {
  cy.contains("Checkout").click();
  cy.get("#country").type("India");
  cy.get(".suggestions > ul > li > a").click();
  cy.get("#checkbox2").click({ force: true });
  cy.get('input[type="submit"]').click();
  //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
  cy.get(".alert").then(function (element) {
    const actualText = element.text();
    expect(actualText.includes("Success")).to.be.true;
  });
});
//When I fill the form details
When("I fill the form details", function (dataTable) {
  name = dataTable.rawTable[1][0];
  homePage.getEditBox().type(dataTable.rawTable[1][0]);
  homePage.getGender().select(dataTable.rawTable[1][1]);
});
// Then validate the forms behaviour
Then("Validate the forms behavior", function () {
  homePage.getTwoWayDataBinding().should('have.value',name);
  homePage.getEditBox().should("have.attr", "minlength", "2");
  homePage.getEntrepeneaur().should("be.disabled");
  Cypress.config("defaultCommandTimeout", 8000);
});
// And select the Shop Page
Then("Select the Shop Page", () => {
  homePage.getShopTab().click();
});
