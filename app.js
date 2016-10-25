var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
    var a = "[";
    for(var i = 0; i < 4; i++){
        var b  = new Date();
        var c = new Date();
        var d = ["Activo","Demorado","Cancelado"][Math.floor(Math.random()*3)];
        c.setTime(b.getTime()+Math.floor(Math.random()*5000000));
        a+='{"flightid":'+Math.floor((Math.random()*700)+300)+',"startTime":'+b.getTime()+',"endTime":'+c.getTime()+',"estado":"'+d+'"},';
    }
    var e  = new Date();
    var f = new Date();
    var g = ["Activo","Demorado","Cancelado"][Math.floor(Math.random()*3)];
    c.setTime(b.getTime()+Math.floor(Math.random()*5000000));
    a+='{"flightid":'+Math.floor((Math.random()*700)+300)+',"startTime":'+e.getTime()+',"endTime":'+f.getTime()+',"estado":"'+g+'"}';
    a+="]";
    res.send(JSON.parse(JSON.stringify(a)));
});

app.use(router);

app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});

