const AWS = require('aws-sdk')
const iam = new AWS.IAM()

iam.listUsers(function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})