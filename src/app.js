//Chamando bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();

//Template Engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//Iniciar Servidor
app.listen(3000,function(req,res){
    console.log('Servidor Iniciado!');
});

//Rotas e templates
app.get("/:id?",function(req,res){
    res.render('index',{id:req.params.id});
})