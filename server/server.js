// PACKAGES //
const express = require('express');
const bodyParser = require('body-parser');

// CREATE APP //
const app = express();

app.use(bodyParser.json());

// MIDDLEWARE //
app.use('/api', require('./routes/api'));

// ERROR HANDLER //
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
});

// SERVE APP //
const port = process.env.port || 9000;
app.listen(port, function() {
    console.log('server running on port ' + port)
});