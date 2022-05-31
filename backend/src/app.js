const express = require('express');
const app = express();

const path = require('path');
require('./db/conn'); 

const port = process.env.PORT || 3000;

const indexPath = path.join(__dirname,'../public');

app.use(express.static(indexPath));

{
    
    app.get('/forgot',(req,res)=>{
        res.sendFile(path.join(indexPath,'/auth/forgot.html'));
    });
    
    app.get('/quiz',(req,res)=>{
        res.sendFile(path.join(indexPath,'/exam/quiz.html'));
    });
    
    app.get('/dashboard',(req,res)=>{
        res.sendFile(path.join(indexPath,'/user/dashboard.html'));
    });
    
    app.get('/repo',(req,res)=>{
        res.sendFile(path.join(indexPath, '/repo/repo.html'));
    });
    
    app.get('/forum', (req, res) => {
        res.sendFile(path.join(indexPath, '/forum/forum.html'));
    });
    
    app.get('/login', (req, res) => {
        res.sendFile(path.join(indexPath, '/auth/login.html'));
    });
    
    app.post('/login', (req, res) => {
        res.redirect('/dashboard');
    });
    
    app.get('/register', (req, res) => {
        res.sendFile(path.join(indexPath, '/auth/register.html'));
    });
    
    app.post('/register', (req, res) => {        
        var userDetails = new user({
            name: req.body.name,
            email: req.body.user,
            class: req.body.cl-code,
            password: req.body.password
        });
        
        userDetails .save((err, doc) => {
            if (!err)
                req.flash('success', 'User added successfully!');
                res.redirect('/dashboad');
        });
    });
    
    app.get("/",(req,res)=>{
        res.send("<h1>404</h1>");
    });
    
}

app.listen(port,()=>{
    console.log(`Server started at port http://localhost:${port}`);
});

