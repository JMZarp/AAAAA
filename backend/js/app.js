"use strict";
const express = require('express');
const app = express();



app.use(express.urlencoded({extended:false}));
app.use(express.json());



//
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

// motor de plantillas
app.set('view engine', 'ejs');

//invocar bcryptjs

const bcryptjs = require('bcryptjs');

// var de session
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//

const connection = require('../database/db');



let configuracion = {
    "hostname": "127.0.0.1",
    "port": 3000,
};

app.use('/', require('./router'));

app.listen(configuracion, () => {
    console.log(`Conectandome al servidor ${configuracion.port}`);
});
