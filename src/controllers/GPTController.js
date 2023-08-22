const configer = require('../chatConfig')

const GPTController = {};



GPTController.generateResponse = async (req, res, next) => {
    let {numPeople, numApps, numMains, numSalads} = req.body
    let addInfo = req.body.additonalInfo
    const prompt = `im having a party for ${numPeople} people give me a sample menu with ${numApps} appetizers, ${numMains} mains and ${numSalads} salad. ${addInfo}.`;
    const completion = await configer(prompt);
    // console.log(completion.data.choices[0].message.content);
    res.locals.answer = completion.data.choices[0].message.content;
    return next();
};


module.exports = GPTController;