var expr = require('express');
var app = expr();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/register', function (req, res) {
    setTimeout(function()
    {
        res.sendFile('E:/nodepro/pro/reg.html');
    },6000)

});

app.get('/home', function (req, res) {
    res.sendFile('E:/nodepro/pro/home.html');
});

app.get('/getproducts', function (req, res) {
    var pro = [
        {proId:101,proName:'dell',proPrice:45000},
        {proId:102,proName:'acer',proPrice:35000}
    ]
    res.send(pro);
});
app.post('/student-data', function (req, res) {
    var fullName = req.body.firstName + ' ' + req.body.lastName;
    
    res.send('welcome to '+fullName);
});


var server = app.listen(4040, function () {
    console.log('Node server is running..');
});


