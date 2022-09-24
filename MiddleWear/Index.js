const express = require('express');
const colors = require('colors');
const port = 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Developer now this is MIDDLEWEAR')
});

app.listen(port, () => {
    console.log('Hello Developer I am Learning Express'.red.bold); 
});