import {EC2Client, DescribeInstancesCommand} from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    InstanceIds:[
        'i-02bebc4553aa73c48'
    ]
};


const run = async() => {
    try {
        const data = await ec2Client.send(new DescribeInstancesCommand(params));
        console.log(data);
        
    }catch(err) {
        console.log(err);
        
    };



}

run();