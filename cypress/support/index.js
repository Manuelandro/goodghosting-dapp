import './commands';
import { configure } from '@testing-library/cypress';

configure({ testIdAttribute: 'data-testid' });


before(() => {
    cy.setupMetamask('word1, word2, etc..', 'mainnet', 'password');
  });