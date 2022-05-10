Feature: Footer inquiry and lead email

Automate Regression Test for sending a Lead Email from a HP Footer  

Scenario: HP Footer Contact Form Submits Lead Email When Client Doesn't Have A Form in The Hero

    Given I logged in on the Render of the Premium Site
    When I Enter the Name, Phone number, Email and Case
    And I press Submit button
    Then I should be navigated to lead inquiry page
    And I should see "Your inquiry has been sent." message