const AWS = require('aws-sdk');

const s3 = new AWS.S3();

s3.getObject(
    {Bucket:"parwiz22", Key:"newfile.txt"},
    function(err, data) {
        if(err) {
            console.log('Failed to get', err, err.stack);
            
        } else {
            console.log(' Loaded ' + data.ContentLength + " bytes ");
            
        }
    }
)