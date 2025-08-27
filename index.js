// // // const {addToCart, Setmail} = require("./cartModule");

const {firstModule, myModule} = require("./FirstModule")



// // // console.log("Welcome to my Backend journey");
// // // console.log(10+20)
// // // let l=[10,20,30,40,50]
// // // l.forEach((value, index)=>{
// // //  console.log(value, index)
// // // })
// // // console.log(addToCart());
// // // console.log(Setmail());
// // // console.log("Welcome");



// // // SERVER CREATION --->>>>>
// // // let http=require("http")


// // // let server=http.createServer((req, res)=>{

// // //     if(req.url=="/news"){    //http://localhost:5000/news   -->> req.url is a key or ye check krta h ki port ke baad kya url aaya h :)
// // //        let obj={
// // //         status:1,
// // //         data:[
// // //             {
// // //                 newsTitle:'sh',
// // //                 newsDes:"Say Hello!"
// // //             },
// // //             {
// // //                 newsTitle:"IIP",
// // //                 newsDes:"IIP is a good place to learn"
// // //             }
// // //         ]
// // //        }
// // //        res.end(JSON.stringify(obj))
// // //     }
// // //      if(req.url=="/about"){   //http://localhost:5000/about
        
// // //     }
// // //      if(req.url=="/course"){  //http://localhost:5000/course 
        
// // //     }
// // //      if(req.url=="/"){
// // //       res.end("Welcome to my web page!")  
// // //     }
// // //     // res.end("Welcome to my web page!")
// // // })

// // // server.listen("5000") //http://localhost:5000





// // // EXPRESS CREATION -->>

// // // let express = require("express");

// // // let app = express();
// // // app.use(express.json())

// // // app.get("/", (req, res) => {    
// // //   res.send({ status: 1, msg: "Hello!" });  // `res` is an object (in Express), and we don't need to use `JSON.stringify` on the response data.
// // //                                            // This is because `res.json()` internally converts the data to JSON format
// // //                                           // and also sets the appropriate header to tell the browser that the response is of type JSON.
// // //     });
// // // app.get("/name", (req, res)=>{
// // //     res.send({status:2, msg:"Hii Shivi!"});
// // // })

// // // // My own routes -->>
// // // app.get("/about", (req, res)=>{
// // //     res.send({status:3, msg:"I am A MERN Stack Developer!"});
// // // })

// // // app.post("/Owner",(req, res)=>{
// // //     console.log(req.body)  //Object form and key value pairs -->>
// // //     res.send(
// // //         {
// // //             status:4, 
// // //             msg:"For Owner!",
// // //             bodydata:req.body,
// // //             queryData: req.query

// // //         }
// // //     );
// // // })




// // // app.listen(5000)

// // // app.listen(5000, () => {
// // //   console.log("Server running on http://localhost:5000");
// // // });



// // // // PARAMS CREATION -->>


// // // let express = require("express");

// // // let app = express();
// // // app.use(express.json())

// // // app.get("/", (req, res) => {    
// // //   res.send({ status: 1, msg: "Hello!" });  
// // //     });
// // // app.get("/name", (req, res)=>{
// // //     res.send({status:2, msg:"Hii Shivi!"});
// // // })


// // // // Params -->>  Important :)

// // // app.get("/name/:id", (req,res)=>{

// // //     // For access params values -->>>>>
// // //     let currentId = req.params.id
// // //     res.send("Hey! I am a Software Developer." + currentId);
// // // })

// // // // My own routes -->>
// // // app.get("/about", (req, res)=>{
// // //     res.send({status:3, msg:"I am A MERN Stack Developer!"});
// // // })

// // // app.post("/Owner",(req, res)=>{
// // //     console.log(req.body)  //Object form and key value pairs -->>
// // //     res.send(
// // //         {
// // //             status:4, 
// // //             msg:"For Owner!",
// // //             bodydata:req.body,
// // //             queryData: req.query

// // //         }
// // //     );
// // // })




// // // app.listen(5000)



// // // A developer can handle the response in two different ways.-->>


// // let express = require("express");

// // let app = express();
// // app.use(express.json())

// // app.get("/", (req, res) => {    
// //   res.send({ status: 1, msg: "Hello!" });  
// //     });
// // app.get("/name", (req, res)=>{
// //     res.send({status:2, msg:"Hii Shivi!"});
// // })


// // // Params -->>  Important :)

// // app.get("/name/:id", (req,res)=>{

// //     // For access params values -->>>>>
// //     let currentId = req.params.id
// //     res.send("Hey! I am a Software Developer." + currentId);
// // })

// // // My own routes -->>
// // app.get("/about", (req, res)=>{
// //     res.send({status:3, msg:"I am A MERN Stack Developer!"});
// // })

// // // app.post("/Owner",(req, res)=>{
// // //     console.log(req.body)  //Object form and key value pairs -->>
// // //     res.send(
// // //         {
// // //             status:4, 
// // //             msg:"For Owner!",
// // //             bodydata:req.body,
// // //             queryData: req.query

// // //         }
// // //     );
// // // })

// // app.post("/Login",(req, res)=>{
// //     console.log(req.body)  //Object form and key value pairs -->>
// // //     res.send(
// // //         {
// // //             status:4, 
// // //             msg:"For Login API!",
// // //             bodydata:req.body,
// // //             queryData: req.query

// // //         }
// // //     );
// // // })

// // // 200 means your request was successful and the server responded correctly.

// // res.status(200).json(
    
// // )



// // })

// // app.listen(5000)



// // A developer can handle the response in two different ways.-->>


// let express = require("express");

// let app = express();
// app.use(express.json())

// app.get("/", (req, res) => {    
//   res.send({ status: 1, msg: "Hello!" });  
//     });
// app.get("/name", (req, res)=>{
//     res.send({status:2, msg:"Hii Shivi!"});
// })


// // Params -->>  Important :)

// app.get("/name/:id", (req,res)=>{

//     // For access params values -->>>>>
//     let currentId = req.params.id
//     res.send("Hey! I am a Software Developer." + currentId);
// })

// // My own routes -->>
// app.get("/about", (req, res)=>{
//     res.send({status:3, msg:"I am A MERN Stack Developer!"});
// })

// // app.post("/Owner",(req, res)=>{
// //     console.log(req.body)  //Object form and key value pairs -->>
// //     res.send(
// //         {
// //             status:4, 
// //             msg:"For Owner!",
// //             bodydata:req.body,
// //             queryData: req.query

// //         }
// //     );
// // })

// app.post("/Login",(req, res)=>{
//     console.log(req.body)  //Object form and key value pairs -->>
// //     res.send(
// //         {
// //             status:4, 
// //             msg:"For Login API!",
// //             bodydata:req.body,
// //             queryData: req.query

// //         }
// //     );
// // })

// // 200 means your request was successful and the server responded correctly.

// res.status(200).json(
    
// )



// })

// app.listen(5000)



// console.log("Welcome")
// console.log(1+0)
// let l=[12,14,16,14,18]
// l.forEach((value, index)=>{
//     console.log(value, index)
// })

// console.log(firstModule());
// console.log(myModule());
// console.log("Shivi");



// Server creation -->>
// let http = require("http")

// // 1.) create server -->>
// let server = http.createServer( (req, res)=>{

//     if(req.url=="/news"){
//            let object={
//             status:1,
//             data:[
//                 {
//                     newsTitle: 'shivi',
//                     newsDes: 'shivangi'
//                 },
//                 {
//                     newsTitle: 'IAS shivi',
//                     newsDes: 'IAS shivangi'
//                 }
//             ]
//            };
//            res.end(JSON.stringify(object));
//     }
//     if(req.url=="/about"){
        
//     }
//     if(req.url=="/course"){
        
//     }
//     if(req.url=="/"){
        
//     }
//       res.end("Welcome!")
// })

// //2.) Start server -->>
// server.listen("1000") // http://localhost:1000


let express = require("express")

let app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send({ status: 1, message: "Home page api" })
})

app.get("/news", (req, res) => {
    res.send({ status: 2, message: "News api" })
})

app.get("/products", (req, res) => {
    res.send({ status: 10, message: "Welcome to my web page!" })
})

app.get("/news/:id", (req, res) => {  // params example
    res.send("News details API")
})

// 👇 this was your misplaced code; now fixed in a new route
app.post("/test", (req, res) => {
    res.send({
        status: 5,
        message: "Hey Shivi!",
        bodyData: req.body,   // data from body
        queryData: req.query  // data from query string
    })
})

app.listen(1000, () => {
    console.log("Hey Shivi!") //http://localhost:1000
})
