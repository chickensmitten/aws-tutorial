const AWS = require('aws-sdk');

const ses = new AWS.SES();

/*
const params = {
    TemplateName:'JavascriptTemp'

};

ses.getTemplate(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data['Template']);
        
    }
})

*/

ses.listTemplates(function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data['TemplatesMetadata']);
        
    }
})