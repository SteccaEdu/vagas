//Chamando bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const urlencodeParser = bodyParser.urlencoded({extended:false});

//Acesso ao Sql
const sql = mysql.createConnection({
    host: 'localhost' ,
    user: 'root',
    password: 'admin',
    port: 3306
});
sql.query("use crudsalestime");

//Template Engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

//Iniciar Servidor
app.listen(3000,function(req,res){
    console.log('Servidor Iniciado!');
});

//Rotas e templates
app.get("/",function(req,res){res.render('index');});
app.get("/javascript", function(req,res){res.sendFile(__dirname+'/js/javascript.js');});
app.get("/style", function(req,res){res.sendFile(__dirname+'/css/style.css');});
app.get("/insert",function(req,res){res.render("insert");});
app.post("/controllerForm",urlencodeParser,function(req,res){console.log(req.body.name);});