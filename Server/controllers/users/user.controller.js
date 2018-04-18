// var express=require('express');
// var routerUser=express.Router();

var mongoose = require('mongoose');
var User = require('./user.model');

//--- NOT USING IN TEMP
//var exports = module.exports={};

// --------------- Function Button --------------//
exports.Show= function (){
return function(req,res,next){
     User.find().exec(function (err, members) {
     	        if (err) {
            res.send(err);
        }
        res.send(members);
    });
     
}}

exports.Add=function(){
return user = new User({
	email: String,
	first_name: String,
    last_name:String,
    password:String,
    created: Date
})}





exports.Delete=function()
{
	
}


// function Edit()
// {

// }