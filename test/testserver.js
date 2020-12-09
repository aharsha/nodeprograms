var expModule = require('express');

var expressObject = expModule();

//localhost:5050/getproducts
expressObject.get('/register', function (r, resp) {
    resp.send('product id : 101, productname: dell, price:45000');
});

var f1=function()
{
console.log("server started on 5050 port");
}
expressObject.listen(5050,f1 );