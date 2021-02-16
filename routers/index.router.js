const express = require('express');
const router = express.Router();
const {v4 : uuidV4} = require('uuid')

router.get('/', (req, res, next) => {
    res.redirect(`/${uuidV4()}`)
});

router.get('/:roomId', (req, res, next) => {
    res.render('room', {roomId: req.params.roomId})
    console.log(req.params.roomId)
});

module.exports = router