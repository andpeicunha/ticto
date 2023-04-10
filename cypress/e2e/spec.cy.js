describe('Homepage', () => {
  it('Novo Cadastro', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="title-table"]').should('exist');

    cy.get('[data-testid="botao-nova-transacao"]').should('exist');
    cy.get('[data-testid="botao-nova-transacao"]').click();
    cy.get('[data-testid="title-form-cadastro"]').should('exist');

    cy.get('[data-testid="input-descricao"]').type('Teste ##Cypress##');
    cy.get('[data-testid="input-valor"]').type('5000,00');
    cy.get('[data-testid="bt-tipo-entrada"]').click();
    cy.get('[data-testid="input-categoria"]').type('Entrada Cypress');
    cy.get('[data-testid="bt-cadastrar"]').click();

    cy.wait(3000);
    cy.contains('Teste ##Cypress##').should('exist');

    cy.contains('Teste ##Cypress##')
      .parent()
      .find('[data-testid="excluir"]')
      .click()
    cy.contains('Teste ##Cypress##').should('not.exist');
  })
  it('Fechar Janela Nova Transação', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-testid="botao-nova-transacao"]').click();
    cy.get('[data-testid="title-form-cadastro"]').should('exist');

    cy.get('[data-testid="bt-fechar"]').click();
  })
})
