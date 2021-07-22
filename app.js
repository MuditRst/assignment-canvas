import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from 'express';
import { JSDOM } from 'jsdom';


const app = express()

global.document = new JSDOM('html').window.document

app.set('view engine','ejs')
app.use(express.static("public"))

app.get('/',function(req,res){
    res.render('index')
})


app.get('/signup',function(req,res){
    res.send('This is the Sign up Page!')
})


app.post('/login',function(req,res){
    res.send('This is the Login confirmation Page!')
})

app.listen(3000,function(req,res){
    console.log("Server started at port 3000")
})