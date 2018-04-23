var mongoose = require('mongoose');
var User = require('./user.model');

// --------------- Function Button --------------//
exports.Show= function(req,res,next){
     User.find().exec(function (err, members) 
     {
     	if (err) {res.send(err);}
        res.send(members);}
        )}



exports.Add=function(req,res,next)
{
    var t = req.body;
    var newUser = new User
    ({
	email: t.email,
    first_name: t.first_name,
    last_name:t.last_name,
    password:t.password,
    created: t.created
    })
    newUser.save(function (err) {
    if (err) return handleError(err);  
    res.send(newUser)
});
}


exports.Edit=function(req,res,next)
{   
    var t = req.body.value;
    var edit = newUser({
    email: t.email,
    first_name: t.first_name,
    last_name:t.last_name,
    password:t.password,
    created: t.created
    })
    edit.save(function (err) {
    if (err) return handleError(err);  
    res.send(newUser)
});
}


    
exports.Delete=function(req,res,next)
{

}
