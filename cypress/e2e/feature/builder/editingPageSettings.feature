Feature: Users can update their page settings
    @TestCaseKey=RD-T408
    Scenario: Users can update their page settings
        Given a user has logged into Builder
        And they have navigated to an interior page
        And they clicked the "Page Settings" button
        When they update the "Menu Title" and "URL Slug" fields
        And click the "Save Settings" button
        And an orange indicator displays next to the "Page Settings" button
        When the user clicks the Publish button
        Then the menu title on Builder is updated
        And the menu title on Render is updated
        And the URL slug is updated on Render
 