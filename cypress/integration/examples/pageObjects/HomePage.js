class HomePage {
  getEditBox() {
    return cy.get(":nth-child(1) > .form-control");
  }
  getTwoWayDataBinding() {
    return cy.get(":nth-child(4) > .ng-pristine");
  }
  getGender() {
    return cy.get("select");
  }
  getEntrepeneaur() {
    return cy.get("#inlineRadio3");
  }
  getShopTab() {
    return cy.get('a[href = "/angularpractice/shop"]');
  }
}

export default HomePage;
