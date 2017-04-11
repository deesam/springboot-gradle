var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout, Given, When, Then}) {
    setDefaultTimeout(60 * 1000);
    Given('I am on the Cucumber.js GitHub repository', function() {
        return this.driver.get('https://jira.kesko.fi/browse/PIMT-669');
    });

    When('I enter username', function () {
        var _this = this;
        return this.driver.findElement(seleniumWebdriver.By.id('login-form-username')).then(function(element) {
            _this.driver.executeScript("arguments[0].setAttribute('value', 'sameer.r.deshpande@tieto.com')", element);
            return element;
        });
    });

    When('I enter password', function () {
        var _this = this;
        return this.driver.findElement(seleniumWebdriver.By.id('login-form-password')).then(function(element) {
            _this.driver.executeScript("arguments[0].setAttribute('value', 'Admin@123')", element);
            return element;
        });
    });

    When('I submit', function () {
        var _this = this;
        return this.driver.findElement(seleniumWebdriver.By.id('login-form-submit')).then(function(element) {

            return element.click();
        });
    });

    Then('I should see {stringInDoubleQuotes}', function (text) {
        var xpath = "//*[contains(text(),'" + text + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });
});