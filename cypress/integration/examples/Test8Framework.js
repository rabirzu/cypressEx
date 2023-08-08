import HomePage from "./pageObjects/HomePage";
import ProductPage from "./pageObjects/ProductPage";
import CheckoutPage from "./pageObjects/CheckoutPage";
/// <reference types= "Cypress" />

describe("Section 8 Framework", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Section 8 framework", function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const checkoutPage = new CheckoutPage();

    cy.visit("https://www.rahulshettyacademy.com/angularpractice/");
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);

    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minLength", "2");
    homePage.getEntrepeneaur().should("be.disabled");
    homePage.getShopTab().click();

    //select product
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
    //product page
    productPage.getCheckOutButton().click();
    //tap on checkout button from product page
    productPage.getCartCheckoutButton().click();
    //tap inside of the checkbox and select india
    checkoutPage.getTextBox().type("india");
    cy.wait(6000);
   
   checkoutPage.getDropDownOption("India").click();
    
    // cy.get('.suggestions>ul>li>a').contains('India')
    // .invoke('index').then(index=>
    //   {
    //     cy.get('.suggestions>ul>li>a').select(index)
    //   })
    });
  });

