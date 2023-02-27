import {EC2Client, RunInstancesCommand} from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    ImageId:'ami-0c02fb55956c7d316',
    MinCount:1,
    MaxCount:1,
    InstanceType:'t2.micro',
    KeyName:'v3key',

    SecurityGroups:[
        'v3group'
    ]
};


const run = async() => {
    try {
        const data = await ec2Client.send(new RunInstancesCommand(params));
        console.log('Instance is created', data);
        
    }catch(err) {
        console.log('Unable to create instance', err);
        
    }
}

run();