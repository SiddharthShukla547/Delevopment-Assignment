var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var api = require('./Routes/api');
var port = 3000;

var app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

// app.get('/' , (req,res) => {
//     res.send('Sup1')
// })

app.use('/api', api);

app.listen(port, function(){
    console.log("Server running on localhost " + port);
});