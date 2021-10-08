import '@testing-library/cypress/add-commands';

Cypress.Commands.add('changeMetamaskNetwork', network => {
    return cy.task('changeMetamaskNetwork', network);
  });

  Cypress.Commands.add('getMetamaskWalletAddress', () => {
    cy.task('getMetamaskWalletAddress').then(address => {
      return address;
    });
  });

  Cypress.Commands.add('switchToCypressWindow', () => {
    return cy.task('switchToCypressWindow');
  });

  Cypress.Commands.add('switchToMetamaskWindow', () => {
    return cy.task('switchToMetamaskWindow');
  });

  Cypress.Commands.add('confirmMetamaskSignatureRequest', () => {
    return cy.task('confirmMetamaskSignatureRequest');
  });

  Cypress.Commands.add('rejectMetamaskSignatureRequest', () => {
    return cy.task('rejectMetamaskSignatureRequest');
  });

  Cypress.Commands.add('acceptMetamaskAccess', () => {
    return cy.task('acceptMetamaskAccess');
  });

  Cypress.Commands.add('confirmMetamaskTransaction', () => {
    return cy.task('confirmMetamaskTransaction');
  });

  Cypress.Commands.add('rejectMetamaskTransaction', () => {
    return cy.task('rejectMetamaskTransaction');
  });

  Cypress.Commands.add(
    'setupMetamask',
    (secretWords, network, password = 'Tester@1234') => {
      return cy.task('setupMetamask', { secretWords, network, password });
    },
  );

  Cypress.Commands.add('getNetwork', () => {
    return cy.task('getNetwork');
  });
