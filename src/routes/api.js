const express = require('express');


const router = express.Router();

const GPTController = require('../controllers/GPTController')

router.get('/history', GPTController.generateResponse, (req, res) => {
    res.sendStatus(200);
});

router.post('/ask', GPTController.generateResponse, (req, res) => {
    res.sendStatus(200);
});

module.exports = router