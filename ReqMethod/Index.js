const colors = require('colors');
const express = require('express');
const cookeParser = require('cookie-parser');
const app = express();

const port = 5000;

app.use(express.json());
app.use(cookeParser());

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.method);
    res.send('We are in admin url')
})

app.use('/admin', adminRoute)

app.get('/user/:id', (req, res) => {
    console.log(req);
    res.send("hello world");
});

app.post('/user/', (req, res) => {
    console.log(req.secures)
    res.send('I am post another person...')
})

app.listen(port, () => {
    console.log(`Hello developer I am listening on: ${port}`)
});