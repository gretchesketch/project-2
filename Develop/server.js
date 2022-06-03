const express = require('express');
var exphbs = require("express-handlebars");
const session = require('express-session');
const routes = require('./controllers');
const Handlebars = require("handlebars");
const template = Handlebars.compile(require(
  "./views/login.handlebars"
));


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine","handlebars")

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(template())
app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on '+ {PORT}));
});
