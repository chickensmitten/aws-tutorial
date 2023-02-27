import {S3Client, PutObjectCommand} from '@aws-sdk/client-s3';

import {readFileSync} from 'fs';

const s3Client = new S3Client();


const run = async (fileName) => {
    try {
        const fileContent = readFileSync(fileName);
        const bucketParams = {
            Bucket:'parwiz22',
            ACL:'private',
            Key:'awsimg.png',
            Body:fileContent
        };

        const data = await s3Client.send(new PutObjectCommand(bucketParams));
        console.log('Image is uploaded', data);
        
    }catch(err) {
        console.log("Unable to upload the image", err);
        
    }
}

run('aws.png')
