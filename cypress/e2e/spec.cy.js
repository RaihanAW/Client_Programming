describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("https://client-programming.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.contains("Overview").should("exist");

    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transactions").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible");
    cy.wait(5000);
  });

});