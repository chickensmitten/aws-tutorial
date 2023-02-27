const AWS = require('aws-sdk')

const iam = new AWS.IAM()


const params = {
    PolicyArn:"arn:aws:iam::<USER ID>:policy/newuserfullpolicy",
    UserName:"bob"
}

iam.detachUserPolicy(params , (err, data) => {
    if(err) {
        console.log(err, err.stack);
        
    }else {
        console.log(data);
        
    }
})