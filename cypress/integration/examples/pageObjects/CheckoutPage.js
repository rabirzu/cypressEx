class CheckoutPage {
  getTextBox() {
    return cy.get("#country");
  }
  getDropDownOption(element) {
    return  cy.get(".suggestions>ul>li>a").contains(element);
  }
}

export default CheckoutPage;
