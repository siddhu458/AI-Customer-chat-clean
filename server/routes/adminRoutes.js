const express = require('express');
const fs = require('fs');
const path = require('path');
const User = require('../models/User'); 

const router = express.Router();

router.post('/backup', async (req, res) => {
  try {
    const users = await User.find().lean();

    const timestamp = Date.now();
    const backupData = JSON.stringify(users, null, 2);
    const backupDir = path.join(__dirname, '..', 'backup');
    const backupFile = path.join(backupDir, `users_backup_${timestamp}.json`);

    
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }

    fs.writeFileSync(backupFile, backupData);

    res.json({
      message: 'Backup created successfully',
      fileUrl: `/backup/users_backup_${timestamp}.json`
    });
  } catch (err) {
    console.error('Backup failed:', err);
    res.status(500).json({ error: 'Backup failed' });
  }
});

module.exports = router;
