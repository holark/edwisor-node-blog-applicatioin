const express = require('express');
const blogController = require('./../controllers/blogController')

let setRouter = (app) => {

    app.get('/hello-world',blogController.helloWorld);
    app.get('/example', blogController.printExample)
}

module.exports = {
    setRouter: setRouter
}