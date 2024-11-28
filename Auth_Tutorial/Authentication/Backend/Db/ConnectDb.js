import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // Corrected line
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1); // 1 is failure, 0 status code is success
  }
};
