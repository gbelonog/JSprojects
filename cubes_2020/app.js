const path = require('path');
const express = require('express');

//making an express object
const app = express();

app.use(express.static(path.resolve(__dirname, "./")));

app.listen(666);