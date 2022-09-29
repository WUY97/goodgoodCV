const mongoose = require('mongoose');

const URL = 'mongodb+srv://Schedrin:Schedrin1@resumebuilder.uc8pgwv.mongodb.net/test';

mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Mongo DB Connection Successful');
});

connection.on('error', (error) => {
    console.log(error);
});