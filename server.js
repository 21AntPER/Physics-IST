const express = require('express'); //importing express module
const app = express(); //creating app object

app.set('view engine', 'ejs');  //setting view engine to ejs
app.set('views', './pages/' ); //set local directory of ejs pages
app.use( express.static('public') );    //global directory for css files, images, etc
app.use(express.json()) //any unformatted data sent through will be in json format

app.listen(8080); //running server on port 8080

//Directories
//Home Page
app.get( "/" , (req, res) => {
    res.render("home")
})

//Simulation page
app.get("/simulation/:SimultionName/", (req, res) => { //SimultionName is a variable(param) in request url
    const SimulationName = req.params.SimultionName //get simulation name from request parameters
    res.render("simulation", {SimulationName}) //send simulation name to fetch infromation from client sider
})

//Sign in Page
app.get("/signIn", (req, res) => {
    res.render("signin")
})

//Sign up page
app.get("/signUp", (req, res) => {
    res.render("signup")
})

app.get("/account/:id", (req, res) => {
    const id = req.params.id
    //Write code to fetch account data from SQL database and then render page
})