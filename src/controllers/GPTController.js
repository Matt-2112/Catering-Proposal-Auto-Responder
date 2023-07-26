const configer = require('../chatConfig')

const GPTController = {};


GPTController.generateResponse = async (req, res, next) => {
    let prompt = req.query.prompt
    const completion = await configer(prompt);
    console.log(completion.data.choices[0].message);
    return next();
};


module.exports = GPTController;