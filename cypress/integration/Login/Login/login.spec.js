import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import Login from   "../../../../cypress/support/Pages/Login"
import Register from "../../..//support/Pages/Register"

const register = new Register();
const login = new Login();

Given ('The user navigates to the page',() => {
    cy.visit('https://sura-qa-chernobyl-test.stackblitz.io/account/login');
    cy.wait(10000);
    cy.contains('Run this project').click();
})


And ('The user enter correct {string} and {string}',(Email,Password) => {
    cy.get(login.inputemail).type(Email);
    cy.get(login.inputpassword).type(Password);
})

And ('The user enter correct {string}',(Password) => {
    cy.get(login.inputemail).click();
    cy.get(login.inputpassword).type(Password);
})

And ('User enter correct {string}',(Email) => {
    cy.get(login.inputpassword).click();
    cy.get(login.inputemail).type(Email);
})

When ('The user clicks button Login',() =>{
    cy.get(login.btn).click();
})

Then ('The user logs in correctly',() =>{
    cy.get('.navbar').should('be.visible')
})

Then ('The user logs in incorrectly',() =>{
    cy.get(login.alert).should('contain.text','Email or password is incorrect');
})

Then ('Alert email is required',() =>{
    cy.get(login.alertrequired).should('contain.text','Email is required');
})

Then ('Alert password is required',() =>{
    cy.get(login.alertrequired).should('contain.text','Password is required');
})

When ('The user clicks button Forgot Password',() => {
cy.get(login.ForgotPassword).click();
})

And ('Insert {string}', (Email) =>{
    cy.get(login.inputemail).type(Email);
    cy.get(login.submit).click();
})

Then ('Alert email format',() =>{
    cy.get('.invalid-feedback').should('contain.text','Email is invalid');
})

//REGISTER
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
    cy.wait(10000);
})

And ('press button cancel', () => {
    cy.get(register.btnCancel).click();
})

And ('Show alert message',() => {
    cy.get('.alert').should('contain.text','Email Already Registered');
})