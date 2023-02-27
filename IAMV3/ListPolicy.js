import {IAMClient, ListPoliciesCommand} from "@aws-sdk/client-iam"

const iamClient = new IAMClient()

const params = {
    Scope:'AWS'
}

const run = async() => {
    try {
        const results = await iamClient.send(new ListPoliciesCommand(params))
        console.log(results);
        return results
        
    } catch(err) {
        console.log(err);
        
    }
}

run()