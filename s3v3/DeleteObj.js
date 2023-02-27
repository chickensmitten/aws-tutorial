import {S3Client, DeleteObjectCommand} from '@aws-sdk/client-s3';


const s3Client = new S3Client();


const bucketParams = {Bucket:'parwiz22', Key:'awsimg.png'};

const run = async () => {
    try {
        const data = await s3Client.send(new DeleteObjectCommand(bucketParams));
        console.log('Object is deleted');
        
    }catch(err) {
        console.log('Unable to delete bucket', err);
        
    }
}

run();