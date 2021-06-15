import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import Home from "../../support/Pages/Home"
import Login from "../../support/Pages/Login"
import Register from "../../support/Pages/Register"

const home = new Home();
const login = new Login();
const register = new Register();

Given ('Navigates to the home page',() => {
    cy.visit('https://sura-qa-chernobyl-test.stackblitz.io/');
    cy.wait(10000);
    cy.contains('Run this project').click();
})
And ('the user press button', () =>{
    cy.get(register.btnreg).click();
})

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

And ('Show success message',() => {
    cy.get('.alert').should('contain.text','Verification Email');
    cy.get(':nth-child(4) > a').click();
    cy.wait(10000);
})

And ('The user enter correct {string} and {string}',(Email,Password) => {
    cy.wait(10000);
    cy.get(login.inputemail).type(Email);
    cy.get(login.inputpassword).type(Password);
})

When ('The user clicks button Login',() =>{
    cy.get(login.btn).click();
})

Then ('The user logs in correctly',() =>{
    cy.get('.navbar').should('be.visible')
})

And ('Navigates to menus the page',() => {
    cy.get('p').should('contain.text',"You're logged in with React & JWT!!");
    cy.get(home.profilemenu).click();
    cy.wait(500);
    cy.get('.navbar-nav > [href="/"]').click();
    cy.wait(500);
    cy.get('[href="/admin"]').click();
    cy.wait(500);
    cy.get('.navbar-nav > :nth-child(4)').click();
})