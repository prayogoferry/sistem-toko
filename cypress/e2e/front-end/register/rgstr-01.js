import basePage from "../base-page/base"
const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")

let url = 'https://sistemtoko.com/'
let register_btn = ':nth-child(3) > a > #login'
let email_element = "//input[@name='email']"
let emailText = 'mail@mail.com'
let psswrd_element = ':nth-child(2) > .form-control'
let passwordText = '1234567890'
let repasswrd_element = ':nth-child(3) > .form-control'
let fullname_element = ':nth-child(4) > .form-control'
let nameText = 'bukan bambank'
let phone_element = ':nth-child(5) > .form-control'
let phoneNumber = '09838848598'
let codevoucher_element = ':nth-child(6) > .form-control'
let codevoucher = 'kjskduhwke88'
let rgstr_btn = ''

Given('I open Register page', ()=>{
    basePage.address(url)
})

When('Click Register button', ()=>{
    basePage.btnClick(register_btn)
})

Then('Success Register', ()=>{
    cy.get(':nth-child(1) > .form-control').type(emailText)
    // basePage.setText(email_element, emailText)
    // basePage.setText(psswrd_element, passwordText)
    // basePage.setText(repasswrd_element, passwordText)
    // basePage.setText(fullname_element, nameText)
    // basePage.setText(phone_element, phoneNumber)
    // basePage.setText(codevoucher_element, codevoucher)
    basePage.btnClick(rgstr_btn)

})