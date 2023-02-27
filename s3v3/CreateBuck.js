import {S3Client, CreateBucketCommand} from '@aws-sdk/client-s3';


const s3Client = new S3Client();

const bucketParams = {
    Bucket:'parwiz77',
    ACL:'private'
}

const run = async() => {

    try {
        const data = await s3Client.send(new CreateBucketCommand(bucketParams));
        console.log('Bucket is created', data);
        
    }catch(err) {
        console.log('Unable to create bucket');
        
    }

}

run();