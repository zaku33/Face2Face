var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create User Collection structure
var UserSchema = Schema({
    email: String,
    first_name: String,
    last_name:String,
    password:String,
    created: Date
});
var User = mongoose.model('user', UserSchema);
var nhvuong = new User({    
    email: 'nhvuong',
    first_name: 'nguyenhoang',
    last_name:'vuong',
    password:'123asd',
    created: new Date()
  });  
function handleError(err){
    console.log(err)
}
  nhvuong.save(function (err) {
    if (err) return handleError(err);  
  });
module.exports = User;



