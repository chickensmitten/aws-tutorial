const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

const params = {
    InstanceIds:[
        "i-064c3011f90c7e4c8"
    ]
}

ec2.stopInstances(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log('Instance is stopped');
        
    }
})