import {EC2Client, StopInstancesCommand} from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    InstanceIds:[
        "i-02bebc4553aa73c48"
    ]
};

const run = async() => {
    try {
        const data = await ec2Client.send(new StopInstancesCommand(params));
        console.log('Instance has been stopped', data);
        
    }catch(err) {
        console.log("unable to stop instance", err);
        
    }



};

run();