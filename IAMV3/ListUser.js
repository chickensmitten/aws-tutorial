import {IAMClient, ListUsersCommand} from "@aws-sdk/client-iam"

const iamClient = new IAMClient()


const params = {MaxItems:7}


const run = async() => {
    const data = await iamClient.send(new ListUsersCommand(params))
    //console.log(data);
    const users = data.Users
    //console.log(users);
    users.forEach(function(user) {
        console.log("User : " + user.UserName + "," +  "Arn : " + user.Arn);
        
    })



}

run()