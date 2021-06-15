@all @chernobyl-qa-test @BDDSTORY-1
Feature: Login

@BDDTEST-1
        Scenario Outline: Chernobyl_Login_TC01-Correct login
            Given The user navigates to the page
              And the user press button
             Then enter "<Title>"
             Then enter "<FirstName>" and "<LastName>"
             Then write "<Email>"
              And the user enter "<Password>" and "<ConfirmPassword>"
             When click on "Accept Terms & Conditions"
              And press button register
              And Show success message
              And The user enter correct "<Email>" and "<Password>"
             When The user clicks button Login
             Then The user logs in correctly

        Examples:
                  | Title | FirstName | LastName  | Email                     | Password   | ConfirmPassword |
                  | Miss  | Brimar    | Rodriguez | brodriguez@prueba.cl | prueba123. | prueba123.      |

@BDDTEST-2
        Scenario Outline: Chernobyl_Login_TC02-Incorrect login
            Given The user navigates to the page
              And The user enter correct "<email>" and "<password>"
             When The user clicks button Login
             Then The user logs in incorrectly

        Examples:
                  | email                        | password   |
                  | brrodriguez123@gmail.com | prueba123. |

@BDDTEST-3
        Scenario Outline: Chernobyl_Login_TC03-Login without email
            Given The user navigates to the page
              And The user enter correct "<password>"
             When The user clicks button Login
             Then Alert email is required

        Examples:
                  | password   |
                  | prueba123. |

@BDDTEST-4
        Scenario Outline: Chernobyl_Login_TC04-Login without password
            Given The user navigates to the page
              And User enter correct "<email>"
             When The user clicks button Login
             Then Alert password is required

        Examples:
                  | email                     |
                  | brodriguez@prueba.cl |

@BDDTEST-5
        Scenario Outline: Chernobyl_Login_TC05-Forgot Password
            Given The user navigates to the page
             When The user clicks button Forgot Password
              And Insert "<email>"

        Examples:
                  | email                      |
                  | brodriguez@prueba.cl |

@BDDTEST-6
        Scenario Outline: Chernobyl_Login_TC06-Validate email format
            Given The user navigates to the page
              And The user enter correct "<email>" and "<password>"
             Then Alert email format

        Examples:
                  | email                     | password |
                  | brrodriguez1gmail.com | test123  |
                  | @gmail.com                | test123  |
                  | 123.com                   | test123  |
                  | aa12345gmail.com          | test123  |
                  | pruebas@gmail.            | test123  |