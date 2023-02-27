const AWS = require('aws-sdk');

const fs = require('fs');

const s3 = new AWS.S3();

const uploadImage = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket:'parwiz22',
        ACL:'public-read',
        Key:'awsimg.png',
        Body:fileContent
    };

    s3.putObject(params, function(err, data) {
        if(err) {
            console.log(err);
            
        }else {
            console.log(data);
            
        }
    })
}


uploadImage('aws.png');