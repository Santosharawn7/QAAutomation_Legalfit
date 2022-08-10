Feature: Settings Publishing feature

Automate Regression Test for publishing the changes in the builder settings

Scenario: Changes to Brand, Accent, and Link colors can be published

Given I am in the builder
When I open the page settings drawer
Then I should see the color settings
When I change the brand color
Then I should see changes on the builder
When I close the drawer 
Then I should see the changes has been reverted
When I open the drawer and make the changes again in both Brand and Accent color
Then I should see the changes on the builder
When I click Publish Settings
Then I should see the drawer being closed and notification saying the "Your Changes May Take a Moment to Load"
And I should see both Brand and Accent Color being changed in the page