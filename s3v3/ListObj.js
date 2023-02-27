import {S3Client, ListObjectsCommand} from '@aws-sdk/client-s3';


const s3Client = new S3Client();

const bucketParams = {Bucket:'parwiz22'};

const run = async () => {
    try {
        const data = await s3Client.send(new ListObjectsCommand(bucketParams));
        //console.log(data.Contents);
        data.Contents.forEach(function(element, index) {
            console.log(element.Key);
            
        })
    

    }catch(err) {
        console.log(err);
        
    }
}

run();