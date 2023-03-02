const express = require("express");
let app = express();

app.use(express.json());

let users = [];

//HELPERS

const port = process.env.port || 3000;
// get users

console.log('hello');
app.get("/Users",function(req,res) {
    const request = require('request');
    let url = "https://jsonplaceholder.typicode.com/users";
    
    let options = {json: true};
    
    
    request(url, options, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
           console.log(res);
        };
    });
 });