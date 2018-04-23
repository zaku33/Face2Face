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

module.exports = User;