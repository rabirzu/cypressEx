class CheckoutPage {
  getTextBox() {
    return cy.get("#country");
  }
  getDropDownOption(element) {
    return cy.get(".suggestions>ul>li>a").contains(element);
  }
  getCheckbox() {
    return cy.get("#checkbox2");
  }
  getClickPurchase() {
    return cy.get('input[type="submit"]');
  }
  getAlert(){
   return cy.get(".alert");
  }
}

export default CheckoutPage;
