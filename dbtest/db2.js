var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});
MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("product").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});