//=====================================
//===============SET UP================
//=====================================


var express = require("express");
var app = express(); 
var request = require("request"); 
app.set("view engine", "ejs"); 



//=====================================
//===============Routes================
//=====================================

// "/"

app.get("/", function(req, res){
    res.render("search"); 
}); 

// results
app.get("/results", function(req, res){
    var query = req.query.search; 
    var url = "http://www.omdbapi.com/?s=" + query+ "&apikey=thewdb"; 
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data}); 
        }
    });
}); 


//=====================================
//===============Listener==============
//=====================================

app.listen(3000, function(){
    console.log("Movie app has started !!!");
}); 