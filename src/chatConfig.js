const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv")
dotenv.config();

const configuration = new Configuration({
    organization: process.env.ORGAN_ID,
    apiKey: process.env.API_KEY
});

const openai = new OpenAIApi(configuration);

const configer = async () => {
    return await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages:[
        {role: 'user', content: 'Hello World'}
    ]
    });
}


module.exports = configer;