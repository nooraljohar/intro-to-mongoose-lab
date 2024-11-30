const prompt = require('prompt-sync')()


const mongoose = require('mongoose');
require('dotenv').config();

const Customer = require('./models/customers')

// Connect to MongoDB using the URI from the .env file
const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URI)   
    console.log(`welcom to CRM`)
    await men()
    } catch(error) {
      console.log(error)
    } };

    const men = async() => {
    while(true){
      console.log('What would you like to do?')
      console.log('1. Create a customer')
      console.log('2. View all customers')
      console.log('3. Update a customer')
      console.log('4. Delete a customer')
      console.log('5. Quit')
      
      const number = prompt('Number of action to run:')
      
      if (number === '1') {
        await createCust()
      } else if (number === '2'){
        await viewCust()
      } else if (number === '3'){
        await updateCust()
      } else if (number === '4'){
        await deleteCust()
      } else if (number === '5'){
        console.log('exiting..')
        mongoose.connection.close()
        break
      } else {
        console.log('Error, enter a number between 1 and 5.')
      }}}

      const createCust = async () => {
        const customerName = prompt('What is customer name?')
        const customerAge = prompt('What is customer age?')
        const customerData = {
          name: customerName,
          age: customerAge
        }
        const customer = await Customer.create(customerData)
        console.log('New Customer', customer)
      }
      
      const viewCust = async () => {
        const customers = await Customer.find()
        if (customers.length === 0) {
          console.log('No customers found.')
        }
        console.log('Below is the list of customers:')
        customers.forEach((customer) => {
          console.log(
            `id: ${customer._id} -- Name: ${customer.name}, Age: ${customer.age}`
          )
        })
      }
      
      const updateCust = async () => {
        await viewCust()
        console.log('')
      
        const customerID = prompt(
          'Copy and paste the id of the customer you would like to update here: '
        )
        const newName = prompt('What is the customers new name?')
        const newAge = prompt('What is the customers new age?')
      
        const updatedData = { name: newName, age: newAge }
        const result = await Customer.updateOne(
          { _id: customerID },
          { $set: updatedData }
        )
      
        await viewCust()
      }
      
      const deleteCust = async () => {
        await viewCust()
        console.log('')
      
        const customerID = prompt(
          'Copy and paste the id of the customer you would like to delete here: '
        )
        const result = await Customer.deleteOne({ _id: customerID })
      
        await viewCust()
      }
        
  module.exports = connectDB
  connectDB()

 