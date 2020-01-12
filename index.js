// this is needed for importing expressjs into our application
const express = require('express');
const fs = require('fs')
const appConfig = require('./config/appConfig')

// declaring an instance or creating an application instance
const app = express()

// Bootstrap route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("including the following file")
        console.log(routesPath + '/' + file)
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
})

app.listen(appConfig.port, () => console.log('Example app listening on port 3000'))