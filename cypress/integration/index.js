describe('User can load page', () => {
    before(() => {
      cy.setupMetamask();
      cy.visit('/')
    });

    it('is expected to display the app correctly', () => {
      cy.get('.App').should('exist')
    });

    it('should accept the metamask connection with the dap', () => {
      cy.acceptMetamaskAccess()
      cy.get("[data-testid=joinbutt]").should('exist')
    })


    it('should click on join game and accept the contract', () => {
      cy.get('.join').click()
      cy.confirmMetamaskTransaction()
      cy.get("[data-testid=joining-screen]").should('exist')
    })

  })