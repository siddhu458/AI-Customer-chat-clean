const express = require('express');
const router = express.Router();

router.post('/backup', (req, res) => {
  console.log("System backup triggered!");
  res.json({ message: 'Backup triggered successfully' });
});

module.exports = router;
