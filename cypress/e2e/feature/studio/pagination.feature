Feature: Pagination and Filters

Testing the Pagination feature on Premium Sites

Scenario: Users can see login contents

    Given I hit the URL
    When I am on login page
    Then I can see login fields

Scenario: Users can see pagination set to 1 on Premium Site lists filtering out name and status

    Given I logged in on Premium Sites Director
    When I filter a premium site name on Search Filter
    Then I should only be shown number "1" on the pagination
    When I filter the live sites among the premium sites
    Then I should see live sites getting filtered from the other sites
    
Scenario: Users can see pagination set to 1 on showcase of Layouts filtering out the name 

    Given I logged in on Premium Sites Director
    When I click the Create New button
    Then I should see the showcase of the layouts
    When I filter the name of the layout
    Then I should see the Pagination is set to "1" on both of the paginations

Scenario: Users can see pagination set to 1 on Layouts lists by filtering out name and style
    
    Given I logged in on Premium Sites Director
    When I click on Layouts in side navigation
    Then I should see the list of layouts
    When I filter the name of the layouts
    Then The pagination number should be set to "1"
    When I filter Refined Layouts
    Then The pagination number should be set to "1"

Scenario: Users can see Pagination set to 1 on Blocks lists by filtering out blocks name

    Given I logged in on Premium Sites Director
    When I click the Blocks tab on side navigation
    Then The blocks list page should be opened
    When I Filter the blocks name on the search filter
    Then The pagination number should be set to "1"

Scenario: Users can see Pagination set to 1 on Buttons list by filtering name of button

    Given I logged in on Premium Sites Director
    When I click the Buttons on side navigation
    Then I should see the list of buttons
    When I filter the name of the button
    Then The pagination number should be set to "1"

Scenario: Users can see Pagination set to 1 on Pages list by filtering the name and style of page

    Given I logged in on Premium Sites Director
    When I click the Pages on side navigation
    Then I should see the list of the pages style as default
    When I filter the Page Style on the set of filters
    Then I should see the pagination number set to only "1"

Scenario: Users can see Pagination set to 1 on Page-Types list by filtering the name and type of the page-type

    Given I logged in on Premium Sites Director
    When I click the Page Type on Pages list
    Then I should see the list of page types
    When I filter the page type
    Then I should see the pagination number set to only "1"

Scenario: Users can see Pagination set to 1 on the Apps list by filtering the name of the Apps

    Given I logged in on Premium Sites Director
    When I click on Apps on side nav bar
    Then I should see the list of Apps
    When I filter the name of the Apps
    Then I should see the pagination number set to only "1"
