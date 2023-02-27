import {S3Client, PutBucketPolicyCommand} from '@aws-sdk/client-s3';

const s3Client = new S3Client();

const BUCKET_NAME='parwiz22';

const readOnlyUserPolicy = {
    Version:"2012-10-17",
    Statement:[
        {
            Sid:"AddPerm",
            Effect:"Allow",
            Principal:"*",
            Action:["s3:GetObject"],
            Resource:[""],
        }
    ]
}


const bucketResource = "arn:aws:s3:::" + BUCKET_NAME + "/*";
readOnlyUserPolicy.Statement[0].Resource[0]=bucketResource;


const bucketPolicyParams = {
    Bucket:BUCKET_NAME,
    Policy:JSON.stringify(readOnlyUserPolicy)
};


const run = async() => {
    try {
        const data = await s3Client.send(new PutBucketPolicyCommand(bucketPolicyParams));
        console.log('Policy added to the bucket', data);
        
    }catch(err) {
        console.log('Can not add the policy', err);
        
    }
}

run();