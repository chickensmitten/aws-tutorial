const AWS = require('aws-sdk')
const iam = new AWS.IAM()

const params = {
    UserName:'user2'
}

iam.createUser(params, function(err, data){
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})