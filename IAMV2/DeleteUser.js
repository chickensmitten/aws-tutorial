const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    UserName:'newuser'
}

iam.deleteUser(params, (err, data) => {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})