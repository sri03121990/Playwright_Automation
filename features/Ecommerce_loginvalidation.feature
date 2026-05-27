Feature: : Ecomerce validations

@Validation
Scenario: Placing the order
 Given a login to Ecommerce2 application with "sritejaroyal@gmail.com" and "Kusuma@1990"
 Then Error message should get displayed

 

@Paramtere
Scenario Outline: Placing the order 2
 Given a login to Ecommerce3 application with "<username>" and "<password>"
 Then Error message should get displayed

 Examples:
     | username                | password     |
     | sritejaroyal@gmail.com  | Kusuma@1990  |
     | lol@gmail.com           | lol124@#     |