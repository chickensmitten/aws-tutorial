import {SESClient, VerifyEmailAddressCommand, SES} from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    EmailAddress:"email@abc.com"
};

const run = async() => {
    try {
        const data = await sesClient.send(new VerifyEmailAddressCommand(params));
        console.log('email is added', data);
        
    }catch(err) {
        console.log(err);
        
    }
};

run();