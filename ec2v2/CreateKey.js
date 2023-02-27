const AWS = require('aws-sdk');

//AWS.config.update({region:'us-east-1'});

const fs = require('fs');


const ec2 = new AWS.EC2();

const params = {
    KeyName:'mykey',
    KeyType:'rsa'
};

ec2.createKeyPair(params, function(err, data) {
    if(err) {
        console.log('Unable to create key pair', err);
        
    } else {

        console.log('Key pair has been created');
        fs.writeFile('mykey.pem', data.KeyMaterial, (err) => {
            if(err) {
                console.log('Failed to save the file');
                
            }else {
                console.log('file saved');
                
            }
        })
        
    }
})