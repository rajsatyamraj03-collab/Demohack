const mongoose = require("mongoose");

const credentialSchema = new mongoose.Schema({
  hash: String,
  ipfsUrl: String,
  wallet: String,
  issuer: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Credential", credentialSchema);
