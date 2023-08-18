class LogInPage {
  getUserNameBox() {
    return cy.get("#user-name");
  }
  getPasswordBox() {
    return cy.get("#password"); 
  }
  getLoginButton() {
    return cy.get("#login-button");
  }
  getLogo() {
    return cy.get(".login_logo");
  }
}

export default LogInPage;
