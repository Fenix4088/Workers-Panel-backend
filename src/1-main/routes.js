const auth = require("../2-features/1-auth")
const workers = require("../2-features/2-workers");
const isAuth = require("./helpers/isAuth");

const routes = (app) => {
    app.use('/auth', auth)
    app.use('/workers', isAuth(workers))
}
module.exports = routes