const AWS = require('aws-sdk');

const ec2 = new AWS.EC2();

const params = {
    GroupId:'sg-0497cda3723ea122f',
    IpPermissions:[
        {
            'IpProtocol':'tcp',
            'FromPort':80,
            'ToPort':80,
            'IpRanges':[{'CidrIp':'0.0.0.0/0', 'Description':'my description'}]
        },
        {
            'IpProtocol':'tcp',
            'FromPort':22,
            'ToPort':22,
            'IpRanges':[{'CidrIp':'0.0.0.0/0', 'Description':'my description'}]
        }
    ]
}

ec2.authorizeSecurityGroupIngress(params, function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    } else {
        console.log(data);
        
    }
})