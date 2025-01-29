const express = require('express');
const { default: firebase } = require('firebase/compat/app');
const path = require('path')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')

app.get("/", function(req, res){
    res.render("index");
})

//creating a dynamic rout
app.get("/profile/:username", function(req, res){
    res.send(`Name is, ${req.params.username}`);
})

app.listen(3000, ()=>{console.log("Running at http://localhost:3000")});
