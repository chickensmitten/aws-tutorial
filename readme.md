# AWS SDK

## Setup
- It is good practice to create new IAM User and use that user's details instead of using the root details.
- Start with creating an IAM user, add to a group or given relevant permissions
- install aws-sdk with `npm install aws-sdk` to install version 2

## AWS SDK Version2
- User functions
  - [create User](/IAMV2/CreateUser.js)
  - [get user info](/IAMV2/GetUserInfo.js)
  - [list User](/IAMV2/ListAll.js)
  - [update User](/IAMV2/UpdateUser.js)
  - [delete User](/IAMV2/DeleteUser.js). All policies and access keys should be removed, deleted or detached from the user before deleting the user.
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
- 