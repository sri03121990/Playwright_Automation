
const { chromium } = require('playwright');
const {POManager} = require('../../pageobjects/POManager')
const {After, Before,BeforeStep,AfterStep,Status} = require('@cucumber/cucumber');


// this will run before every scenario
Before(async function () {

  /*
           Here we are not using test package to import browser or page fixtures.
           Using playwright/chromium package we can import  browser type directly.
           Using that browser we can create new page. xxxxxx
           */
    const browser = await chromium.launch({
            
           headless : false
           });
           const context = await browser.newContext()
           this.page = await context.newPage()
           this.poManager = new POManager(this.page)
  });

After(function () {
  
  console.log("Last to execute")
});


BeforeStep(function () {
  
});

AfterStep( async function ({result}) {
  
  if (result.status === Status.FAILED) {
    await this.page.screenshot({path: 'screenshot2.png'})
  }
});