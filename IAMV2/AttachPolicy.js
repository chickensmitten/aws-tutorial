const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    PolicyArn:"arn:aws:iam::<USER ID>:policy/<POLICY NAME>", // Grab this from Policy ARN
    UserName:"<USERNAME>"
}


iam.attachUserPolicy(params, (err, data) => {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})