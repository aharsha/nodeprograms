var fs = require('fs');

fs.appendFile('abc.txt', 'hello', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});