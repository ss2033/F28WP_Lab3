const express = require('express');

//creating app
const app = express();

//handling static HTML and EJS templates
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index'); //no need for ejs extension
});
//route for contacts
app.get('/contacts', (req, res) => {
    res.render('contacts');
});
//route for client registration
app.get('/register', (req, res) => {
    res.render('register');
});
//route for client login
app.get('/login', (req, res) => {
    res.render('login');
});
//route for catalogue
app.get('/catalog', (req, res) => {
    res.render('catalog');
});

//pass requests to the router middleware 
const router = require('./routes/post'); 
app.use(router);

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Cart app listening at http://localhost:${port}`);
});