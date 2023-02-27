import {EC2Client, DescribeSecurityGroupsCommand, DescribeSecurityGroupRulesCommand} from "@aws-sdk/client-ec2";

const ec2Client = new EC2Client();

/*
const run = async() => {
    try {
        const data = await ec2Client.send(new DescribeSecurityGroupsCommand({}));
        console.log(data.SecurityGroups);
        
    }catch(err) {
        console.log(err);
        
    }
};


run();

*/

const run = async() => {
    try {
        const data = await ec2Client.send(new DescribeSecurityGroupRulesCommand({}));
        console.log(data.SecurityGroupRules);
        
    }catch(err) {
        console.log(err);
        
    }
};


run();

