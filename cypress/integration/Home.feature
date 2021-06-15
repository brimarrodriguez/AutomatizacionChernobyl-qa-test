@all @chernobyl-qa-test @BDDSTORY-1
Feature: Home

        @BDDTEST-1
        Scenario Outline: Chernobyl_Home_TC01-Navigate Home Page
            Given Navigates to the home page
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
              And Navigates to menus the page

        Examples:
                  | Title | FirstName | LastName  | Email                | Password   | ConfirmPassword |
                  | Miss  | Brimar    | Rodriguez | brodriguez@prueba.cl | prueba123. | prueba123.      |