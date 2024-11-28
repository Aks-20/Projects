import express from 'express';
import { PORT, MONGO_URL } from './config.js';
import mongoose from 'mongoose';
import router from './Routes/bookroutes.js';
import cors from 'cors';

const app = express();

// Validate environment variables
if (!PORT || !MONGO_URL) {
  console.error('Error: PORT and MONGO_URL must be defined in the config.');
  process.exit(1);
}

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins
app.use(cors());
// Option 2: Allow Custom Origins (uncomment to use)
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

// Root Route
app.get('/', (request, response) => {
  console.log('Root route accessed:', request.ip);
  return response.status(200).send('Welcome To MERN Stack Tutorial');
});

// Book Routes
app.use('/books', router);

// Database Connection and Server Startup
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error.message);
    process.exit(1); // Exit the application if unable to connect to the database
  });
