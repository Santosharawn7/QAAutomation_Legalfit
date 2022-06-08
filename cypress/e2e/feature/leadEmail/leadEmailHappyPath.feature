Feature: Lead Emails Happy Path

Automate Happy Path Contact form Submission 

Scenario: Hero Contact Form on a HP Submits Lead Email

    Given I logged in on the Render mode of the Premium Site having Hero Contact form
    When I fill every details of form
    | name | email | phone | case |
    | John test | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I press Submit button on that hero block
    Then I should be navigated to lead inquiry page
    And I should see "Your inquiry has been sent." message

Scenario: HP Footer Contact Form Submits Lead Email When Client Has Form in The Hero

    Given You are on a render page of the home page with Hero contact form and footer contact form
    When You fill every details on the Footer contact form after scrolling down
    | name | email | phone | case |
    | John test | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the HP Footer Contact Form. |
    And You click on submit button of a HP footer contact form with Hero Contact from 
    Then You are navigated to leads inquiry page
    And You will see the sent inquiry message

Scenario: PPC Hero Contact Form Submits Lead Email

    Given You are on a PPC landing render page and on Hero contact form
    When I fill every contents on the Header of PPC landing contact form
    | name | email | phone | case |
    | John test | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the PPC Landing Hero Contact Form. |
    And You click on submit button of a PPC Landing Hero contact form
    Then You are navigated to the leads inquiry page
    And You will see the sent inquiry message

Scenario: PPC Footer Contact Form Submits Lead Email

    Given You are on a PPC Landing page render page and footer contact form
    When You scroll and fill every contents on the footer PPC Landing contact form
    | name | email | phone | case |
    | John test | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the PPC Landing Footer Contact Form. |
    And You click on submit button of a PPC landing footer contact form
    Then You are navigated to the leads inquiry page
    And You will see the sent inquiry message

Scenario: HP Footer Contact Form Submits Lead Email When Client Doesn't Have A Form in The Hero

    Given I logged in on the Render mode of the Premium Site that doesn't have a Hero Contact form
    When I fill every details of form on the contact form
    | name | email | phone | case |
    | John test | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I press Submit button to submit all the details
    Then I should be navigated to lead inquiry page
    And I should see "Your inquiry has been sent." message

Scenario: IP Contact Footer Submits Email When Client Doesnt Have A Form in The Hero

    Given You are on a interior page render page that doesnt have a form in hero
    When You scroll and fill every contents without phone number on the footer IP contact form
    | name | email | phone | case |
    | John test | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the IP Contact Form. |
    And You click on submit button of a IP footer contact form
    Then You are navigated to the leads inquiry page
    And You will see the sent inquiry message

Scenario: Contact Page Form Submits Email Lead When Client Doesn't Have A Form in The Hero

    Given You are on a contact page without a Hero contact form
    When I fill every contents on the contact form of contact page
    | name | email | phone | case |
    | John test | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the IP Contact Form. |
    And You click on submit button on a contact page without Hero contact form
    Then You are navigated to the leads inquiry page
    And You will see the sent inquiry message