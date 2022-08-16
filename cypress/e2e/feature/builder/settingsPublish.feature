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

Scenario: New Desktop and Mobile Logos can be published

Given I am in the builder on premium sites
When I open the design drawer
Then The design drawer is opened
When I open the Logo upload container
Then I should see the logos of the page
When I upload a new logos
And I publish the settings
Then I can see new logo on the page

Scenario: A new FavIcon can be published

Given I am on a builder of premium sites
When I open a design drawer
Then The drawer is opened
When I clicked the FavIcon
Then I can see the option to upload a FavIcon
When I upload a new FavIcon
Then I can see the new uploaded FavIcon
And I can publish the settings

Scenario: A generated FavIcon can be published

Given I am on a builder of premium sites
When I open a design drawer
Then The drawer is opened
When I clicked the FavIcon
Then I can see the option to upload a FavIcon
When I click on Generate FavIcon
Then I can see option settings to generate new Favicon
When I generate a new Favicon
Then I can publish settings

Scenario: A change to the font pair can be published

Given I am on a builder of premium sites
When I open a design drawer
Then The drawer is opened
When I clicked the Font pairs
Then I can see Font Settings
When I click on one of the font pairs
Then I can see changes on the font family used in builder
When I click Publish settings
Then The changes are published
And The changes are intact on the builder