const mongoose = require('mongoose');
require('dotenv').config();

// Define the Customer schema
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  
  },
  age: {
    type: Number,
    required: true,  
  }
});


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

// Connect to MongoDB using the URI from the .env file
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1);  // Exit the process with an error code
    }
  };
  
  module.exports = connectDB;

 