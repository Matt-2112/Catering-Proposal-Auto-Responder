import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv"
dotenv.config();

const configuration = new Configuration({
    organization: process.env.ORGAN_ID,
    apiKey: process.env.API_KEY
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: '',

});