# QAAutomation-Int
This is the QA Automation Project for the Legalfit Project (Studio, Builder and Render). The Project is using the Cypress BDD Framework for the integration tests which 
contains the Gherkin Scripts for scenario and test cases and the concept of Jest, Mocha and Chai for the step definitions (tests).  This project enables the Testers to do regression test and manage the time in Quality Control and is supervised under QA department of Legalfit LLC.
This ReadMe file is for note to the QA teams.

# Automation Engineers Requirements:
- Gherkin Scripts
- BDD (Behavior Driven Development)
- Cucumber concepts
- Javascript
- Concept of Jest, Mocha, Chai {Structure of test, Asserts and Chainers}
- Github
- Page Object Model
- Legalfit Tests

### Pre-installation Notes   | ### For Mac Users
| - Install Node             | - Update Homebrew and install node and yarn |
| - Install Yarn             | |

# Installation notes
- git init
- git config --global user.name [Your Name]
- git config --global user.email [Your Legalfit Email]
- ssh keygen
- [copy the rsa.pub to your github ssh keys] or use this command "cat ~/.ssh/id_rsa.pub" and paste on github ssh keys
- git clone "This project from Legalfit QA Automation Repository"
- run npm install or simply yarn

# Cypress Installation
- cd ~/QaAutomationInt
- npm install cypress --save-dev ["for the latest version of cypress"] or npm install cypress@versionnumber --save-dev or yarn add cypress
- npm run integration-test or if it fails (./node_modules/.bin/cypress open)

# Post-Installation notes
- npm install [to install all the node modules and libraries] or just input command "yarn"


# Cucumber notes
- Each feature file represents the group of scenarios
- Each feature should have a uniqure ".feature" file
- Feature files must be in Gherkin format
- All feature files must be within the feature folder (sub-folders within the feature folder is allowed)
- The step-definition folder must be on the same folder structure as the feature file
- The Step-definition file must be inside teh stepDefinition folders in ".cy.js" format
- Use appropriate imports for cucumber-library "cypress-cucumber-preprocessor/steps"

[cypress]https://docs.cypress.io/guides/overview/why-cypress "Cypress Documentation"

# Developer Notes
- Do not install libraries until needed to
- Do not commit package.json, package-lock.json & cypress.config.js file without permission
- Always do the latest pull from qa before doing last commit for pull requests (To avoid merge conflicts)
- Work on the branch refering to the Ticket ID 

