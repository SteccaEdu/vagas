//Chamando bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('handlebars');
const app = express();


//Iniciar Servidor
app.listen(3000,function(req,res){
    console.log('Servidor Iniciado!');
});