const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {User} = require('./model/user');
const config = require('./config/key');

mongoose.connect(config.mongoURI, { useNewUrlParser: true });

mongoose.connection.once('open',function(){
    console.log('connection');
}).on('error',function(error){
    console.log('connection error:',error);
})

app.get('/', (req,res) => {
    res.send('hello world ');
})

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success : true
        })
    });
})

app.listen(5000);



