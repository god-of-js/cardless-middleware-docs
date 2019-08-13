## API Calls
Explore the API here hands-on <br>
This API supports a data response in JSON format <br>
Need a little help? Read our [getting started](/getting-started) to learn about using this API<br>
<hr>

## POST    /voucher/store

 | HEAD PARAMS     |    DESCRIPTION    |
 |-----------------|----------------------------  |
 |Authorization     |Unique Key Provided by <b>CARDLESS</b> (e.g Bearer NIBBS_********) |

 | BODY PARAMS     |    DESCRIPTION    |
 |-----------------|----------------------------  |
 |voucher_code     |The voucher code sent to the user <div style="color: red;"> Required* </div> |
 |customer_email   |Email of the customer who requested the voucher <div style="color: red;"> Required* </div> |
 |phonenumber     |Phone number of the customer who requested the voucher<div style="color: red;">Required*</div>|
 |name             |Name of the customer who requested the voucher <div style="color: red;"> Required* </div>|
 |amount           |Amount value of the voucher <div style="color: red;"> Required* </div>|
 |createdAt            |Time at which voucher was created|
 ## 200 success
 ```
 {
    status: true,
    message: "Voucher Saved Successfully",
    data: {
        "amount": 5000,
        "createdAt": 2019-07-15t02:54:48728z,
        "voucher_code": "190xxxxxxxx",
        'customer': {
            "email": "richardgriffon@example.com",
            "name": "richard griffon"
        }  
 }

 ```

 ## 400 failure
 ```
 {
    status: false,
    message: error
 }
 ```


## PUT    /voucher/use

 | HEAD PARAMS     |    DESCRIPTION    |
 |-----------------|----------------------------  |
 |Authorization     |Unique Key Provided by <b>CARDLESS</b> (e.g Bearer NAFTAPOS********) |

 | BODY PARAMS     |    DESCRIPTION    |
 |-----------------|----------------------------  |
 |voucher_code     |The voucher code sent to the user <div style="color: red;"> Required* </div> |
 |amount           |Amount value of the voucher <div style="color: red;"> Required* </div>|
 ## 200 success
 ```
 {
    status: true,
    message: "Voucher payment transacted successfully",
    data: {
        "amount": 5000,
        "createdAt": 2019-07-15t02:54:48728z,
        "voucher_code": "190xxxxxxxx",
        'customer': {
            "email": "richardgriffon@example.com",
            "name": "richard griffon"
        }  
 }

 ```

 ## 400 failure
 ```
 {
    status: false,
    message: error
 }
 ```
