@all @chernobyl-qa-test @BDDSTORY-1
Feature: Register

        @BDDTEST-1
        Scenario Outline: Chernobyl_Register_TC01-The user registers on the page
            Given The user navigates to the page
              And the user press button
             Then enter "<Title>"
             Then enter "<FirstName>" and "<LastName>"
             Then write "<Email>"
              And the user enter "<Password>" and "<ConfirmPassword>"
             When click on "Accept Terms & Conditions"
              And press button register
              And Show success message

        Examples:
                  | Title | FirstName | LastName  | Email                | Password   | ConfirmPassword |
                  | Miss  | Brimar    | Rodriguez | brodriguez@prueba.cl | prueba123. | prueba123.      |

        @BDDTEST-2
        Scenario Outline: Chernobyl_Register_TC02-Email Already Registered
            Given The user navigates to the page
              And the user press button
             Then enter "<Title>"
             Then enter "<FirstName>" and "<LastName>"
             Then write "<Email>"
              And the user enter "<Password>" and "<ConfirmPassword>"
             When click on "Accept Terms & Conditions"
              And press button register
              # And Show alert message

        Examples:
                  | Title | FirstName | LastName  | Email                | Password   | ConfirmPassword |
                  | Miss  | Brimar    | Rodriguez | brodriguez@prueba.cl | prueba123. | prueba123.      |

@BDDTEST-3
        Scenario Outline: Chernobyl_Register_TC03-the user cancel registration
            Given The user navigates to the page
              And the user press button
             Then enter "<Title>"
             Then enter "<FirstName>" and "<LastName>"
             Then write "<Email>"
              And the user enter "<Password>" and "<ConfirmPassword>"
             When click on "Accept Terms & Conditions"
              And press button cancel

        Examples:
                  | Title | FirstName | LastName | Email                 | Password   | ConfirmPassword |
                  | Mr    | Pedro     | Perez    | pedroperez@prueba.com | prueba123. | prueba123.      |