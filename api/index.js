import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";

const app = express();
const mongoURI = 'mongodb://localhost:27017/mern-blog';

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