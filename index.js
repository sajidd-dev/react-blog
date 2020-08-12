const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/react-blog', { useNewUrlParser: true });

mongoose.connection.once('open',function(){
    console.log('connection');
}).on('error',function(error){
    console.log('connection error:',error);
})

app.get('/', (req,res)=>{
    res.send('hello world')
});

app.listen(5000);
