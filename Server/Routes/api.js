var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var info = require('../Modules/info');

var db = "mongodb+srv://SiD123:SiD123@cluster0.fovub.mongodb.net/Energy_Data?retryWrites=true&w=majority";

// mongoose.connect(db, function(err){
//     if(err){
//         console.log('Error! '+err);
//     }
//     else{
//         console.log('Connected to db');
//     }
// })

//the name of your DATABASE goes here and the name of the collection goes in the model -> info.js
mongoose.connect(db, {useNewUrlParser: true, dbName:"Energy_Data"}, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to DB');
    }
})


router.get('', (req,res) => {
    info.find({},(err, result) => {
        if(err){
            console.log(err);
        }
        else{
           res.json(result);
        }
    })
})

// router.get('/', function(req,res){
//     info.find({})
//     .exec(function(err, result){
//         if(err){
//             console.log(err);
//         }else{
//             res.json(result);
//         }
//     });
// });

// router.get('/',function(req,res){
//     info.find(function(err, result){
//         if(err){
//             console.log(err);
//         }
//         return res.json(result);
//     });
// });

module.exports = router;