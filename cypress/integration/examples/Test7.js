/// <reference types= "Cypress" />
describe("Section 8", function () {
    
  it("Section 8 exercises", function () {
    // cy.visit(Cypress.env('url')+"/AutomationPractice/");
    cy.visit(Cypress.env('url') + "/AutomationPractice");
    //button link
    //child window
    //child tab
    //1. remove target attribute

    //2. grab href attribute to hit with cy.visit (url)

    //("label[onclick*=fno]").click() 

    cy.get("#opentab").then(function (el) {
      const url =el.prop('href');

      cy.visit(url);
      cy.origin(url, () => {
        cy.get('div.sub-menu-bar a[href*="about"]').click();
      });
    });
  });
});
