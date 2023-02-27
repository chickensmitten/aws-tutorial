import {IAMClient, DeleteUserCommand} from "@aws-sdk/client-iam";


const iamClient = new IAMClient()


const params = {
    UserName:'bob'
}


const run = async() => {
    try {
        const data = await iamClient.send(new DeleteUserCommand(params));
        console.log('User is delete', data);
        
    }catch(err) {
        console.log(err);
        
    }



}

run();