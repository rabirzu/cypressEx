/// <reference types= "Cypress" />

describe("Section 8 Framework", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Section 8 framework", function () {
    cy.visit("https://www.rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(1) > .form-control").type(this.data.name);
    cy.get("select").select(this.data.gender);

    cy.get(":nth-child(4) > .ng-pristine").should('have.value',this.data.name);
     cy.get(":nth-child(1) > .form-control").should('have.attr','minlength','2');
     cy.get("#inlineRadio3").should('be.disabled');

     //shop test case

     cy.get('a[href = "/angularpractice/shop"]').click();

     //select a product
     cy.selectProduct('Nokia')
   
  });
});
