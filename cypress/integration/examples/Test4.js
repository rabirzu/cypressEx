describe("Section 7", function () {
  it("Section 7 exercises", function () {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();

    cy.get("[value='Confirm']").click();

    //window:alert
    cy.on("window:alert",(str)=>{
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
      //window:confirm
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    //child tab
    cy.get("#opentab").invoke("removeAttr","target").click();

    //check the url
    cy.url().should('include','qaclickacademy');

    //navigate
    cy.go("back");
  });
});
