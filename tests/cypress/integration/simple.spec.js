it('renders diagrams', () => {
    cy.visit('/test-diagrams.html')
    cy.wait(2000)
    cy.get('#a-simple-one + .mermaid-diagram').toMatchImageSnapshot()
})
