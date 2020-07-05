const path = require('path');
const express = require('express');

//making an express object
const app = express();

app.use(express.static(path.resolve(__dirname, "./dist")));
app.use(express.static(path.resolve(__dirname, "./styles")));
app.use(express.static(path.resolve(__dirname, "./img")));

// app.route("/").get(function(req, resp){
//      resp.sendFile('index.html')
// });

app.get('/',function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.listen(666); 