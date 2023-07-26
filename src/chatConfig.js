const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv")
dotenv.config();
const menu = require('./data/menu')


const configuration = new Configuration({
    organization: process.env.ORGAN_ID,
    apiKey: process.env.API_KEY
});

const openai = new OpenAIApi(configuration);

const configer = async (prompt) => {
    return await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages:[
        // {role: "system", content: "act as if you are a pirate. sailing the high seas and searching for treasure, respond with typical pirate speech"},
        {role: 'system', content: 'Pretend your name is Gail Connell and you run the catering company Gourmet A Go Go. I will provide you with your menu for catering events. Be prepared to give sample menus by choosing selections from the menu provided based on requests from users.'},
        {role: 'system', content: 'here is your full menu as a JavaScript object' + menu},
        {role: 'user', content: `${prompt}`}
    ]
    });
}


module.exports = configer;