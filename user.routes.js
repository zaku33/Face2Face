var express=require('express');
var router = express.Router();
var UserController = require('./user.controller');

router.get('/',UserController.Show)
router.post('/',UserController.Add)
router.put('/',UserController.Edit)
router.delete('/',UserController.Delete)
module.exports =router;















// ------------------ PROTOTYPE FOR USING JSON TO CONVERT OBJECT INTO SCRIPT
//----------------------------------------------------------------------

// routerUser.get('/users',function(req, res, next){
// 	//console.log(UserController.Show());
// 	UserModel.find().exec(function (err, members) {
//         if (err) {
//             res.send(err);
//         }
//         res.send(members);
// 	// res.json(UserController.Show());
// })});

//----------------------------------------------------------------------


//------------ DUNNO WHAT IS THIS SHIT --------------------------------
//----------------------------------------------------------------------
// routerUser.get('/users',function(req,res,next){
     // UserModel.find().exec(function (err, members) {
     //    if (err) {
     //        res.send(err);
     //    }
     //    res.send(members);
//     });
// });

//----------------------------------------------------------------------


//-----------SAME AS ABOVE-----------------------------------------------
//----------------------------------------------------------------------
// routerUser.get('/users',function(req,res,next)
// {
//      UserModel.find().exec(function (err, members) 
//     {
//         if (err) 
//         {
//             res.send(err);
//         }
//         var txt = TaskController.delete();
//         res.send(txt);        
//     }
//     );
// });




