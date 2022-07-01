const express = require('express');
const auth = require("../middlewares/auth");
const usersController = require('./../controllers/user');

const router = express.Router();

router.post("/api/login", auth, usersController.getMe);

module.exports = router;