describe('Cadastro', () => {
    it('Sucesso', () => {
      cy.on('window:alert', (msg) => {
        expect(msg).to.contain('Cadastro realizado com sucesso')
      })
  
      cy.cadastro()
  
    })
  })

describe('Login', () => {
    it('Realizar login com sucesso', () => {
      cy.login()
      cy.url().should('include', '/admin/home')
    })

    it('Deve exibir erro de email e/ou senha inválidos', () => {
        const emailInvalido = 'alessa.neves21@invalido.com'
        const senhaCorreta = Cypress.env('senha')
    
        cy.visit('/login')
    
        cy.get("[data-testid='email']").type(emailInvalido)
        cy.get("[data-testid='senha']").type(senhaCorreta, { log: false })
        cy.get("[data-testid='entrar']").click()
    
        cy.on('window:alert', (msg) => {
          expect(msg).to.contain('Email e/ou senha inválidos')
        })
    
        cy.url().should('include', '/login')
      })
    })