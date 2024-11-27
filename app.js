const mongoose = require('mongoose');
require('dotenv').config();

const Customer = require('./models/customers')

// Connect to MongoDB using the URI from the .env file
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI)   
      console.log(`welcom to CRM`);

    while(true){
      console.log('What would you like to do?')
      console.log('1. Create a customer')
      console.log('2. View all customers')
      console.log('3. Update a customer')
      console.log('4. Delete a customer')
      console.log('5. Quit')
      const
      if()
      
    }
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1);  // Exit the process with an error code
    }

  };
  
  module.exports = connectDB
  connectDB()

 