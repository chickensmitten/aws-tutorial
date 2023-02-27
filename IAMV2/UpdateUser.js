const AWS = require('aws-sdk')
const iam = new AWS.IAM()
const params = {
    NewUserName:'user2',
    UserName:'updatedUser2'
}

iam.updateUser(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data)
    }
})