describe("My First Test", function() {
  it("Visits the Kitchen Sink", function() {
    cy.visit("http://localhost:1234");

    const form = cy.get("form");

    const submit = cy.get('input[type="submit"]');

    submit.should("be.disabled");

    cy.get('input[type="email"]')
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    submit.should("be.enabled");

    cy.get("form").submit();

    // expect(submit.style.cursor).to.equal("wait");
  });
});
