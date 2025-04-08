const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

const authRoutes = require('../routes/authRoutes');
const chatRoutes = require('../routes/chatRoutes');
const userRoutes = require('../routes/userRoutes');
const productRoutes = require('../routes/productRoutes');
const utilityRoutes = require('../routes/utilityRoutes');
const adminRoutes = require('../routes/adminRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: ["https://ai-customer-chat-clean-t9xt.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});



app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/utilities', utilityRoutes);
app.use('/api/admin', adminRoutes);
app.use('/backup', express.static(path.join(__dirname, '../backup')));

module.exports = app;
module.exports.handler = serverless(app);
