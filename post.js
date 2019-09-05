/**
 * Created by aa on 2019/8/2.
 */
let http = require('http');
let server = http.createServer(function (req,res) {
    let allData = '';
    req.on('data',function (chunk) {
      allData += chunk;
    });
    req.on('end',function () {
      let obj = JSON.parse(allData)
      console.log(obj.user,obj.pass);
      if(obj.user === 'max' && obj.pass === '123'){
        res.end('user')
      }else {
        res.end('0');
      }

    });
}).listen(3000);
