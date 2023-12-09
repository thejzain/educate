// yourFileCallingGetApiKey.js
import getApiKey from './getapi';
const ApiKey = require('./apiKeysModel.js'); // Import the Mongoose model

// Assuming you're using async/await syntax in your application
const storeApiKeyInDB = async () => {
  try {
    const apiKey = await getApiKey(); // Fetch the API key
    console.log('Retrieved API Key:', apiKey);

    // Store the obtained API key in the database
    const savedApiKey = await ApiKey.create({
      publicKey: 'YOUR_PUBLIC_KEY', // Replace with the actual public key
      apiKey: apiKey, // Store the retrieved API key
    });
    console.log('API Key saved:', savedApiKey);
  } catch (error) {
    console.error('Error saving API Key:', error);
  }
};

storeApiKeyInDB();
