import {EC2Client, DeleteKeyPairCommand} from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

const params = {
    KeyName:'v3key'
};

const run = async() => {
    try {
        const data = await ec2Client.send(new DeleteKeyPairCommand(params));
        console.log('key pair is deleted', data);
        
    }catch(err) {
        console.log('unable to delete key pair', err);
        
    }
};

run();