const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

const params = {
    GroupId:'sg-0497cda3723ea122f'
}

ec2.deleteSecurityGroup(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log('security group is deleted');
        
    }
})