const express = require('express');
const appConfig = require('./config/appConfig')
const app = express()

let helloWorldFunction = (req, res) => res.send('Hello World!');

app.get('/', helloWorldFunction)

app.listen(appConfig.port, () => console.log('Example app listening on port 3000'))