// const http = require("http");
// let data = {
//     id:101,
//     name:"abc"
// }
// '{"id":"101","name":"abc"}'
// //req object represents clients req
// //res object represents our app's res 
// function handleReq(req,res){
//     //http status code
//     res.writeHead(200,{'content-type':'text/plain'} );
//     res.write(data);
//     res.end();
// }
// function notify(){
//     console.log("server application has started on 3000");
// }
// http.createServer(handleReq).listen(3000,notify);
const http = require('http');
let data = {
    id: 101,
    name: 'abc'
}
'{"id":101,"name":"abc"}'
//req object represent client's req
//res object reprent our app's response
function handleReq(req,res){
    //http status code
    
    if(req.url === '/data' && req.method === 'GET'){
        res.writeHead(200,{'content-type':'application/json'});
        let str = JSON.stringify(data);
        res.write(str);
        res.end();
    }
    if(req.url === '/login' && req.method === 'GET'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.write("login page");
        res.end();
    }
    if(req.url === '/signup' && req.method === 'GET'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.write("login page");
        res.end();
    }
}

//endpoint -> url + method type + res

function notify(){
    console.log('server application has started on 3000');
}
http.createServer(handleReq).listen(3000,notify);
