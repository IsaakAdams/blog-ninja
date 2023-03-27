const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// Set up express app
const app = express();

// Connect to mongodb
const dbURI = 'mongodb+srv://isaakadams:JavaIsJoy23@blogdatabase.mnssnpt.mongodb.net/blogDB?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// listen for request


// static file: (css or images)
app.use(express.static('public'));

// Takes form data and makes it usable in a post method
app.use(express.urlencoded({ extended: true }));

// Using middleware
app.use(morgan('dev'));


// Routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
});


// Blog Routes
app.use('/blogs', blogRoutes);

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404', });
});