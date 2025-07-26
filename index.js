// const {addToCart, Setmail} = require("./cartModule");

// console.log("Welcome to my Backend journey");
// console.log(10+20)
// let l=[10,20,30,40,50]
// l.forEach((value, index)=>{
//  console.log(value, index)
// })
// console.log(addToCart());
// console.log(Setmail());
// console.log("Welcome");



// SERVER CREATION --->>>>>
let http=require("http")


let server=http.createServer((req, res)=>{
    res.end("Welcome to my web page!")
})

server.listen("5000") //http://localhost:5000