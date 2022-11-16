Feature: Users can create a new Page from the Pages List
    @TestCaseKey=RD-T435
    Scenario: Users can create a new Page from the Pages List
        Given a user has logged into builder for a customers site
        And they have clicked the "Pages" icon
        When they click the "Create New" button
        And they fill in all the fields
        |PageType |ParentPage |MenuTitle |URLSlug |SearchEnginePageTitle |SearchEnginePageDescription|
        |Service Detail |No Parent  |Auto Test Page |Automation test |Something Goes Here |And Something Goes Here|
        When the user click the "Create New" button
        Then the user is navigated to the Pages List
        And the new page displays at the bottom of the list
        And the status is "Unpublished"
