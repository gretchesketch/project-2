const router = require('express').Router();
const { Project } = require('../../models');
const path = require("path")
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");

router.get('/', (req, res) => {
  res.render("index",{name:"Name"})
console.log(template({ name: "Cooper" }));
 res.sendFile(path.join(__dirname,"./index.html"))
});
router.post('/', async (req, res) => {
  try {
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
   
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
