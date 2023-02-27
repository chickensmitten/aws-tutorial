import {SESClient, SendTemplatedEmailCommand} from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    Source:'email@abc.com',
    Destination:{
        'ToAddresses':['email@abc.com', 'email2@abc.com'],
        'CcAddresses':['email@abc.com']
    },
    ReplyToAddresses:['email@abc.com'],
    Template:'V3Template',
    TemplateData:'{"replace":"value"}'
};


const run = async() => {
    try {
        const data = await sesClient.send(new SendTemplatedEmailCommand(params));
        console.log('Email is send', data);
        
    }catch(err) {
        console.log('Unable to send email', err);
        
    }
};


run();