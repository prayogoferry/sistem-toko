
Cypress.Commands.add("address", (url)=>{
cy.visit(url)
})

Cypress.Commands.add('setText', (element, text)=>{
    cy.get(element).clear().type(text)
})

Cypress.Commands.add('button', (element)=>{
    cy.contains(element).click()
})