export default class Login {
        //locators
        inputemail
        inputpassword
        btn
        alert
        alertrequired
        ForgotPassword
        submit

        constructor(){
            this.inputemail = '[name="email"]'
            this.inputpassword = '[name="password"]'
            this.btn = '.btn.btn-primary'
            this.alert = '.alert.alert-dismissable.alert.alert-danger'
            this.alertrequired= '.invalid-feedback'
            this.ForgotPassword = '.btn.btn-link.pr-0'
            this.submit = '.btn.btn-primary'

        }
} 