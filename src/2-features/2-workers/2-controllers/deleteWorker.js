const Worker = require('../1-models/Worker')

const deleteWorker = async (req, res) => {

    const id = req.path.slice(1);
    try {
        const worker = await Worker.findById(id)

        if (!worker) {
            return res.status(500).json({
                resultCode: 1,
                message: 'Worker dont found'
            })
        }
        await Worker.findByIdAndDelete(id)

        res.status(200).json({
            resultCode: 0,
            message: 'Worker deleted'
        })

    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong(delete board).'
        })
    }
}

module.exports = deleteWorker