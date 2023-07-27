const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv')
dotenv.config();

const apirouter = require('./routes/api.js');


const cors = require("cors");
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
  "Access-Control-Allow-Methods",
  "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
  );
  if (req.method === "OPTIONS") {
  return res.status(200).end();
  }
  next();
  });



app.use(express.json());

const PORT = 3000

app.use('/api', apirouter);

app.get('/hi', (req, res) => {
    res.sendStatus(200);
})

app.use((req, res) => res.sendStatus(404));


app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
  
    return res.status(errorObj.status).json(errorObj.message);
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });