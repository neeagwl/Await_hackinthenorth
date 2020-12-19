// "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"

const express = require("express");
require("./src/db/mongoose");
var passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
var LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const User = require("./src/models/User");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser("secret"));
//passport-authenticate
app.use(
  session({
    secret: "secret",
    maxAge: 3600000,
    resave: true,
    saveUninitialized: true,
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

//Passport
app.use(passport.initialize());
require("./config/passport")(passport);

// passport.use(
//   new LocalStrategy(
//     { usernameField: "username" },
//     async (username, password, done) => {
//       // User Matching
//       const user = await User.findOne({ username });
//       if (!user) {
//         return done(null, false, {
//           message: "This email ID is not registered",
//         });
//       }
//       try {
//         //Password Matching
//         bcrypt.compare(password, user.password, (err, isMatch) => {
//           if (err) throw err;
//           if (isMatch) {
//             return done(null, user);
//           } else {
//             return done(null, false, {
//               message: "Password incorrect! Please try again.",
//             });
//           }
//         });
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   )
// );

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

app.use(express.json());

//Importing Routes
app.use(require("./src/router/auth"));
app.use(require("./src/router/Patient"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running up on port ${PORT}`);
});
