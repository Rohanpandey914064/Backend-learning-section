
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on("rohan pandey",(e)=>{
    console.log("rohan function working",e);
});

//raise an event
emitter.emit("rohan pandey",{id:1,name:"rohan"});

//example

// emitter.on("logger",(e)=>{
//     console.log(e.print);
// })
// const message = "hii every one I'm rohan pandey";
// emitter.emit("logger",{print:message})