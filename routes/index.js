//import express 
const express = require('express');

//import controller
const mainController = require("../controller/main_controller");

//create router
const router = express.Router();
console.log("Router is loaded");

//home page routes
router.get('/',mainController.homie);

//create task route
router.post('/create-task',mainController.create);

//route to delete single task
router.get('/delete-task/:id', mainController.delete);

//route to delete multiple task

router.post('/delete-task',mainController.deleteSelected);

module.exports = router;