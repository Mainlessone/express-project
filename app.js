const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const emailSender = require('./nodemailer.js');

let urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req,res)=>{
    res.render('main');
});

app.get('/aboutus', (req,res)=>{
    res.render('aboutus');
});

app.get('/contacts', (req,res)=>{
    res.render('contacts');
});
app.post('/contacts', urlEncodedParser, (req,res)=>{
    if(!req.body) return res.sendStatus(400);
    res.render('contacts');
    emailSender.email(req.body.name, req.body.email, req.body.phone);
})



app.listen(3000);