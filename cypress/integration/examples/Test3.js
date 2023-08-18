// describe("Automation Practice", function () {
//   it("Automation practice", function () {
//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//     //check the checkbox and verify that checkbox is checked
//     //verify checking the correct checkbox

//     cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1");

//     //uncheck
//     cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

//     //check option2 and option 3 the checkbox

//     cy.get('input[type="checkbox"]').check(['option2','option3'])

//     //static dropdwon

//     cy.get('select').select('option2').should("have.value","option2")

//     //dinamic dropdown
//     cy.get("#autocomplete").type("ind")

//     cy.get(".ui-menu-item div").each(($el, index, $list)=>{
//         if($el.text()==="India"){
//             $el.click()
//         }
//     })

//     cy.get("#autocomplete").should("have.value","India")

//     //handling visibile and visible elements using assertions
    
//     cy.get("#displayed-text").should("be.visible");
//     //select hide button
//     cy.get("#hide-textbox").click();
//     cy.get("#displayed-text").should("not.be.visible")

//     //radio buttons

//     cy.get('input[value="radio2"]').check().should("be.checked")

//   });
// });
