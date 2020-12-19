// "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
require('./src/db/mongoose');
const passport = require("passport");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const LocalStrategy = require("passport-local");
const bcrypt = require('bcryptjs');
const authRouter = require('./src/router/auth');
const User = require('./src/models/User');
const middleware = require("./src/middleware/index");
const app = express();
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Session config for production environment
const MongoDBStore=require("connect-mongo")(session);
const secret= process.env.SECRET;
const db_url = "mongodb://localhost:27017/"+process.env.DATABASE_NAME || process.env.DB_URL ;
const store=new MongoDBStore({
    url:db_url,
    secret,
    touchAfter:24*60*60
});
store.on("error",function(e){
    console.log("SESSION STORE ERROR",e);
})


//passport-authenticate
app.use(cookieParser('secret'));
app.use(session({
    store,
    secret: 'secret',
    maxAge: 3600000,
    resave: true,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
    // User Matching 
    const user = await User.findOne({ username });
    if (!user) {
        return done(null, false, { message: 'This email ID is not registered' });
    }
    try {
        //Password Matching
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect! Please try again.' });
            }
        });
    } catch (e) {
        console.log(e);
    }
}));


passport.serializeUser(function (user, done) { done(null, user.id) });

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

app.use(express.json());
app.use(authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running up on port ${PORT}`);
})