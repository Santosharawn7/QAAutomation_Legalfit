Feature: Users can update a Page's SEO Title and Description
    @TestCaseKey=RD-T413
    Scenario: Users can update a Page's SEO Title and Description
        Given the user is logged into Builder
        And they have clicked the SEO Settings button on the homepage
        When they update the "SEO Title" and "SEO Description"
        |SearchEnginePageTitle |SearchEnginePageDescription|
        |Something goes Here |Something More Goes Here|
        And they click the "Save Settings" button
        Then an orange circle will displays next to the SEO Button
        When the user clicks the "Publish" button
        Then the meta tags in the HTML on the rendered site will be updated
       
