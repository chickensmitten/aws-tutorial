import {IAMClient, CreatePolicyCommand, IAM} from "@aws-sdk/client-iam"

const iamClient = new IAMClient()

const policy_document = {
    "Version":"2012-10-17",
    "Statement":[
        {
            "Effect":"Allow",
            "Action":"*",
            "Resource":"*"
        }
    ]
}

const params = {
    PolicyDocument:JSON.stringify(policy_document),
    PolicyName:"V3FullAccessPolicy"
}

const run = async() => {
    try {
        const data = await iamClient.send(new CreatePolicyCommand(params))
        console.log(data);
        
    }catch(err) {
        console.log(err);
        
    }
}

run()