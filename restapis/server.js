var express      = require('express'); 
var mysql      = require('oracledb'); 


var app=express();




var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'harsha',  
  database : 'eshop'  
});  

connection.connect(function(error)
{
if(error)
{
console.log('Errror');
}
else
{
console.log('conected');
}
});




















//product

app.get('/getAllProducts',function(req,resp)
{
connection.query("select * from  product",function(error,rows,fields)
{
if(error)
{console.log('Errror in query');
}
else
{
console.log('query excuted successfully');
console.log(rows);
//resp.location("D:/harsha/njs/restpro2/showEmp.html");
//resp.json(rows);
//JSON.stringify(rows)
//resp.send("D:/harsha/njs/restpro2/showEmp.html")
//resp.send(JSON.stringify(rows));
resp.send(rows);
}

});
});



//insertSupplier

app.post('/insertProduct',function(req,resp)
{

connection.query("insert into   product(proname,proid,prodes) values(?,?,?) ",[req.body.proname,req.body.proid,req.body.prodes],function(error,rows,fields)
{
if(error)
{console.log('Errror in query');

}
else
{
console.log(' insert Product query excuted successfully');
var data=JSON.stringify(req.body)
console.log(rows);
console.log("body"+req.body);
console.log("body"+req.body.proname);
console.log("body"+req.body.prodes);

resp.send(rows);
}
});
});







app.listen(6060);
  
  
