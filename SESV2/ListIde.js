const AWS = require('aws-sdk');

const ses = new AWS.SES();

const params = {
    IdentityType:'EmailAddress'
};

ses.listIdentities(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})