Feature: Rich Text Editor

Testing the Rich Text Editor on Premium Sites
  Scenario: Opening a Premium Sites
    Given I login
    Then I open the Editor
    Then I display all the settings, badges and Insert Block buttons
    Then I insert the body block containing the RTE
    Then I display the RTE menu
    Then I select the Text
    Then I show the H2 action
    Then I show the H3 action
    Then I show the H4 action
    Then I show the bold action
    Then I show the italic action
    Then I insert the image
    Then I close the RTE Menubar
    Then I remove the block
    And I open RTE on interior page