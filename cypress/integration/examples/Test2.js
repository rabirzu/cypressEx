// describe("My Second Test Suite", function () {
//   it("My Second case", function () {
//     //rahul shatty site is down
//     // cy.visit("https://automationbookstore.dev/");
//     // cy.wait(2000);
//     //  cy.get("#searchBar").type("au");
//     //  cy.wait(2000);
//     //  cy.get(".ui-li-has-thumb:visible").should("have.length", 3);

//     // //Parent Child chaining
//     // cy.get(".product").find(".product").should("have.length",4)

//     cy.visit("https://www.saucedemo.com/v1/");
//     cy.get("#user-name").type("standard_user");
//     cy.get("#password").type("secret_sauce");

//     cy.get("#login-button").click();


//     //tap on 2nd add to card button

//     // cy.get("#inventory_container").find(".btn_inventory").eq(0).click();

//     //grabbing the txt for validation

//     cy.get("#inventory_container")
//       .find(".inventory_item")
//       .each(($el, index, $list) => {
//         const textElement = $el.find(".inventory_item_name").text();

//         if (textElement.includes("Light")) {
//           cy.wrap($el).find(".btn_inventory").click();
//         }
//       });

//     //click on the card
//     cy.get('svg[data-icon="shopping-cart"]').click();

//     //click on checkout 

//     cy.get(".btn_action").click();
//   });

// });
