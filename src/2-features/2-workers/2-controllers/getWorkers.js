const Worker = require('../1-models/Worker')

const getWorkers = async (req, res) => {

    try {
        const workers = await Worker.find()

        res.json({
            resultCode: 0,
            data: {
                workers,
                count: workers?.length
            }
        })
    } catch
        (e) {
        res.json({
            resultCode: 1,
            message: 'Yoops, something went wrong(getBoards)'
        })
    }
}

module.exports = getWorkers