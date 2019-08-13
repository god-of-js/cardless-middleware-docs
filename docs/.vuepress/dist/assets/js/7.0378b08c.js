(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{189:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"api-calls"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-calls","aria-hidden":"true"}},[e._v("#")]),e._v(" API Calls")]),e._v(" "),r("p",[e._v("Explore the API here hands-on "),r("br"),e._v("\nThis API supports a data response in JSON format "),r("br"),e._v("\nNeed a little help? Read our "),r("a",{attrs:{href:"/getting-started"}},[e._v("getting started")]),e._v(" to learn about using this API"),r("br")]),r("hr"),r("p"),e._v(" "),r("h2",{attrs:{id:"post-voucher-store"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#post-voucher-store","aria-hidden":"true"}},[e._v("#")]),e._v(" POST    /voucher/store")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("HEAD PARAMS")]),e._v(" "),r("th",[e._v("DESCRIPTION")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Authorization")]),e._v(" "),r("td",[e._v("Unique Key Provided by "),r("b",[e._v("CARDLESS")]),e._v(" (e.g Bearer NIBBS_********)")])])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("BODY PARAMS")]),e._v(" "),r("th",[e._v("DESCRIPTION")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("voucher_code")]),e._v(" "),r("td",[e._v("The voucher code sent to the user "),r("div",{staticStyle:{color:"red"}},[e._v(" Required* ")])])]),e._v(" "),r("tr",[r("td",[e._v("customer_email")]),e._v(" "),r("td",[e._v("Email of the customer who requested the voucher "),r("div",{staticStyle:{color:"red"}},[e._v(" Required* ")])])]),e._v(" "),r("tr",[r("td",[e._v("phonenumber")]),e._v(" "),r("td",[e._v("Phone number of the customer who requested the voucher"),r("div",{staticStyle:{color:"red"}},[e._v("Required*")])])]),e._v(" "),r("tr",[r("td",[e._v("name")]),e._v(" "),r("td",[e._v("Name of the customer who requested the voucher "),r("div",{staticStyle:{color:"red"}},[e._v(" Required* ")])])]),e._v(" "),r("tr",[r("td",[e._v("amount")]),e._v(" "),r("td",[e._v("Amount value of the voucher "),r("div",{staticStyle:{color:"red"}},[e._v(" Required* ")])])]),e._v(" "),r("tr",[r("td",[e._v("createdAt")]),e._v(" "),r("td",[e._v("Time at which voucher was created")])])])]),e._v(" "),r("h2",{attrs:{id:"_200-success"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_200-success","aria-hidden":"true"}},[e._v("#")]),e._v(" 200 success")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n   status: true,\n   message: "Voucher Saved Successfully",\n   data: {\n       "amount": 5000,\n       "createdAt": 2019-07-15t02:54:48728z,\n       "voucher_code": "190xxxxxxxx",\n       \'customer\': {\n           "email": "richardgriffon@example.com",\n           "name": "richard griffon"\n       }  \n}\n\n')])])]),r("h2",{attrs:{id:"_400-failure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_400-failure","aria-hidden":"true"}},[e._v("#")]),e._v(" 400 failure")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("{\n   status: false,\n   message: error\n}\n")])])]),r("h2",{attrs:{id:"put-voucher-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#put-voucher-use","aria-hidden":"true"}},[e._v("#")]),e._v(" PUT    /voucher/use")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("HEAD PARAMS")]),e._v(" "),r("th",[e._v("DESCRIPTION")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Authorization")]),e._v(" "),r("td",[e._v("Unique Key Provided by "),r("b",[e._v("CARDLESS")]),e._v(" (e.g Bearer NAFTAPOS********)")])])])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("BODY PARAMS")]),e._v(" "),r("th",[e._v("DESCRIPTION")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("voucher_code")]),e._v(" "),r("td",[e._v("The voucher code sent to the user "),r("div",{staticStyle:{color:"red"}},[e._v(" Required* ")])])]),e._v(" "),r("tr",[r("td",[e._v("amount")]),e._v(" "),r("td",[e._v("Amount value of the voucher "),r("div",{staticStyle:{color:"red"}},[e._v(" Required* ")])])])])]),e._v(" "),r("h2",{attrs:{id:"_200-success-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_200-success-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 200 success")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n   status: true,\n   message: "Voucher payment transacted successfully",\n   data: {\n       "amount": 5000,\n       "createdAt": 2019-07-15t02:54:48728z,\n       "voucher_code": "190xxxxxxxx",\n       \'customer\': {\n           "email": "richardgriffon@example.com",\n           "name": "richard griffon"\n       }  \n}\n\n')])])]),r("h2",{attrs:{id:"_400-failure-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_400-failure-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 400 failure")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("{\n   status: false,\n   message: error\n}\n")])])])])},[],!1,null,null,null);t.default=s.exports}}]);