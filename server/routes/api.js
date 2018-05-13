const express = require('express');
const router = express.Router();

// GET A LIST OF COFFEES //
router.get('/coffees', function (req, res) {
    res.send({ type: 'GET' });
});

// ADD A NEW COFFEE //
router.post('/coffees', function (req, res) {
    console.log(req.body);

    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

// UPDATE A COFFEE //
router.put('/coffees/:id', function (req, res) {
    res.send({ type: 'PUT' });
});

// DELETE A COFFEE //
router.delete('/coffees/:id', function (req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = router;