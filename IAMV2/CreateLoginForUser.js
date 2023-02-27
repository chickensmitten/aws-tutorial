const AWS = require('aws-sdk')


const iam = new AWS.IAM()

const params = {
    Password:'Mypassword2',
    PasswordResetRequired:true,
    UserName:'bob'
}

iam.createLoginProfile(params, function(err, data) {
    if(err) {
        console.log(err);
        
    } else {
        console.log(data);
        
    }
})