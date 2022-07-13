Feature: Pagination and Filters

Testing the Pagination feature on Premium Sites

<<<<<<< HEAD
  Scenario: Login and Logut
=======
   Scenario: Login and Logut
>>>>>>> 2416a6413255d5b1a7c9451c4b34f7f422343281
    Given I am on a landing page
    When I login
    Then I should see the Create New button

  Scenario: Testing the PS-243 Searching or Adding Filter Options Sets Pagination to Page 1
    Given I logged in on Premium Sites Director
    When I filter a premium site name on Search Filter
    Then I should only be shown number "1" on the pagination
    When I filter the live sites among the premium sites
    Then I should see live sites getting filtered from the other sites
    When I click the Create New button
    Then I should see the showcase of the layouts
    When I filter the name of the layout
    Then I should see the Pagination is set to "1" on both of the paginations
    When I click on Layouts in side navigation
    Then I should see the list of layouts
    When I filter the name of the layouts
    Then The pagination number should be set to "1"
    When I filter Refined Layouts
    Then The pagination number should be set to "1"
    When I click the Blocks tab on side navigation
    Then The blocks list page should be opened
    When I Filter the blocks name on the search filter
    Then The pagination number should be set to "1"
    When I click the Buttons on side navigation
    Then I should see the list of buttons
    When I filter the name of the button
    Then The pagination number should be set to "1"
    When I click the Pages on side navigation
    Then I should see the list of the pages style as default
    When I filter the Page Style on the set of filters
    Then I should see the pagination number set to only "1"
    When I click the Page Type
    Then I should see the list of page types
    When I filter the page type
    Then I should see the pagination number set to only "1"
    When I click on Apps on side nav bar
    Then I should see the list of Apps
    When I filter the name of the Apps
    Then I should see the pagination number set to only "1"
