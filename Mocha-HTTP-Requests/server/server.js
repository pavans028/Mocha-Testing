const express=  require("express");

var app = express();

app.get('/', (req, res)=>{
    res.send("Hello HTTP request")
});

var users = [{
    name:"pavan",
    age: 27
},{
    name:"shetty",
    age: 27
},{
    name:"katt",
    age: 27
}];
app.get('/users', (req,res)=>{
    res.send(users);
});

app.listen(process.env.PORT, process.env.IP, ()=>{
    console.log("Express server is up!")
});
module.exports.app = app;