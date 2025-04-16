Cypress.Commands.add('cadastro', (
    nome = Cypress.env('nome'),
    email = Cypress.env('email'),
    administrador = Cypress.env('administrador'),
    password = Cypress.env('password'),
  ) => {
    const cadastrar = () => {
      cy.visit('/cadastrarusuarios')
      
      cy.get("[data-testid='nome']").type(nome)
      cy.get("[data-testid='email']").type(email)
      cy.get("[data-testid='password']").type(password, { log: false })
      cy.get("[data-testid='checkbox']").check(administrador)
      cy.get("[data-testid='cadastrar']").click()
    }
  
    cadastrar()
  })

Cypress.Commands.add('login', (
    email = Cypress.env('email'),
    senha = Cypress.env('senha'),
  ) => {
    const login = () => {
      cy.visit('/login')
  
      cy.get("[data-testid='email']").type(email)
      cy.get("[data-testid='senha']").type(senha, { log: false })
      cy.get("[data-testid='entrar']").click()
    }
  
    login()
  })
  