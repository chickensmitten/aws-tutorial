import {SESClient, SendEmailCommand} from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    Destination:{
        "ToAddresses":[
            "email@abc.com",
            "email@abc.com"
        ]
    },

    Message: {
        Body: {
            Html:{
                Charset:"UTF-8",
                Data:"Thanks for buying the course, and please rate and review the course"
            },
            Text: {
                Charset:"UTF-8",
                Data:"AWS Course with JavaScript & NodeJS, and please rate and review the course"
            }
        },

        Subject: {
            Charset:"UTF-8",
            Data:"AWS Course with JavaScript & NodeJS"
        }
    },

    Source: "email@abc.com"
};


const run = async() => {
    try {
        const data = await sesClient.send(new SendEmailCommand(params));
        console.log('Email is sent', data);
        
    }catch(err) {
        console.log('unable to send email', err);
        
    }


};

run();