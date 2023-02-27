const AWS = require('aws-sdk');

const ses = new AWS.SES();

const params = {
    Template: {
        'TemplateName':'JavascriptTemp',
        'SubjectPart':'AWS Course with JavaScript & NodeJS',
        'TextPart':'Thanks for buying the course',
        'HtmlPart':'Thanks for buying the course'
    }
};

ses.createTemplate(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log('Template is created', data);
        
    }


})