// Import Sequelize instance
const sequelize = require('./sequelize');

// Define an asynchronous function for testing the connection
const testDatabaseConnection = async () => {
  try {
    // Attempt to authenticate the Sequelize instance
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    // Handle authentication errors
    console.error('Unable to connect to the database:', error);
  }
};

// Call the function to test the database connection
testDatabaseConnection();