const AWS = require('aws-sdk')

const iam = new AWS.IAM()


const params = {
    GroupName:'S3Admins',
    UserName:'john'
}

iam.addUserToGroup(params, (err, data) => {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})
