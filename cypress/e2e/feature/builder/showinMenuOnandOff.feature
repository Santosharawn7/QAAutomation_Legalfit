Feature: Showing a page in Nav Menu and hidding a page from Nav menu in builder
    @TestCaseKey=RD-T436
    Scenario: User can make a page hidden from the menu
        Given a user has logged into Builder for a customer site
        And they have clicked the Pages icon
        When they turn off the eye icon under Show In Menu
        And they click the Publish Menu button
        Then the page is hidden from the Nav Menu in Builder
        And the page is hidden from the Nav Menu in Render
        But the page is not hidden on the Sitemap
        And the link on the Sitemap navigates the user to the Hidden page
        When the user goes back to the pages list
        And they turn on the eye icon under Show In Menu
        And they click the Publish Menu button
        Then the page is added to the Nav Menu in Builder
        And the page is added to the Nav Menu in Render
        But the page is not hidden on the Sitemap
        And the link on the Sitemap navigates the user to the desired page
        And the link in the Nav Menu navigates the user to the desired page
