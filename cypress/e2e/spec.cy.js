// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Homepage', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/') // Navega até a página inicial
    cy.contains('Welcome to Next.js!') // Verifica se a mensagem de boas-vindas é exibida
    cy.contains('Documentation') // Clica no link de documentação
    cy.contains('Examples') // Clica no link de exemplos
    cy.get('[data-testcy="logo-vercel"]').should('be.visible');
  })
})
