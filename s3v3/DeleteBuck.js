import {S3Client, DeleteBucketCommand} from '@aws-sdk/client-s3';


const s3Client = new S3Client();

const params = {
    Bucket:'parwiz22'
};

const run = async () => {
    try {
        const data = await s3Client.send(new DeleteBucketCommand(params));
        console.log('Bucket is deleted');
        
    }catch(err) {
        console.log('unable to delete bucket', err);
        
    }
}

run();