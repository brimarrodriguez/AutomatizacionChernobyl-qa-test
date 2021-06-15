import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import Register from "../../support/Pages/Register"

const register = new Register();

Given('The user navigates to the page',() =>{
    cy.visit('https://sura-qa-chernobyl-test.stackblitz.io/account/login');
    cy.wait(10000);
    cy.contains('Run this project').click();
})

And ('the user press button', () =>{
    cy.get(register.btnreg).click();
})

Then ('enter {string}',(Title) => {
    cy.get(register.seltitle).select(Title).should('have.value', Title)
} )

Then ('enter {string} and {string}', (FirstName, LastName) =>{
    cy.get(register.firstname).type(FirstName);
    cy.get(register.lastname).type(LastName);
})

Then ('write {string}',(Email) =>{
    cy.get(register.campoemail).type(Email);
})

And ('the user enter {string} and {string}',(Password,ConfirmPassword) =>{
    cy.get(register.password).type(Password);
    cy.get(register.confirmpass).type(ConfirmPassword);
})

When ('click on "Accept Terms & Conditions"', () =>{
    cy.get(register.btnAccep).click();
})

And ('press button register',() =>{
    cy.get(register.buttonRegister).click();    
})

And ('Show success message',() => {
    cy.get('.alert').should('contain.text','Verification Email');
    cy.get(':nth-child(4) > a').click();
})

And ('press button cancel', () => {
    cy.get(register.btnCancel).click();
})

And ('Show alert message',() => {
    cy.get('.alert').should('contain.text','Email Already Registered');
})