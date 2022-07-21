Feature: Unpublish pages

Testing the page unpublishing feature on the Premium Sites

Scenario: Homepage will be unpublished when the unpublish action is done

    Given I logged in on Premium Sites Builder
    When I Navigate to the clients builder for the site.
    And Click the dropdown button next to the right of the publish
    Then I see the Unpublish button
    When I click on the Unpublish button
    Then Unpublish api should should show its status 200
    And "Unpublished" badge should be visible on the top left of screen
    When I visit Sitemap
    Then The homepage should not be present

Scenario: Interior page will be unpublished when the unpublish action is done

    Given I logged in on Premium Sites Builder
    When I Navigate to the clients builder interior page
    And Click the dropdown button next to the right of the publish
    Then I see the Unpublish button on the interior page
    When I click on the Unpublish button on the interior page
    Then Unpublish api should should show its status 200 of the interior page
    And "Unpublished" badge should be visible on the top left of screen of the interior page
    When I visit the render mode and navigate to interior page
    Then The unpublished interior page should not be visible
    When I visit Sitemap
    Then The unpublished interior page should not be present

Scenario: PPC Landing page will be unpublished when the unpublish action is done

    Given I logged in on Premium Sites Builder
    When I Navigate to the clients builder PPC Landing page
    And Click the dropdown button next to the right of the publish
    Then I see the Unpublish button on the PPC Landing page
    When I click on the Unpublish button on the PPC Landing page
    Then Unpublish api should should show its status 200 of the PPC Landing page
    And "Unpublished" badge should be visible on the top left of screen of the PPC Landing page
    When I visit the render mode and navigate to PPC Landing page
    Then The unpublished PPC Landing page should not be visible
    When I visit Sitemap
    Then The unpublished PPC Landing page should not be present


Scenario: A child page will be unpublished when the unpublish action is done

    Given I logged in on Premium Sites Builder
    When I Navigate to the clients builder child page
    And Click the dropdown button next to the right of the publish
    Then I see the Unpublish button on the child page
    When I click on the Unpublish button on the child page
    Then Unpublish api should should show its status 200 of the child page
    And "Unpublished" badge should be visible on the top left of screen of the child page
    When I visit the render mode and navigate to child page
    Then The unpublished child page should not be visible
    When I visit Sitemap
    Then The unpublished child page should not be present

Scenario: A grandchild page will be unpublished when the unpublish action is done

    Given I logged in on Premium Sites Builder
    When I Navigate to the clients builder grandchild page
    And Click the dropdown button next to the right of the publish
    Then I see the Unpublish button on the grandchild page
    When I click on the Unpublish button on the grandchild page
    Then Unpublish api should should show its status 200 of the grandchild page
    And "Unpublished" badge should be visible on the top left of screen of the grandchild page
    When I visit the render mode and navigate to grandchild page
    Then The unpublished grandchild page should not be visible
    When I visit Sitemap
    Then The unpublished grandchild page should not be present

Scenario: A great grandchild page will be unpublished when the unpublish action is done

    Given I logged in on Premium Sites Builder
    When I Navigate to the clients builder great grandchild page
    And Click the dropdown button next to the right of the publish
    Then I see the Unpublish button on the great grandchild page
    When I click on the Unpublish button on the great grandchild page
    Then Unpublish api should should show its status 200 of the great grandchild page
    And "Unpublished" badge should be visible on the top left of screen of the great grandchild page
    When I visit Sitemap
    Then The unpublished great grandchild page should not be present