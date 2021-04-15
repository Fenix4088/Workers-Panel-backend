const Worker = require('../1-models/Worker')

const updateWorker = async (req, res) => {
    try {
        const worker_id = req.path.slice(1)
        const {fullName, gender, contacts, salary, position} = req.body;

        if (!fullName || !gender || !contacts || !salary || !position) {
            return res.status(500).json({
                resultCode: 1,
                message: 'All fields is required'
            })
        }

        const worker = await Worker.findById(worker_id)
        if (!worker) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Dont found worker'
            })
        }
        await Worker.findByIdAndUpdate(worker_id, {...req.body})
        res.status(200).json({
            resultCode: 0,
            message: 'Worker updated'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(update board).'
        })
    }
}

module.exports = updateWorker