let express = require("express");

let app = express();
app.use(express.json());

// Home route
app.get("/", (req, res) => {    
  res.send({ status: 1, msg: "Hello!" });  
});

// Simple route
app.get("/name", (req, res) => {
  res.send({ status: 2, msg: "Hii Shivi!" });
});

// Params route
app.get("/name/:id", (req, res) => {
  let currentId = req.params.id;
  res.send("Hey! I am a Software Developer. " + currentId);
});

// About route
app.get("/about", (req, res) => {
  res.send({ status: 3, msg: "I am A MERN Stack Developer!" });
});

// Login route (POST)
app.post("/Login", (req, res) => {
  console.log(req.body);  // check incoming data in terminal

  res.status(200).json({
    status: 4,
    msg: "For Login API!",
    bodydata: req.body,
    queryData: req.query
  });
});

// Server listen
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
