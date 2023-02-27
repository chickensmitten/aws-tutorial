import {S3Client, DeleteObjectsCommand} from "@aws-sdk/client-s3";


const s3Client = new S3Client();


const bucketParams = {
    Bucket:'parwiz22',
    Delete: {
        Objects:[
            {
                Key:'awsimg.png'
            }, 
            {
                Key:'my.png'
            }
        ]
    }
};


const run = async () => {
    try {
        const data = await s3Client.send(new DeleteObjectsCommand(bucketParams));
        console.log('Objects are deleted');
        
    }catch(err) {
        console.log('Unable to delete objects');
        
    }
};


run();