const http = require('http');


const server = http.createServer(function(req, res){

    res.write('welcome home')


    // res.write('my name is nirant paladiya');
    // res.write('i am back end developer');
    // res.write('the modules is three type:-core,local and third party');
    // res.write('i am 12th study completed id ankur vidhya bhavan');
    // res.write('i am now study in I.T course');
    // res.write('my hobbies is cricket and cycling');


    res.end(); 
})

server.listen(4000, () => {
    console.log("node js");
})