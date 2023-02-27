# AWS SDK

## Setup
- It is good practice to create new IAM User and use that user's details instead of using the root details.
- Start with creating an IAM user, add to a group or given relevant permissions
- install aws-sdk with `npm install aws-sdk` to install version 2

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
- User function
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