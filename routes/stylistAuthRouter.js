const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Stylists = require('../models/stylistDb.js');
const secrets = require('../configs/secrets.js');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Stylists
    .insert(user)//uses add from Stylists-model
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Stylists.findBy({ username })//uses findby from Stylists-model
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //generate a token
        const token = genToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token, // added token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function genToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options ={
    expiresIn: '1d',
  }

  return jwt.sign(payload, secrets.jwtSecret, options);
}
module.exports = router;