var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('config');

//create User Collection structure
var ProjectSchema = Schema({
    name: String,
    description: String,
    created: Date
});
var Project = mongoose.model('user', UserSchema);
var nhvuong = new Project({    
    name: 'F2F',
    description: 'using MEAN stack',
    created: new Date()
  });  
function handleError(err){
    console.log(err)
}
  nhvuong.save(function (err) {
    if (err) return handleError(err);  
  });
module.exports = Project;



