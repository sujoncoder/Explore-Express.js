const express = require('express');
const colors = require('colors');
const port = 5000;

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    // res.send('with data');
    // res.end();
    // res.json({
    //     name: 'sujon sheikh'
    // })
    // res.status(200);
    // res.sendStatus(200)
    // res.sendStatus(401)
    // res.sendStatus(400)
    // res.sendStatus(404)
    res.end()
});

app.listen(port, () => {
    console.log('Hello Developer How Are You..!' .red.bold);
});