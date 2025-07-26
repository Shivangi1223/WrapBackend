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

    if(req.url=="/news"){    //http://localhost:5000/news   -->> req.url is a key or ye check krta h ki port ke baad kya url aaya h :)
       let obj={
        status:1,
        data:[
            {
                newsTitle:'sh',
                newsDes:"Say Hello!"
            },
            {
                newsTitle:"IIP",
                newsDes:"IIP is a good place to learn"
            }
        ]
       }
       res.end(JSON.stringify(obj))
    }
     if(req.url=="/about"){   //http://localhost:5000/about
        
    }
     if(req.url=="/course"){  //http://localhost:5000/course 
        
    }
     if(req.url=="/"){
      res.end("Welcome to my web page!")  
    }
    // res.end("Welcome to my web page!")
})

server.listen("5000") //http://localhost:5000