import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();
const mongoURI = 'mongodb://localhost:27017/mern-blog';

app.use(express.json());

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB is connected...');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB...', err);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});


app.use('/api/user', userRoutes)
  // console.log('Berhasil')

app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});
