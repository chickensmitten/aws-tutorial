import {EC2Client, AuthorizeSecurityGroupIngressCommand} from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    GroupId:'sg-033e96e0c360744dc',
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


const run = async() => {
    try {
        const data = await ec2Client.send(new AuthorizeSecurityGroupIngressCommand(params));
        console.log('Rules assigned', data);
    }catch(err) {
        console.log('Can not add inbound rules', err);
        
    }
    
}

run();