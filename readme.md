# AWS SDK References and Tutorial

## Intro
- It is good practice to create new IAM User and use that user's details instead of using the root details.
- every created user is limited by their role and geography
- Start with creating an IAM user, add to a group or given relevant permissions
- install aws-sdk with `npm install aws-sdk` to install version 2
- Use this as [AWS policy generator](https://awspolicygen.s3.amazonaws.com/policygen.html)

## AWS SDK Version2
- User functions
  - [create user](/IAMV2/CreateUser.js)
  - [get user info](/IAMV2/GetUserInfo.js)
  - [list user](/IAMV2/ListAll.js)
  - [update user](/IAMV2/UpdateUser.js)
  - [delete user](/IAMV2/DeleteUser.js). All policies and access keys should be removed, deleted or detached from the user before deleting the user.
- Policies functions
  - [create policies](/IAMV2/CreatePolicy.js)
  - [list policies](/IAMV2/ListPolicy.js)
  - [attach policies](/IAMV2/AttachPolicy.js)
  - [detach policies](/IAMV2/DetachPolicy.js)
- User group functions
  - [get user group](/IAMV2/GetUserGroup.js)
  - [create user group](/IAMV2/CreateUserGroup.js)
  - [add user to group](/IAMV2/AddUserToGroup.js)
  - [attach policy to group](/IAMV2/AttachPolicyToGroup.js)
  - [detach policy from group](/IAMV2/DetachPolicyFromGroup.js)
- Create user access key
  - [create user access key](/IAMV2/CreateUserAccessKey.js)
- Login Profile
  - [create login for user](/IAMV2/CreateLoginForUser.js). Login profile creates a password for an IAM user so that the user can login with a AWS dashboard. This is because when a new user is created through Javascript and CLI. No password is assigned to the user
  - [delete login of user](/IAMV2/DeleteLoginOfUser.js)
  - [change user password](/IAMV2/ChangePassword.js)

## AWS SDK Version3
- Refer to this for [AWS SDK Version3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
- Why Version3?
  - Modularized packages: Users can now use a separate package for each service.
  - New middleware stack: Users can now use a middleware stack to control the lifecycle of an operation call.
  - Supports Typescript
- functions in version 3 is similar to version 2
  - [create user](/IAMV3/CreateUser.js)
  - [list user](/IAMV3/ListUser.js)
  - [update user](/IAMV3/UpdateUser.js)
  - [create policy](/IAMV3/CreatePolicy.js)
  - [list policies](/IAMV3/ListPolicy.js)
  - [attach policy to user](/IAMV3/AttachPol.js)
  - [detach policy from user](/IAMV3/DetachPol.js)
  - [create user group](/IAMV3/CreateGroup.js)
  - [attach policy to user group](/IAMV3/AttachPGro.js)
  - [add user to group](/IAMV3/AddUserGro.js)
  - [detach policy from group](/IAMV3/DetachPGro.js)
  - [create access key for user](/IAMV3/CreateAccess.js)
  - [create login for user](/IAMV3/CreateLogin.js)
  - [delete login profile of user](/IAMV3/DeleteLogin.js)
  - [delete user](/IAMV3/DeleteUser.js)

## CloudShell
- Browser based CLI for AWS
- Commands
  - `aws --version`
  - `aws iam list-users`
  - `aws iam create-user --user-name somenewusername`
  - `aws iam create-login-profile --generate-cli-skeleton > create-login-profile.json`
  then `pwd` then download file to `/home/cloudshell-user/create-login-profile.json` then inside it, fill it up with requeste details
  ```
  // create a .json file and input the details
  {
    Password:'Mypassword2',
    PasswordResetRequired:true,
    UserName:'bob'
  }
  ```
  then upload the file to Cloudshell, then run `aws iam create-login-profile --cli-input-json file://craete-login-profile.json` to run the file.
  - `aws iam attach-user-policy --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess --user-name someusername`
  - `aws iam create-access-key --user-name someusername`
  - `aws iam create-group --group-name SomeGroupName`

## DynamoDB
<!-- To do -->

## ElasticCache
- Fully managed and memory caching service
- Compatible with Redis and Memcache
- create a redis -> create an ec2 -> in ec2 shell add the following command below -> then use the primary redis endpoint -> if connection not refused, it is a success
```
sudo amazon-linux-extras install epel
sudo yum update
sudo yum install redis
redis-cli --version


redis-cli -h   -p 6379
```

## S3 version 2
- [Amazon S3 Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
- When creating an S3, unblock public access with Access Control List (ACL) enabled for public to read.
- Can determine ACL with `ACL:'private'`, `ACL:'public-read'`, or `ACL:'public-read-write'`
- When ACL is `private`, can only open the image through the "Open" button in AWS S3 dashboard. Won't be able to access the image through copy and paste.
- Refer to [s3 folder](/s3v2/) for executing S3 version 2 JS code.
  - [create bucket](/s3v2/CreateBucket.js)
  - [upload image to bucket](/s3v2/UploadImg.js)
  - [listing buckets](/s3v2/ListBuck.js)
  - [delete buckets](/s3v2/DeleteBuck.js)
  - [delete non empty bucket](/s3v2/DeleteNone.js)
  - [upload file to bucket](/s3v2/UploadFile.js)
  - [get object from bucket](/s3v2/GetObj.js)
  - [list objects](/s3v2/ListFiles.js)
  - [list filtered objects](/s3v2/ListFilter.js)
  - [get object attributes](/s3v2/GetAttribute.js)
  - [copy object](/s3v2/CopyObj.js)
  - [delete object](/s3v2/DeleteObj.js)
  - [delete multiple object](/s3v2/DeleteMulti.js)
- Hosting static website in s3
  - In react or next get the built files or folder in `build` and upload as files to s3

## S3 version 3
- `npm install @aws-sdk/client-s3`
- Refer to [s3 folder](/s3v2/) for executing S3 version 3 JS code.
  - [create bucket](/s3v3/CreateBuck.js)
  - [generate bucket policy](/s3v3/CreatePol.js). changes the bucket policy in permissions.
  - [delete bucket policy](/s3v3/DeleteBuck.js)
  - [upload image](/s3v3/UploadImage.js). change ACL policy to `public-read` to allow public to see the files.
  - [list bucket](/s3v3/UploadImage.js)
  - [delete bucket](/s3v3/DeleteBuck.js)
  - [delete object](/s3v3/DeleteObj.js)
  - [delete multiple object](/s3v3/DeleteMObj.js)
  - [list object](/s3v3/ListObj.js)
  - [copy object](/s3v3/CopyObj.js)

## Relational Database Service RDS
<!-- To do -->

## EC2 Version 2
- When launching instances, select an Amazon Machine Image (AMI)
- Recommended to choose Ubuntu instance
- Use EC2 instance connect to get into the instance's CLI
- Commands
  - [create key pair for instance](/ec2v2/CreateKey.js) then save it in local directory using the file system `fs`
  - [create a security group](/ec2v2/CreateSecurity.js), which acts as our virtual firewall to control inbound and outbound rules. Like allow traffic from all IPs.
  - [create inbound rules](/ec2v2/CreateRule.js), specify rules for security group
  - [create instance](/ec2v2/CreateInstance.js)
  - [describe instance](/ec2v2/DescribeInfo.js)
  - [get and describe security group](/ec2v2/GetSecurity.js)
  - [stop instance](/ec2v2/StopInstance.js)
  - [terminate instance](/ec2v2/TerminateInstance.js)
  - [delete security group](/ec2v2/DeleteSecurity.js)
  - [delete key pair](/ec2v2/DeleteKey.js)

## EC2 Version 3
- Commands
  - [create key pair for instance](/ec2v3/CreateKey.js)
  - [create a security group](/ec2v3/CreateSec.js)
  - [create inbound rules](/ec2v3/CreateRule.js)
  - [create instance](/ec2v3/CreateInstance.js)
  - [describe instance](/ec2v3/DescribeInfo.js)
  - [get and describe security group](/ec2v3/GetSec.js)
  - [stop instance](/ec2v3/StopInstance.js)
  - [terminate instance](/ec2v3/TerminateInstance.js)
  - [delete security group](/ec2v3/DeleteSec.js)
  - [delete key pair](/ec2v3/DeleteKey.js)

## EC2 EBS
<!-- To do -->
- [user data](/ec2v3/UserData.js). ***Study more to understand value proposition***
- when creating an instance, can assign a security group for that instance. This allows all users in that security group to access the instance.
- Amazon EBS and Snapshot. ***Study more to understand value proposition***

## Deploy NodeJS with RDS and EC2 according to this project
- Refer to [my-app](/my-app/) for code
- `npm init`
- Create a DB
- Launch an EC2 instance
- Deploy NodeJS to EC2 instance
  - install node in EC2 instance
  - install git in EC2 instance
  - clone git project in EC2 instance
  ```
  sudo yum install -y gcc-c++ make
  curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
  sudo yum install -y nodejs
  sudo yum install -y git
  ```
- Start project by running `node app.js`

## Elastic Load Balancing
<!-- To Do -->

## Lamda
<!-- To Do -->

## Simple Email Service (SES)
- verify email identity to test send emails to the verified emails during sandbox mode
- can choose scenario to simulate situations like bounce during sandbox
- Version 2 Commands
  - [verify email](/SESV2/VerifyEmail.js)
  - [list identity email](/SESV2/ListIde.js)
  - [create email templates](/SESV2/CreateTemp.js)
  - [get email templates](/SESV2/GetTemp.js)
  - [send template email](/SESV2/SendMail.js)
  - [send plain email](/SESV2/SendPlain.js)
  - [send html email](/SESV2/SendHtml.js)
- Version 3 commands
  - [verify email](/SESV3/VerifyEmail.js)
  - [list identity email](/SESV3/ListIde.js)
  - [create email templates](/SESV3/CreateTemp.js)
  - [get email templates](/SESV3/GetTemp.js)
  - [send template email](/SESV3/SendMail.js)
  - [send plain email](/SESV3/SendPlain.js)
  - [send html email](/SESV3/SendHtml.js)