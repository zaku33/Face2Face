var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('config');
//create User Collection structure
var SubTaskSchema = Schema({
    name: String,
    created: Date,
    due: Date,
    status:Number,
    task: Number
    
});
var SubTask = mongoose.model('user', UserSchema);
var nhvuong = new SubTask({    
    name: 'Mongo',
    created: new Date(),
    due: new Date(),
    status:1,
    task: 1
    
  });  
function handleError(err){
    console.log(err)
}
  nhvuong.save(function (err) {
    if (err) return handleError(err);  
  });
module.exports = SubTask;



