const AWS = require('aws-sdk');

const fs = require('fs');


const s3 = new AWS.S3();

const upload_file = (file_name, bucket_name) => {
    const fileContent = fs.readFileSync(file_name);

    const params = {
        Bucket:bucket_name,
        Key:'newfile.txt',
        Body:fileContent
    }

    s3.upload(params, function(err, data) {
        if(err) {
            console.log(err);
            
        }else {
            console.log('File uploaded', data);
            
        }
    })
}

upload_file('file.txt', 'parwiz22')