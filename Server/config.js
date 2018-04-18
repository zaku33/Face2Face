//--------------------------config.js-------------------------------//
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Connection URL  
var db = 'mongodb://localhost:27017/FaceToFace'; 

// Use connect method to connect to the Server  
 mongoose.connect(db, function (error) {
    if (error) {
        console.log(error);
    }
});