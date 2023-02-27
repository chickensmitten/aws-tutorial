const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

const params = {
    Description:'security group with javascript',
    GroupName:'sdksecurity'
};

ec2.createSecurityGroup(params, function(err, data) {
    if(err) {
        console.log("unable to create security group",err);
        
    } else {
        console.log(data);
        
    }
})