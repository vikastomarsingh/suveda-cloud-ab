const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connectDB = require('./config/db');
connectDB();

// Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Suveda Cloud AB API is runnning');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
