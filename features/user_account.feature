Feature: User account
  As user I should be able to sign in and sign up

  Background:
    Given I am on "Home Page" page
    Then Page title should be "Cameo - Video Editor & Movie Maker for iOS"

  Scenario: Login positive
    When I click on "Login"
    And I wait until element "Form in Sign" is visible
    And I type "qwerty12345678910@tut.by" in "Email in Sign"
    And I type "1234test" in "Login Password in Sign"
    And I click on "Sign By Email in Sign"
    And I wait until element "Profile" is visible
    And I click on "Profile"
    Then I should be on "User Page" page
    And Page title should be "Test on Vimeo"
    When I move mouse to "Profile"
    And I wait until element "Logout in Profile Menu" is visible
    And I move mouse to "Logout in Profile Menu"
    And I click on "Logout in Profile Menu"
    Then Page title should be "Vimeo | The high-quality home for video hosting and watching"

  Scenario: Login negative: incorrect password
    When I click on "Login"
    And I wait until element "Form in Sign" is visible
    And I type "qwerty12345678910@tut.by" in "Email in Sign"
    And I type "1234test1234" in "Login Password in Sign"
    And I click on "Sign By Email in Sign"
    And I wait until element "Warning Notification in Sign" is visible
    Then Text of element "Warning Notification in Sign" should be "Email and password do not match"
    But Page title should be "Cameo - Video Editor & Movie Maker for iOS"