const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './cypress/cucumber-reports',
	metadata:{
        browser: {
            name: 'chrome',
            version: '105'
        },
        device: 'Sandbox QA',
        platform: {
            name: 'Ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Sandbox QA environment'},
        ]
    }
});