
const file = require('fs');

//sync
// const files = file.readdirSync('./');
// console.log(files);
//Async
file.readdir('8',function(err,file){
    if(err) console.log("Error",err);
    else console.log(file);
})