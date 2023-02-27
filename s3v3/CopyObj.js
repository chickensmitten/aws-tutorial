import {S3Client, CopyObjectCommand} from '@aws-sdk/client-s3';


const s3Client = new S3Client();

const params = {
    Bucket:'parwiz77',
    CopySource:'parwiz22/awsimg.png',
    Key:'copeid.png'
};


const run = async () => {
    try {
        const data = await s3Client.send(new CopyObjectCommand(params));
        console.log('Object has been copied');
        
    }catch(err) {
        console.log('Unable to copy objects', err);
        
    }



};

run();