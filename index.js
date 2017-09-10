const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/other', (req, res) => {
    res.send(process.env);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
