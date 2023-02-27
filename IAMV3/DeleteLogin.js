import {IAMClient, DeleteLoginProfileCommand} from "@aws-sdk/client-iam";


const iamClient = new IAMClient()

const params = {
    UserName:'bob'
}


const run = async() => {
    try {
        const data = await iamClient.send(new DeleteLoginProfileCommand(params));
        console.log('Login profile delete', data);
        return data;
        
    }catch(err) {
        console.log(err);
        
    }


}

run();