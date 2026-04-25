# Demohack
# 🔐 Decentralized Credential Verification System

A full-stack decentralized application that enables secure issuing, storing, and verification of academic & professional credentials using cryptographic hashing and IPFS.

---

## 🚀 Problem

Fake degrees and forged certificates are a massive problem in hiring.

- Recruiters struggle to verify authenticity  
- Institutions lack standardized verification systems  
- Manual verification is slow and unreliable  

---

## 💡 Solution

We built a **Decentralized Credential Verification System** that ensures:

✅ Tamper-proof certificates  
✅ Instant verification  
✅ No dependency on central authority  

---

## 🧠 How It Works

### 🔁 Flow: Issue → Store → Verify

1. **Issuer uploads certificate**
2. System generates SHA-256 hash
3. File stored on IPFS
4. Hash stored in database
5. Verifier re-uploads file → hash matched → result shown

---

## 🏗️ Architecture

![Architecture](./assets/architecture.png)

---

## 👥 User Roles

### 🏫 Issuer
- Upload certificate
- Generate hash
- Store on IPFS

### 👤 Holder
- Connect wallet
- View credentials

### 🔍 Verifier
- Upload certificate
- Check authenticity

---

## ⚙️ Tech Stack

### Frontend
- React.js

### Backend
- Node.js + Express

### Database
- MongoDB

### Storage
- IPFS via Pinata

### Authentication
- MetaMask Wallet

---

## 📸 UI Preview

### Issuer Panel
![Issuer](./assets/issuer.png)

### Holder Dashboard
![Holder](./assets/holder.png)

### Verifier Page
![Verifier](./assets/verifier.png)

---

## 🔐 Core Features

- 📄 Certificate Upload  
- 🔑 SHA-256 Hash Generation  
- ☁️ IPFS Storage  
- 🔍 Instant Verification  
- 🦊 Wallet Integration  

---

## 🧪 Demo Flow

1. Upload a certificate  
2. System stores it securely  
3. Re-upload same file → ✅ Verified  
4. Upload modified file → ❌ Fake  

---

## 🛠️ Installation

### Clone Repo
```bash
git clone https://github.com/your-username/decentralized-credentials.git
cd decentralized-credentials
