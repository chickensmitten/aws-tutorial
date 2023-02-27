import {SESClient, CreateTemplateCommand} from "@aws-sdk/client-ses";

const sesClient = new SESClient();

const params = {
    Template: {
        'TemplateName':'V3Template',
        'SubjectPart':'AWS Course with JavaScript & NodeJS',
        'TextPart':'Welcome to the course and thanks for buying',
        'HtmlPart':'Thanks for buying the course'
    }
};

const run = async() => {
    try {
        const data = await sesClient.send(new CreateTemplateCommand(params));
        console.log('Template is created', data);
        
    }catch(err) {
        console.log('unable to create template', err);
        
    }
};

run();