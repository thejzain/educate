// apiKeysModel.js
const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  publicKey: String,
  apiKey: String,
});

module.exports = mongoose.model('ApiKey', apiKeySchema);
