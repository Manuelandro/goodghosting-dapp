describe('My First Test', () => {
    before(() => {
        cy.setupMetamask();
      });

    it('Visits the Kitchen Sink', () => {
        cy.visit('')
        cy.get('a').should('have.attr', 'href', 'https://metamask.io/')
    })

})