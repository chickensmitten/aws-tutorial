const AWS = require('aws-sdk');

const ses = new AWS.SES();

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

ses.sendEmail(params, function(err, data) {
    if(err) {
        console.log('unable to send email', err);
        
    }else {
        console.log('email is send', data);
        
    }
});
