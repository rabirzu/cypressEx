# Using the  https://www.saucedemo.com/, combine fixtures, commands and assertions into the feature file and create scenarios based on the below:
#Resolved. baseURL changed in cypress.config.js

# Also define all the steps written here in the step definitions file - created assessment1-2StepDef.js in assessment folder
# for this feature use the  following test website --> https://www.saucedemo.com/ --> you can parametrie the baseURL in the cypress.json file -
# created a js class in pageObjects for the locators


# Scenario 1 for Login

Feature: End to End Ecommerce Validation

    Scenario: Login flow
        Given I access the page
        When I enter login credentials
            | user-name     | password     |
            | standard_user | secret_sauce |
        When I click on Login button
        Then I am redirected to Products page

# Scenario 2 Adding products to cart

    Scenario: Adding products to cart
        Given I access the page
        When I enter login credentials
            | user-name     | password     |
            | standard_user | secret_sauce |
        When I click on Login button
        When I am on Products page
        When I add more products to cart
            | products                |
            | Sauce Labs Bolt T-Shirt |
        Then I click on Cart button
        When I check if the products selected are in Cart
            | checkcart               |
            | Sauce Labs Bolt T-Shirt |
         


#Scenario 3 Adding multiple products to cart

    Scenario: Adding multiple products to cart
        Given I access the page
        When I enter login credentials
            | user-name     | password     |
            | standard_user | secret_sauce |
        When I click on Login button
        When I am on Products page
        When I add more products to cart
            |products|
            | Sauce Labs Bike Light   |
            | Sauce Labs Bolt T-Shirt |
        Then I click on Cart button
        When I check if the products selected are in Cart
            | checkcart               |
            | Sauce Labs Bike Light   |
            | Sauce Labs Bolt T-Shirt |


# # Scenario 4 Adding multiple products to cart and removing them
    Scenario: Adding multiple products to cart and removing them
        Given I access the page
        When I enter login credentials
            | user-name     | password     |
            | standard_user | secret_sauce |
        When I click on Login button
        When I am on Products page
        When I add more products to cart
            | products                |
            | Sauce Labs Bike Light   |
            | Sauce Labs Bolt T-Shirt |
        Then I remove the Products added before

# # Scenario 5 Adding multiple products to cart and removing them and then adding them back

    Scenario: Adding multiple products to cart and removing them and then adding them back
        Given I access the page
        When I enter login credentials
            | user-name     | password     |
            | standard_user | secret_sauce |
        When I click on Login button
        When I am on Products page
        When I add more products to cart
            | products                |
            | Sauce Labs Bike Light   |
            | Sauce Labs Bolt T-Shirt |
        Then I remove the Products added before
        When I am on Products page
        When I add more products to cart
            | products                |
            | Sauce Labs Bike Light   |
            | Sauce Labs Bolt T-Shirt |


# # Scenario 6 Adding multiple products to cart and removing them and then adding them back and then checking out

    Scenario: Adding multiple products to cart and removing them and then adding them back and then checking out
        Given I access the page
        When I enter login credentials
            | user-name     | password     |
            | standard_user | secret_sauce |
        When I click on Login button
        When I am on Products page
        When I add more products to cart
            | products                |
            | Sauce Labs Bike Light   |
            | Sauce Labs Bolt T-Shirt |
        Then I remove the Products added before
        When I add more products to cart
            | products                |
            | Sauce Labs Bike Light   |
            | Sauce Labs Bolt T-Shirt |
        Then I click on Cart button
        When I check if the products selected are in Cart
            | checkcart               |
            | Sauce Labs Bolt T-Shirt |

        Then I click on checkout button

# # Scenario 7 Adding multiple products and then checking out the cart

    Scenario: Adding multiple products and then checking out the cart
        Given I access the page
        When I enter login credentials
            | user-name     | password     |
            | standard_user | secret_sauce |
        When I click on Login button
        When I am on Products page
        When I add more products to cart
            | products                |
            | Sauce Labs Bike Light   |
            | Sauce Labs Bolt T-Shirt |
        Then I click on Cart button
        When I check if the products selected are in Cart
            | checkcart               |
            | Sauce Labs Bolt T-Shirt |
        Then I click on checkout button