const {config} = require("../config")
const jwt = require('jsonwebtoken')
const generateToken = require("./generateToken");

const isAuth = (func) => async (req, res) => {

    const {token} = req.cookies

    if (!token)
        return res.status(401).send({
            resultCode: 1,
            message: "Access denied...No token provided..."
        })
    try {
        const decodeUser = jwt.verify(token, config.jwtSecret)
        const refreshToken = await generateToken(decodeUser)
        res.cookie('token', refreshToken, {
            sameSite: "none",
            secure: true
        })

        req.body = {...req.body, user_id: decodeUser._id, my_email: decodeUser.email}
        func(req, res)
    } catch (er) {
        res.clearCookie("token");
        return res.status(400).send({
            resultCode: 1,
            message: "Время действия токена истекло"
        })
    }
}

module.exports = isAuth
