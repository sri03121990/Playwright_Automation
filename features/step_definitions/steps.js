const { When, Then, Given } = require('@cucumber/cucumber')
const {POManager} = require('../../pageobjects/POManager')
const{expect} = require('@playwright/test')

const { chromium } = require('playwright');


Given('a login to application with {string} and {string}',{timeout : 100*1000}, async function (username, password) {
           // Write code here that turns the phrase above into concrete actions


           /*
          const browser = await chromium.launch({
            
           //const browser = await playwright.chromium.launch({
            headless : false
           });
           const context = await browser.newContext()
           const page = await context.newPage()
           this.poManager = new POManager(page)
           */

           const products = this.page.locator(".card-body");
           const loginPage = this.poManager.getLoginPage();
           await loginPage.goTo();
           await loginPage.validLogin(username,password);
           
         });

         When('Add {string} to the cart', async function (productName) {
           // Write code here that turns the phrase above into concrete actions
           this.dashboardPage = this.poManager.getDashboardPage();
           await this.dashboardPage.searchProductAddCart(productName);
           await this.dashboardPage.navigateToCart();
         });

         Then('Check whether {string} is added to the cart', async function (productName) {
           // Write code here that turns the phrase above into concrete actions
           const cartPage = this.poManager.getCartPage();
           await cartPage.VerifyProductIsDisplayed(productName);
           await cartPage.Checkout();
           });

           When('Enter the valid details and purchase the order', async function () {
           // Write code here that turns the phrase above into concrete actions
           const ordersReviewPage = this.poManager.getOrdersReviewPage();
           await ordersReviewPage.searchCountryAndSelect("ind","India");
           this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
           console.log(this.orderId);
           
         });

         Then('verify in order in orderhistory page whether it is purchased', async function () {
           // Write code here that turns the phrase above into concrete actions
           await this.dashboardPage.navigateToOrders();
           const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
           console.log('this is the order e need to find '+this.orderId );
           await ordersHistoryPage.searchOrderAndSelect(this.orderId);
           expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
         });


Given('a login to Ecommerce2 application with {string} and {string}', {timeout : 100*1000},async function (username, password) {

   const userName = this.page.locator('#username');
      const signIn = this.page.locator("#signInBtn");

  await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await this.page.title());
      //css 
     await userName.type(username);
     await this.page.locator("[type='password']").type(password);
     await signIn.click();
           
         });


Then('Error message should get displayed', async function () {

  console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
           
         });