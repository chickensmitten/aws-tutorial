import {EC2Client, DeleteSecurityGroupCommand} from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    GroupId:'sg-033e96e0c360744dc'
};

const run = async() => {
    try {
        const data = await ec2Client.send(new DeleteSecurityGroupCommand(params));
        console.log('Security group deleted', data);
        
    }catch(err) {
        console.log('unable to delete', err);
        
    }
};

run();