Feature: : Ecomerce validations
@Regression
@foo
Scenario: Placing the order
 Given a login to application with "sritejaroyal@gmail.com" and "Kusuma@1990"
 When Add "ZARA COAT 3" to the cart
 Then Check whether "ZARA COAT 3" is added to the cart
 When Enter the valid details and purchase the order
 Then verify in order in orderhistory page whether it is purchased

 @Validation
 @foo
Scenario: Placing the order
 Given a login to Ecommerce2 application with "sritejaroyal@gmail.com" and "Kusuma@1990"
 Then Error message should get displayed