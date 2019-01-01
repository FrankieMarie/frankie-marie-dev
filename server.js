const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const admin = require('./routes/api/admin');
const projects = require('./routes/api/projects');

const app = express();

// Allow cross origin requests
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/admin', admin);
app.use('/api/projects', projects);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));