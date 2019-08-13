## Field reference for Sample API data
The fields below are returned in the Sample API. <br>
Add additional information about fields.
## POST    /voucher/store

| Field Type          |  Description    |  Data Types        |
|---------------------|-----------------|--------------------|
|voucher_code|The voucher code sent to the user|string       |
|customer_email|Email of the customer who requested the voucher|string|
|phonenumber|Phone number of the customer who requested the voucher|string|
|name |Name of the customer who requested the voucher|string |
|amount               |Amount value of the voucher |string|
|createdAt            |Time at which voucher was created|ISO String()|