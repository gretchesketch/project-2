const router = require('express').Router();
const { User } = require('../../models');
const { sequelize } = require('../../models/User');

router.post('/', async (req, res) => {
  try {
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    sequelize.query(`
      INSERT INTO User VALUES ("1","Name","Password")
    `)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
 
});

module.exports = router;
