const configer = require('../chatConfig')

const GPTController = {};

GPTController.generateResponse = async (req, res, next) => {
    const completion = await configer();
    console.log(completion.data.choices[0].message);
    return next();
};


module.exports = GPTController;