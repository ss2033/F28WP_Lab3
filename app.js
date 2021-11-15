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
app.get('/api/register', (req, res) => {
    res.render('api/register');
});
//route for client login
app.get('/api/login', (req, res) => {
    res.render('api/login');
});

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Cart app listening at http://localhost:${port}`);
});