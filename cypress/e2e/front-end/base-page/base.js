
class basePage {

    static address(url){
        cy.visit(url)
    }

    static setText(element, text){
        cy.get(element).clear().type(text)
    }

    static btnClick(element){
        cy.get(element).click()
    }
}

export default basePage