Feature: Lead Email Failures

Automate Regression Test for sending a Lead Email from a HP Footer  

Scenario: Contact Form in the Hero Won't Submit If The Name, Email, or Description Is Missing

    Given I logged in on the Render version of the Premium Site
    When I fill every contents of form leaving name field empty
    | email | phone | case |
    | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I press Hero Submit button
    Then I should see "Please fill out this field." message under Name field.

Scenario: Contact Form in the Footer Won't Submit If The Name, Email, or Description Is Missing

    Given I logged in on the Render version of the Premium Site and scroll to Footer Contact Form
    When I fill every contents of form leaving name field empty on Footer Contact Form
    | email | phone | case |
    | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I press Footer Submit button
    Then I should see "Please fill out this field." alert message under Name field.

Scenario: IP Contact Form Won't Submit If The Name, Email, or Description Is Missing

    Given I logged in on the Render version of the Interior page of Premium Site
    When I fill every contents of form leaving name field empty on Interior Page
    | email | phone | case |
    | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I press Submit button on Interior page contact form
    Then I should see "Please fill out this field." message under Name field of Interior page.

Scenario: Contact Page Form Won't Submit If The Name, Email, or Description Is Missing

    Given I logged in on the Render version of the Premium Site to test every fail scenario for contact form
    When I fill every contents of form leaving name field empty to verify the case of Name
    | email | phone | case |
    | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I press Hero Submit button of that form
    Then I should see "Please fill out this field." message under Name field of that form.
    When I clear all the field and enter every details except email
    | name | phone | case |
    | John Test | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I click the Submit button once again
    Then I should see another alert Message.
    When I clear all the field and enter every details except Description
    | name | email | phone |
    | John Test | testersgonnatest@gmail.com | 816-111-1111 |
    And I click the Submit Button again
    Then I should see another alert Message and form wont submit
    When I clear all the field and click the submit button.
    Then I will only see alert message

Scenario: PPC Hero Contact Form Won't Submit If The Name, Email, or Description Is Missing

    Given I logged in on the Render version of the Premium Site having PPC Landing page and scroll to the Header contact form
    When I fill every contents of form leaving name field empty on PPC landing Header form
    | email | phone | case |
    | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I press Hero Submit button of the PPC Landing page
    Then I should see "Please fill out this field." message under Name field of the PPC landing page

Scenario: PPC Footer Contact Form Won't Submit If The Name, Email, or Description Is Missing

    Given I logged in on the Render version of the Premium Site of the PPC landing page and scroll to the footer contact form
    When I fill every contents of form leaving name field empty on PPC Landing Footer form
    | email | phone | case |
    | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the inquiry Contact Form. |
    And I press Hero Submit button of the footer PPC landing form
    Then I should see "Please fill out this field." message under Name field of PPC landing footer form.