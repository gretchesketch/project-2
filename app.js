const express = require("express")
const exphbs = require("express-handlebars")
const passport = require("passport")
const FacebookStrategy = require("passport-facebook").Strategy
let app = express()
app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(function(user, done) {
  done(null, user)
})
passport.deserializeUser(function(user, done) {
  done(null, user)
})
passport.use(
  new FacebookStrategy(
    {
      clientID: "Client ID",
      clientSecret: "Client Secret",
      callbackURL: "http://localhost:3000/auth/facebook/callback",
    },
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile)
    }
  )
)
app.get("/auth/facebook", passport.authenticate("facebook"))
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  function(req, res) {
    console.log("req", req.user)
    res.render("data", {
      user: req.user,
    })
  }
)
app.get("/", (req, res) => {
  res.render("home", {
    user: req.user,
  })
})
app.listen(3000, () => {
  console.log("Server is Running in Port 3000")
})