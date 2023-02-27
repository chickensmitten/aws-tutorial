const AWS = require('aws-sdk');

const ses = new AWS.SES();

const params = {
    Destination:{
        "ToAddresses":[
            "email@abc.com",
            "email2@abc.com"
        ]
    },

    Message: {
        Body: {
            Html:{
                Charset:"UTF-8",
                Data:"Thanks for buying the course"
            },
            Text: {
                Charset:"UTF-8",
                Data:"AWS Course with JavaScript & NodeJS"
            }
        },

        Subject: {
            Charset:"UTF-8",
            Data:"AWS Course with JavaScript & NodeJS"
        }
    },

    Source: "admin@geekscoders.com"
};

ses.sendEmail(params, function(err, data) {
    if(err) {
        console.log('unable to send email', err);
        
    }else {
        console.log('email is sent', data);
        
    }
});