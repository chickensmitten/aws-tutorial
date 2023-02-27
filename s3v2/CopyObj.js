const AWS = require('aws-sdk');

const s3 = new AWS.S3();


const params = {
    Bucket:'parwizforogh1',
    CopySource:'parwiz22/aws.png',
    Key:'copied.png'
};

s3.copyObject(params, function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    } else {
        console.log('data is copied', data);
        
    }
})




