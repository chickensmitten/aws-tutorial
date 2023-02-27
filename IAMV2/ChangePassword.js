const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    NewPassword:'<NEW PASSWORD>',
    OldPassword:'<OLD PASSWORD>'
}

iam.changePassword(params, (err, data) => {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})