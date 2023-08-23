/// <reference types="Cypress" />
import LogInPage from "/Users/rabirzu/JavaScriptTraining/cypressEx/cypress/integration/examples/pageObjects/LogInPage.js";
import ProductPageSauce from "../../pageObjects/ProductPageSauce";
import CheckoutPageSauce from "/Users/rabirzu/JavaScriptTraining/cypressEx/cypress/integration/examples/pageObjects/CheckoutPageSauce.js";

import {
  Given,
  Then,
  And,
  When,
} from "@badeball/cypress-cucumber-preprocessor";

const logInPage = new LogInPage();
const productPageSauce = new ProductPageSauce();
const checkOutPageSauce = new CheckoutPageSauce();
let elementArray = [];
let productElement;
Given("I access the page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("I enter login credentials", function (dataTable) {
  logInPage.getUserNameBox().type(dataTable.rawTable[1][0]);
  logInPage.getPasswordBox().type(dataTable.rawTable[1][1]);
});

When("I click on Login button", () => {
  logInPage.getLoginButton().click();
});

Then("I am redirected to Products page", () => {
  // cy.url().eq("https://www.saucedemo.com/inventory.html")
  cy.url().should("be.equal", "https://www.saucedemo.com/inventory.html");
});

When("I am on Products page", () => {
  cy.url().should("be.equal", "https://www.saucedemo.com/inventory.html");
});

When("I add {string} to cart", (product) => {
 
  cy.selectProduct(product);
  elementArray.push(product);
  cy.log(elementArray);
});

When("I add more {string} to cart", function(product,dataTable) {
  cy.log(dataTable)

  cy.selectProduct(dataTable.rawTable[1]);
  cy.selectProduct(dataTable.rawTable[2]);
  cy.log(dataTable.rawTable[1])

});

Then("I click on Cart button", () => {
  productPageSauce.getCartButton().click();
});

When("I check if the {string} selected are in Cart", function(product,dataTable) {
cy.log(dataTable)  
  
  cy.get(".inventory_item_name").each(($el, index) => {
  
   $el.text().includes(
    dataTable.rawTable[index])
    
  });

});

Then("I remove the Products added before", () => {
  cy.get(".inventory_item_description").each(($el, index, $list) => {
   
    if ($el.text().includes("Remove")) {
      cy.get(".btn").eq(index).click();
    }
  });
});
Then("I click on checkout button", () => {
  checkOutPageSauce.getCheckOutButton().click();
});


