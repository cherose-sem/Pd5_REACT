// file: index.js

var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
//this is what we need to create the token
var jwt = require('jsonwebtoken');

//we used for authenticating node
var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
//in-memoy DB
var users = [
  {
    id: 1,
    name: 'jonathanmh',
    password: '%2yx4'
  },
  {
    id: 2,
    name: 'test',
    password: 'test'
  }
];

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
//don't ever hardcode this value for a production system
jwtOptions.secretOrKey = 'tasmanianDevil';

//authentication method with the callback
var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
  var user = users[_.findIndex(users, {id: jwt_payload.id})];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

//passport has more than 300 strategies (in here it  uses JwtStrategy)
passport.use(strategy);

//express uses middleware and in middleware, order matters
var app = express();
app.use(passport.initialize());

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())


app.get("/", function(req, res) {
  res.json({message: "Express is up!"});
});

app.post("/login", function(req, res) {
  if(req.body.name && req.body.password){
    var name = req.body.name;
    var password = req.body.password;
  }
  // usually this would be a database call:
  // _. means it has a lot of packages, and up to the top, _ is a lodash library
  var user = users[_.findIndex(users, {name: name})];
  if( ! user ){
    res.status(401).json({message:"no such user found"}); //YOU ARE GIVING THE HACKER A HINT
  }

  if(user.password === req.body.password) {
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    var payload = {id: user.id, info: {a: "bla bla"}, userType: "admin"};
    //REMEMBER TO PUT TIMEOUT VALUE: Add lifetime to token
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message:"Failed to Login"}); //should be like this
  }
});

//the route I need to ensure, and the passport does it - next if OK and not next
app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json({message: "Success! You can not see this without a token"});
});

app.get("/secretDebug",
  function(req, res, next){
    console.log(req.get('Authorization'));
    next();
  }, function(req, res){
    res.json("debugging");
});

app.listen(3000, function() {
  console.log("Express running");
});