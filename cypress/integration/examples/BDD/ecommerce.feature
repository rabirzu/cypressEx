Feature: End to End Ecommerce validation

    application Regression
    @Regression
    Scenario: Ecommerce products delivery
        Given I open Ecommerce Page
        When I add items to Cart
        And Validation the total prices
        Then Select the country submit and verify Thank you

    @Smoke
    Scenario:Filling the form to shop
        Given I open Ecommerce Page
        When I fill the form details
        |name |gender | 
        |bobz  |Male  |
        Then Validate the forms behavior
        And Select the Shop Page