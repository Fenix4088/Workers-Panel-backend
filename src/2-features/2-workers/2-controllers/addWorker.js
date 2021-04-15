const Worker = require('../1-models/Worker')

const addWorker = async (req, res) => {

    try {
        const {fullName, gender, contacts, salary, position} = req.body;

        if (!fullName || !gender || !contacts || !salary || !position ) {
            return res.status(500).json({
                resultCode: 1,
                message: 'All fields is required'
            })
        }

        await Worker.create(req.body)

        res.status(201).json({
            resultCode: 0,
            message: 'Worker added'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            error: e.message,
            message: 'Yoops, something went wrong.'
        })
    }
}

module.exports = addWorker