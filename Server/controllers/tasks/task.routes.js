var express=require('express');
var routerTask=express.Router();
var TaskModel = require('../tasks/task.model');
var TaskController = require('../tasks/task.controller');

routerTask.get('/users',function(req,res,next){
    TaskModel.find().exec(function (err, members) {
        if (err) {
            res.send(err);
        }
        res.send(members);
    });;
    
});
module.exports=routerTask