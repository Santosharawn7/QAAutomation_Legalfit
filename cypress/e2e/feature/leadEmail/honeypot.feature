Feature: Honeypot testing

Automate bot testing

Scenario: Automate Lead Email Honeypot testing
Given a bot navigates to the Homepage and fills out the Lead Email form
| name | email | phone | case |
| John test | testersgonnatest@gmail.com | 816-111-1111 | This is a test of the PPC Landing Hero Contact Form. |
And fills out the “subject” field
When they submit the form
Then it will appear to go through