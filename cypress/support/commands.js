Cypress.Commands.add('acceptMetamaskAccess', () => {
  return cy.task('acceptMetamaskAccess');
});

Cypress.Commands.add('confirmMetamaskTransaction', () => {
  return cy.task('confirmMetamaskTransaction');
});
Cypress.Commands.add(
  'setupMetamask',
  (secretWords, network, password) => {
    return cy.task('setupMetamask', { secretWords, network, password });
  },
);