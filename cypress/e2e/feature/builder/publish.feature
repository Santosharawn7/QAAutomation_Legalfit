Feature: Editor Publishing feature

Automate Regression Test for publishing the changes in the builder

@homepage
Scenario: Users can publish a Homepage

    Given I am logged in on builder
    When I make any changes on the builder on the Hero Block
    Then I see "Has Changes" badge at the top left of the page
    When I click the Publish button
    Then I can no longer see the "Has Changes" badge
    When I go to the render version of the site
    Then I can see the published changes

@interior-page
Scenario: User can publish an interior page

    Given I am logged in on the interior page
    When I make changes on the interior page
    Then I can see "Has Changes" badge at the top left of the page of the interior page
    When I click the Publish button on the interior page
    Then I can no longer see the "Has Changes" badge on the interior page
    When I navigate to the render version of interior page
    Then I can see the published changes on that interior page

@ppc-landing
Scenario: User can publish an PPC Landing page

    Given I am logged in on the PPC Landing page
    When I make changes on the PPC Landing page
    Then I can see "Has Changes" badge at the top left of the page of the PPC Landing page
    When I click the Publish button on the PPC Lading page
    Then I can no longer see the "Has Changes" badge on the PPC Landing page
    When I navigate to the render version of PPC Landing page
    Then I can see the published changes on that PPC Landing page
    
@child-page
Scenario: User can publish an Child page

    Given I am logged in on the child page
    When I make changes on the child page
    Then I can see "Has Changes" badge at the top left of the page of the child page
    When I click the Publish button on the child page
    Then I can no longer see the "Has Changes" badge on the child page
    When I navigate to the render version of child page
    Then I can see the published changes on that child page

@grandchild-page
Scenario: User can publish an grandchild page

    Given I am logged in on the grandchild page
    When I make changes on the grandchild page
    Then I can see "Has Changes" badge at the top left of the page of the grandchild page
    When I click the Publish button on the grandchild page
    Then I can no longer see the "Has Changes" badge on the grandchild page
    When I navigate to the render version of grandchild page
    Then I can see the published changes on that grandchild page

@great-grandchild-page
Scenario: User can publish an great grandchild page

    Given I am logged in on the great grandchild page
    When I make changes on the great grandchild page
    Then I can see "Has Changes" badge at the top left of the page of the great grandchild page
    When I click the Publish button on the great grandchild page
    Then I can no longer see the "Has Changes" badge on the great grandchild page
    When I navigate to the render version of great grandchild page
    Then I can see the published changes on that great grandchild page