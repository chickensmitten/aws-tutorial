import {SESClient, SendEmailCommand} from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const html_contents = "<html>" +
        "<h1 style='text-align:center'>AWS with JavaScript and NodeJS</h1>" +
        "<p style='color:red'>Welcome to the course and thanks for the buying</p>"

+ "</html>";


const params = {
    Destination: {
        "ToAddresses":[
            "email@abc.com",
            "email2@abc.com"
        ]
    },

    Message: {
        Body: {
            Html: {
                Charset:'UTF-8',
                Data:html_contents
            }
        },
        Subject: {
            Charset:'UTF-8',
            Data:"AWS Course with JavaScript & NodeJs"
        }
    },
    Source:"email@abc.com"
};


const run = async() => {
    try {
        const data = await sesClient.send(new SendEmailCommand(params));
        console.log('Email is sent', data);
        
    }catch(err) {
        console.log('unable to send email', err);
        
    }
}

run();