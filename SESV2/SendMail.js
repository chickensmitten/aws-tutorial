const AWS = require('aws-sdk');

const ses = new AWS.SES();

const params = {
    Source:'admin@geekscoders.com',
    Destination:{
        'ToAddresses':['email@abc.com', 'email2@abc.com'],
        'CcAddresses':['email@abc.com']
    },
    ReplyToAddresses:['email@abc.com'],
    Template:'JavascriptTemp',
    TemplateData:'{"replace":"value"}'
};

ses.sendTemplatedEmail(params, function(err, data) {
    if(err) {
        console.log('unable to send email', err);
        
    }else {
        console.log('email is send', data);
        
    }


})