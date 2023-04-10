const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const { name } = req.body

    if (name) {
        return res.status(200).send('hello ' + name)
    } else {
        return res.status(404).send('not found')
    }
})

module.exports = router