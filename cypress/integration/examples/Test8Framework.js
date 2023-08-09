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

    cy.visit(Cypress.env("url") + "/angularpractice/");
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

    //product page section 11
    productPage.getCheckOutButton().click();

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

      expect(Number(total)).to.equal(Number(sum));
    });

    //tap on checkout button from product page
    productPage.getCartCheckoutButton().click();
    //tap inside of the checkbox and select india
    checkoutPage.getTextBox().type("india");
    cy.wait(6000);
    checkoutPage.getDropDownOption("India").click();
    checkoutPage.getCheckbox().click({ force: true });
    checkoutPage.getClickPurchase().click();
    checkoutPage.getAlert().then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });

    // cy.get('.suggestions>ul>li>a').contains('India')
    // .invoke('index').then(index=>
    //   {
    //     cy.get('.suggestions>ul>li>a').select(index)
    //   })

    //sum of products functionality
  });
});
