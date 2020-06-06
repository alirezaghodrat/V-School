const express = require("express");
const notificationRouter = express.Router();
const Notifi = require('../models/screams.js')

//craete notification on like
//create notification on comment
//delete notification on onlike
//mark notification read 
module.exports = notificationRouter