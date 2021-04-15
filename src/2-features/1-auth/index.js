const express = require('express')
const login = require("./2-controllers/login");
const register = require("./2-controllers/register");
const authMe = require("./2-controllers/authMe");
const logOut = require("./2-controllers/logOut");
const isAuth = require("../../1-main/helpers/isAuth");

let auth = express.Router();

auth.post('/login', login)
auth.post('/register', register)
auth.post('/me', authMe)
auth.delete('/logout', isAuth(logOut))

module.exports = auth