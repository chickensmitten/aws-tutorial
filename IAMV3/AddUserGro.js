import {IAMClient, AddUserToGroupCommand} from "@aws-sdk/client-iam"

const iamClient = new IAMClient()


const params = {
    GroupName:'S3Admins',
    UserName:'updated'
}

const run = async() => {
    try {
        const data = await iamClient.send(new AddUserToGroupCommand(params))
        console.log('Success', data);
        
    } catch(err) {
        console.log(err);
        
    } 
}

run();