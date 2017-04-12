var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout, Given, Then}) {
    setDefaultTimeout(-1);
    Given('I am on the ASK Home Page', function() {
        return this.driver.get('http://www.google.com');
    });

    Then('I should see {stringInDoubleQuotes}', function (text) {
        var xpath = "//*[contains(text(),'" + text + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });
});
