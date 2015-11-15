'use strict';

describe('Main View', function() {
  var page;
  
  beforeEach(function() {
    browser.manage().deleteAllCookies();
    browser.get('/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('SPA Common Blog');
  });
  
  it('should include navbar for unauth user and relevant message', function() {
    var linkSignup = page.navEl.element(by.linkText('Sign up'));
    var linkLogin = page.navEl.element(by.linkText('Login'));    
    
    browser.driver.sleep(1000);
    
    var msg = element(by.css('.unauth-message'));    
    
    expect(page.navEl).toBeDefined();    
    expect(linkSignup).toBeDefined();
    expect(linkLogin).toBeDefined();
    expect(msg).toBeDefined();
  });
});
