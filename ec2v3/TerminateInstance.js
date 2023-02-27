import {EC2Client, TerminateInstancesCommand} from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    InstanceIds:[
        'i-02bebc4553aa73c48'
    ]
};

const run = async() => {
    try {
        const data = await ec2Client.send(new TerminateInstancesCommand(params));
        console.log('Instance is terminated', data);
        
    }catch(err) {
        console.log('unable to terminate the instance', err);
        
    }
};

run();
