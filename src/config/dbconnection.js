// All imports that are required
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// connection for database
 export const connectdb = async()=>{
   mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
}