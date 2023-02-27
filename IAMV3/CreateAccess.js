import {IAMClient, CreateAccessKeyCommand} from "@aws-sdk/client-iam"


const iamClient = new IAMClient();

const params = {
    UserName:'bob'
}


const run = async() => {
    try {
        const data = await iamClient.send(new CreateAccessKeyCommand(params));
        console.log('Access key created', data);
        
    }catch(err) {
        console.log(err);
        
    }
}


run()