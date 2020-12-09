var oracledb = require('oracledb');
 
oracledb.getConnection(
  {
    user          : "system",
    password      : "harsha",
    connectString : "jdbc:oracle:thin:@localhost:1521:xe"
  },
  function(err, connection)
  {
    if (err) { console.error(err); return; }
    connection.execute(
      "SELECT * from student",
      function(err, result)
      {
        if (err) { console.error(err); return; }
        console.log(result.rows);
      });
  });