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

    cy.get("nav");
    cy.get("header");
    cy.wait(5000);
  });

  it("should not allow user to log in with invalid credentials", () => {
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
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");

    cy.wait(2000);
  }); 

  it("should be able to open register page", () => {
    cy.visit("https://client-programming.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("div").contains("Create an account!").click();

    cy.url().should("include", "/register");

      cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Andi")
      .type("Abdul")
      .should("have.value", "Abdul");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "***********")
      .type("")
      .should("have.value", "123456");
  })
});