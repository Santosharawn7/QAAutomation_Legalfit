Feature: Footer inquiry and lead email

Automate Regression Test for sending a Lead Email from a HP Footer  

Scenario: HP Footer Contact Form Submits Lead Email When Client Doesn't Have A Form in The Hero

    Given I logged in on the Render of the Premium Site
    When I fill every contents of form
    | name | email | phNumber | case |
    | John test | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I press Submit button
    Then I should be navigated to lead inquiry page
    And I should see "Your inquiry has been sent." message

Scenario: When The Phone Number Is Missing The HP Hero Contact Form Still Submits Lead Email

    Given You are on a render page and HP hero contact form
    When You fill every contents without phone number on the Hero HP Contact form
    | name | email | case |
    | John test | testersgonnatest@gmail.com | This is a test of the HP Hero Contact Form. |
    And You click on submit button of a HP hero contact form
    Then You are navigated to leads inquiry page
    And You will see the sent inquiry message

Scenario: When The Phone Number Is Missing The HP Footer Contact Form Still Submits Lead Email

    Given You are on a render page and footer contact form
    When You fill every contents without phone number on the footer HP contact form
    | name | email | case |
    | John test | testersgonnatest@gmail.com | This is a test of the HP Footer Contact Form. |
    And You click on submit button of a HP footer contact form
    Then You are navigated to leads inquiry page
    And You will see the sent inquiry message

Scenario: When The Phone Number Is Missing The IP Contact Footer Form Still Submits Email

    Given You are on a interior page render page and footer contact form
    When You scroll and fill every contents without phone number on the footer IP contact form
    | name | email | case |
    | John test | testersgonnatest@gmail.com | This is a test of the IP Contact Form. |
    And You click on submit button of a IP footer contact form
    Then You are navigated to the leads inquiry page
    And You will see the sent inquiry message

Scenario: When The Phone Number Is Missing The PPC Hero Contact Form Still Submits Lead Email

    Given You are on a PPC landing render page and on Hero contact form
    When You scroll and fill every contents without phone number on the footer of PPC landing contact form
    | name | email | case |
    | John test | testersgonnatest@gmail.com | This is a test of the PPC Landing Hero Contact Form. |
    And You click on submit button of a PPC Landing Hero contact form
    Then You are navigated to the leads inquiry page
    And You will see the sent inquiry message

Scenario: When The Phone Number Is Missing The PPC Footer Contact Form Still Submits Lead Email

    Given You are on a PPC Landing page render page and footer contact form
    When You scroll and fill every contents without phone number on the footer PPC Landing contact form
    | name | email | case |
    | John test | testersgonnatest@gmail.com | This is a test of the PPC Landing Footer Contact Form. |
    And You click on submit button of a PPC landing footer contact form
    Then You are navigated to the leads inquiry page
    And You will see the sent inquiry message
