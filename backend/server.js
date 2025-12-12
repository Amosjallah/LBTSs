require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('express-async-errors'); // Handles async errors in controllers

const errorHandler = require('./src/middleware/errorMiddleware');
const apiRoutes = require('./src/routes/apiRoutes');

const app = express();

// Security & Config Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1', apiRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.json({ message: 'LAD Brothers Transport API is running' });
});

// Error Middleware (Must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});