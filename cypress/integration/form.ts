describe("test driven frontend", function() {
  it("should visit page with form", function() {
    cy.visit("http://localhost:1234")
  })
  it("should get the form", function() {
    cy.get("form")
  })
  it("should change the status of the button based on value of the email input", function() {
    const submit = cy.get('input[type="submit"]')

    submit.should("be.disabled")

    cy.get('input[type="email"]')
      .type("fake@email.com")
      .should("have.value", "fake@email.com")

    submit.should("be.enabled")
  })
  it("should change the state of the button to loading when the form is submitted", () => {
    cy.get("form").submit()

    expect(
      cy.get('input[type="submit"]').then(button => {
        expect(button.css("cursor")).to.equal("wait")
      }),
    )
  })
})
