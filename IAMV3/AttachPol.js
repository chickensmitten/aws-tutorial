import { AttachUserPolicyCommand, IAMClient} from "@aws-sdk/client-iam"

const iamClient = new IAMClient()


const params = {
    PolicyArn:"arn:aws:iam::651366224884:policy/V3FullAccessPolicy",
    UserName:'test'
}

const run = async() => {
    try {
        const data = await iamClient.send(new AttachUserPolicyCommand(params))
        console.log('Attached the policy', data);
        
    }catch(err) {
        console.log(err);
        
    }
}

run()