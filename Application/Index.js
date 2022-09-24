const colors = require('colors');
const express = require('express');

const app = express();
// app.locals.tittle = 'hello developer and youu.......'
// console.log(app.locals.tittle);

app.param('id', (req, res, next, id) => {
    const user = {
        userId: id,
        name: 'sujon'
    };
    req.result = user;
    next();
});

app.post('/user/:id', (req, res) => {
    console.log(req.result);
    res.send('MY REQUEST SUCCESFULLY WORK...')
});

app.get('/about/some', (req, res) => {
    res.send('hello developer i am get method.')
});

app.route('/about/some')
.get((req, res) => {
    res.send('hello developer i am get method.')
})
.post((req, res) => {
    res.send('hello developer i am post method.')
})
.put((req, res) => {
    res.send('hello developer i am put method.')
})



app.listen(5000, () =>{
    console.log('Running now something..')
});