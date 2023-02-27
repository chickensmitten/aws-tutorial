import {EC2Client, RunInstancesCommand} from '@aws-sdk/client-ec2';


const ec2Client = new EC2Client();

const userData = `
#!/bin/bash
yum update -y 
yum install -y httpd
chkconfig httpd on
service httpd start
echo "<h1>Welcome to AWS with JavaScript Course</h1>" > /var/www/html/index.html
`

const userDataEncoded = new Buffer(userData).toString('base64')


const params = {
    ImageId:'ami-0b5eea76982371e91',
    MinCount:1,
    MaxCount:1,
    InstanceType:'t2.micro',
    KeyName:'mykey',
    SecurityGroups:[
        'launch-wizard-1'
    ],
    UserData:userDataEncoded

}

const run = async() => {
    try {
        const data = await ec2Client.send(new RunInstancesCommand(params));
        console.log('Instance is created', data)
    }catch(err) {
        console.log('Unable to create instance', err)
    }
}

run();