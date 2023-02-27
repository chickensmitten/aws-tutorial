import {SESClient, ListIdentitiesCommand} from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    IdentityType:'EmailAddress'
};

const run = async() => {
    try {
        const data = await sesClient.send(new ListIdentitiesCommand(params));
        console.log(data['Identities']);
        
    }catch(err) {
        console.log(err);
        
    }
};

run();