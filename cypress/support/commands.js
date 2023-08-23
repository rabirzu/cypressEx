// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//  Cypress.Commands.add('selectProduct', (productName) => {

//     cy.get("h4.card-title").each(($el, index, $list) => {
//       if ($el.text().includes(productName)) {
//         cy.get("button.btn.btn-info").eq(index).click();
//       }
//     });

//Select product command
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".inventory_item_description").each(($el, index) => {
    if ($el.text().includes(productName)) {
      cy.get('.btn').eq(index).click();
    }
  });
});

//Check products are in the cart
// Cypress.Commands.add("checkCart",(productName))

//   });
// Cypress.Commands.add('LoginAPI',()=>{
//   cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
//     userEmail: "ralucacazacu96@gmail.com",
//     userPassword: "Lollipop0!",
//   }).then(function(respose){
//     expect(reponse.status).to.eq(200)
//     Cypress.env('token',respose.body.token)
//   });
// })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
