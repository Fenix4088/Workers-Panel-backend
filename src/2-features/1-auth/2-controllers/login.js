const User = require('../1-models/User')
const bCrypt = require("bcrypt")
const generateToken = require("../../../1-main/helpers/generateToken");

const login = async (req, res) => {

    const {email, password, rememberMe} = req.body

    try {
        const user = await User.findOne({email}).exec()
        if (!user) {
            res.status(400).json({
                resultCode: 1,
                message: 'Wrong email or password'
            })
        } else if (!(await bCrypt.compare(password, user?.password))) {
            res.status(400).json({
                resultCode: 1,
                message: 'Wrong email or password'
            })
        } else {

            const token = await generateToken(user, rememberMe)

            res.status(201)
                .cookie('token', token, {
                    sameSite: "none",
                    secure: true
                })
                .json({
                    data: {
                        id: user._id,
                        email: user?.email,
                    },
                    resultCode: 0
                });
        }
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Oops! Something wrong :-( '
        })
    }
}

module.exports = login