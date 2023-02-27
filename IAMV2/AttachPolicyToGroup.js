const AWS = require('aws-sdk')

const iam = new AWS.IAM()


const params = {
    GroupName:'S3Admins',
    PolicyArn:'arn:aws:iam::aws:policy/AmazonS3FullAccess'
}

iam.attachGroupPolicy(params, function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    }else {
        console.log(data);
        
    }
})