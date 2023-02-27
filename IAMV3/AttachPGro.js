import {IAMClient, AttachGroupPolicyCommand} from '@aws-sdk/client-iam'

const iamClient = new IAMClient()


const params = {
    GroupName:'S3Admins',
    PolicyArn:'arn:aws:iam::aws:policy/AmazonS3FullAccess'
}

const run = async() => {
    try {
        const data = await iamClient.send(new AttachGroupPolicyCommand(params))
        console.log('Policy is attached to group', data);
        
    }catch(err) {
        console.log(err);
        
    }
}

run()