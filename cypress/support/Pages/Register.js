export default class Register {
    //locators
    btnreg
    seltitle
    firstname
    lastname
    campoemail
    password
    confirmpass
    btnAccep
    buttonRegister
    btnCancel
    message
    verificationemail

    constructor(){
        this.btnreg = '[href="/account/register"]'
        this.seltitle = '[name="title"]'
        this.firstname = '[name="firstName"]'
        this.lastname =  '[name="lastName"]' 
        this.campoemail = '[name="email"]' 
        this.password = '[name="password"]' 
        this.confirmpass = '[name="confirmPassword"]' 
        this.btnAccep = '[name="acceptTerms"]'
        this.buttonRegister = '.btn.btn-primary'
        this.btnCancel = '[href="/account/login"]'
        this.message = '.alert alert-dismissable alert alert-info'
        this.verificationemail = '[href="https://sura-qa-chernobyl-test.stackblitz.io/account/verify-email?token=1623725392744"]'
    }
} 