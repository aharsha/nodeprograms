var express      = require('express'); 
var mysql      = require('mysql');  
var app=express();
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'harsha',  
  database : 'nodeclass'  
});  
connection.connect(function(error){
if(error)
{console.log('Errror');
}
else
{
console.log('conected');
}
});

app.get('/:id?',function(req,resp)
{
connection.query("select * from  student where rollno = "+id,function(error,rows,fields)
{
if(error)
{console.log('Errror in query');
}
else
{
console.log('query excuted successfully');
console.log(rows);
//resp.send(rows[0].empid);
//resp.send(rows);
resp..rows});
}
});
})

app.listen(1000);

// node samplerest.js
//connected 
//http://localhost:6060
  
  
