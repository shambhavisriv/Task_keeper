//import express 
const express = require('express');

//import controller
const mainController = require("../controller/main_controller");

//create router
const router = express.Router();
console.log("Router is loaded");

//home page routes
router.get('/',mainController.homie)

module.exports = router;