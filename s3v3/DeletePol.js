import {S3Client, DeleteBucketPolicyCommand} from '@aws-sdk/client-s3';

const s3Client = new S3Client();

const bucketParams = {Bucket:"parwiz22"};


const run = async () => {
    try {
        const data = await s3Client.send(new DeleteBucketPolicyCommand(bucketParams));
        console.log('Success', data + " , bucket policy delete");
        
    }catch(err) {
        console.log("error", err);
        
    }
};


run();