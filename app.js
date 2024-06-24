const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const app = express();
const ownerRoutes = require('./routes/ownerRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const indexRoute = require('./routes/index');
const expressSession = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();
const db = require('./config/mongooseconnection');

const sessionSecret = process.env.EXPRESS_SESSION_SECRET || 'default_secret_key';

app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: sessionSecret,
    })
);

app.use(flash());
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/owners', ownerRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/', indexRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
