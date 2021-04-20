const bCrypt = require("bcrypt")
const User = require('../1-models/User')

const register = async (req, res) => {

    const {email, password} = req.body

    try {
        const oldUser = await User.findOne({email}).exec()
        if (oldUser) {
            res.status(400).json({
                resultCode: 1,
                message: 'Пользователь с таким email, уже существует'
            })
        } else {
            const user = await User.create(
                {
                    email,
                    password: await bCrypt.hash(password, 8),
                    rememberMe: false,

                    userName: email,
                    verified: false,
                }
            )

            const addedUser = {...user};

            delete addedUser.password;

            res.status(201).json({
                resultCode: 0,
                message: 'Registration successful !'
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            resultCode: 1,
            message: 'Oops! Something wrong :-( '
        })
    }
}

module.exports = register
