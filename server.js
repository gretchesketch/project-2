const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const controllers = require('./controllers');
const helpers = require('./utils/helpers');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'images');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({
  storage: storage
});

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 6000000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controllers);

app.get("/create-blog", (req, res) => {
  res.render("create-blog")
});

app.post("/create-blog", upload.single("image"), (req, res) => {
  res.send("Image Uploaded")
});

// app.get('/search/:name', (request, response) => {
//     const { name } = request.params;
//     const db = dbService.getDbServiceInstance();

//     const result = db.searchByName(name);
//     result
//     .then(data => response.json({data : data}))
//     .catch(err => console.log(err));
// })

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// app.listen(PORT, () => console.log('Now listening'));