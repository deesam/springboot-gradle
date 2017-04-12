
var seleniumWebdriver = require('selenium-webdriver');
var phantomjs = require('phantomjs');
var {defineSupportCode} = require('cucumber');

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .withCapabilities({"phantomjs.binary.path":phantomjs.path})
  		.forBrowser('phantomjs')
  		.build();
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
});