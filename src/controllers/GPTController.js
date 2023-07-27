const configer = require('../chatConfig')

const GPTController = {};



GPTController.generateResponse = async (req, res, next) => {
    let num = req.body.numPeople
    const prompt = `im having a party for ${num} people give me a sample menu with 3 appetizers, 3 mains and one salad`;
    const completion = await configer(prompt);
    console.log(completion.data.choices[0].message.content);
    res.locals.answer = completion.data.choices[0].message.content;
    return next();
};


module.exports = GPTController;