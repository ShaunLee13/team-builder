/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Inputs functioning', () => {
    it('Can Navigate to Page', () => {
        cy.visit('http://localhost:3000/')
    })

    it('Can Input a Member Name',() => {
        cy.get('input[name=name]')
        .type('Jim Bob')
        .should('have.value', 'Jim Bob')
    })
    
    it('Can input a member Email', () => {
        cy.get('input[name=email]')
        .type('bobert@bob.com')
        .should('have.value', 'bobert@bob.com')
    })

    it('should select Role', () => {
        cy.get('select[name=role]')
        .select('Front-End')
        .should('have.value', 'Front-End Engineer')
    })

    it('Can Submit Form', () => {
        cy.get('button.SubmitButton')
        .click()
    })
})