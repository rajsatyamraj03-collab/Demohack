const express = require("express");
const router = express.Router();
const multer = require("multer");
const crypto = require("crypto");
const axios = require("axios");
const FormData = require("form-data");
const Credential = require("../models/Credential");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload + Issue
router.post("/issue", upload.single("file"), async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;

    // Generate hash
    const hash = crypto.createHash("sha256")
      .update(fileBuffer)
      .digest("hex");

    // Upload to IPFS (Pinata)
    const data = new FormData();
    data.append("file", req.file.buffer, req.file.originalname);

    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data,
      {
        headers: {
          ...data.getHeaders(),
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET_KEY
        }
      }
    );

    const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

    const credential = new Credential({
      hash,
      ipfsUrl,
      wallet: req.body.wallet,
      issuer: req.body.issuer
    });

    await credential.save();

    res.json({ success: true, hash, ipfsUrl });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get credentials by wallet
router.get("/credentials/:wallet", async (req, res) => {
  const data = await Credential.find({ wallet: req.params.wallet });
  res.json(data);
});

// Verify
router.post("/verify", upload.single("file"), async (req, res) => {
  const hash = crypto.createHash("sha256")
    .update(req.file.buffer)
    .digest("hex");

  const exists = await Credential.findOne({ hash });

  if (exists) {
    res.json({ verified: true, data: exists });
  } else {
    res.json({ verified: false });
  }
});

module.exports = router;
