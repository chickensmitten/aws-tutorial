const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();


const params = {
    ImageId:'ami-0c02fb55956c7d316',
    MinCount:1,
    MaxCount:1,
    InstanceType:'t2.micro',
    KeyName:'mykey',

    SecurityGroups:[
        'sdksecurity'
    ]
}


ec2.runInstances(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})