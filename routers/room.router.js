const express = require('express')
const router = express.Router()

router.get('/:roomId', (req, res, next) => {
    res.render('room', {roomId: req.params.roomId})
})

module.exports = router