var User = require('../controllers/users/user.model');

console.log('user model is triggered!')

var nhvuong = new User({    
    email: 'nhvuong',
    first_name: 'nguyenhoang',
    last_name:'vuong',
    password:'123asd',
    created: new Date()
  });  
function handleError(err){
    console.log('ERROR: ', err)
}

nhvuong.save(function (err) {
    if (err) return handleError(err);  
    console.log(nhvuong.last_name + ' is created!');
});