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
var TaskSchema = Schema({
    name: String,
    description: String,
    created: Date,
    due: Date,
    owner: Number,
    status: Number,
    project: Number
});
var Task = mongoose.model('task', TaskSchema);
var nhvuong = new Task({    
    name: 'face2face',
    description: 'using MEAN stack',
    created: new Date(),
    due: new Date(),
    owner: 1,
    status: 1,
    project: 1
  });  
function handleError(err){
    console.log(err)
}
  nhvuong.save(function (err) {
    if (err) return handleError(err);  
  });
module.exports = Task;



