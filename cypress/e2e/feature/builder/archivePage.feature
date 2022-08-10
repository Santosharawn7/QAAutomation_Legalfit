Feature: Archiving Pages in builder

This test run indicates the pages can be archived in the builder

Scenario: Users can archive interior page with no children

Given I am logged in on builder
When I open the pages list
Then The list of pages should appear
When I click on the interior page with no children
Then The page with no children is opened in builder in edit mode
When I click the Unpublish button
Then The page gets unpublished
And The dropdown now shows "Archive" button
When I click the Archive button
Then The page gets archived
And The Unarchive button is shown
When I click on Unarchive button
Then The page is unarchived
And The page gets listed in the Pages list
And I publish the page

Scenario: Users can archive child page with no children

Given I am logged in on builder
When I open the child page with no children
Then The child page should open
When I click on the unpublish button on the child page
Then The child page gets unpublished
When I click the archive button on the child page
Then The child page gets archived
And The unarchive button is shown on the top of the child page
When I click the Unarchive button on the child page
Then The child page gets unarchived
And I can publish the child page

Scenario: Users can archive PPC Landing page

Given I am logged in on builder
When I open the pages list
Then The list of pages should appear
When I click on the PPC Landing page
Then The PPC Landing page is opened in builder in edit mode
When I click the Unpublish button on the PPC Landing page
Then The PPC Landing page gets unpublished
And The dropdown now shows "Archive" button on the PPC Landing page
When I click the Archive button on the PPC Landing page
Then The PPC Landing page gets archived
And The Unarchive button is shown on the PPC Landing page
When I click on Unarchive button on the PPC Landing page
Then The PPC Landing page is unarchived
And The PPC Landing page gets listed in the Pages list
And I publish the PPC Landing page

Scenario: Users can't archive parent page with children

Given I am logged in on builder
When I open the Parent page
Then The parent page with children is open
When I unpublish the parent page
Then The parent page gets unpublished
When I click the archive button on the parent page
Then The parent page does not get archived
And I toast warning is shown with message "Not archived: cannot archive pages that have children"
When I click Publish button on the parent page
Then The parent page gets published