const AWS = require('aws-sdk')

const iam = new AWS.IAM()


const params = {
    GroupName:'RDSAdmins',
    PolicyArn:'arn:aws:iam::aws:policy/AmazonRDSFullAccess'
}

iam.detachGroupPolicy(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})