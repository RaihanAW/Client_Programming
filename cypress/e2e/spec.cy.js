describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("https://client-programming.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214017@mhs.dinus.ac.id")
      .should("have.value", "111202214017@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.contains("Overview").should("exist");
    cy.wait(5000);
  });

});
