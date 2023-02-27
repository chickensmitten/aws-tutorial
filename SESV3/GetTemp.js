import {SESClient, GetTemplateCommand, ListTemplatesCommand} from "@aws-sdk/client-ses";

const sesClient = new SESClient();


/*
const params = {
    TemplateName:'V3Template'
};


const run = async () => {
   try {
        const data = await sesClient.send(new GetTemplateCommand(params));
        console.log(data);
        
   }catch(err) {
       console.log(err);
       
   }
};

run();

*/


const run = async () => {
    try {
        const data = await sesClient.send(new ListTemplatesCommand({}));
        console.log(data);
        
    }catch(err) {
        console.log(err);
        
    }
}

run();