# 🐾 PawsCheck - Pet Health Assistant App

PawsCheck is a mobile application designed to assist pet owners in detecting diseases early using Artificial Intelligence, real-time vet consultations, and medication tracking – all in one platform.

---

## 🚀 Features

- 📸 **AI Disease Detection** – Enter symptoms to get instant predictions.
- 💬 **Vet Chat Module** – Real-time chat with licensed veterinary doctors.
- 📅 **Vet Appointment Booking** – Schedule appointments directly with vets.
- 💊 **Medicine Tracking** – Save and manage your pet's medication history.
- 👤 **Profile Management** – Manage pet and user profiles securely.

---

## 🛠️ Tech Stack

- **Frontend:** React Native (Expo)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Models:** Python, TensorFlow, Keras (CNN-based models)
- **Authentication:** Secure login and registration for pet owners and vets

---

## 📱 How to Run

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device (for testing)
- Python 3.8+ (for AI models)
- MongoDB (local or cloud)

### 1. Clone the Repository
```bash
git clone https://github.com/Jilani2812/Pawscheck.git
cd Pawscheck
```

### 2. Set Up Backend Server
```bash
# Navigate to server directory
cd Fyp_Areeba_Server

# Install dependencies
npm install

# Create .env file with your configuration
cp .env.example .env
# Edit .env with your database URL, JWT secret, etc.

# Start the server
npm start
# Server will run on http://localhost:3000
```

### 3. Set Up Frontend Client
```bash
# Navigate to client directory (in a new terminal)
cd FYP_Areeba_Client

# Install dependencies
npm install

# Start Expo development server
npx expo start

# Options to run:
# - Press 'a' for Android emulator
# - Press 'i' for iOS simulator
# - Scan QR code with Expo Go app on your phone
```

### 4. Set Up AI Models
```bash
# Navigate to AI directory
cd AI

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Run AI server
python app.py
# AI server will run on http://localhost:5000
```

### 5. Environment Variables Setup

Create `.env` files in the respective directories:

#### Backend (.env in Fyp_Areeba_Server/)
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/pawscheck
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

#### Frontend (.env in FYP_Areeba_Client/)
```env
API_BASE_URL=http://localhost:3000
AI_API_URL=http://localhost:5000
```

### 6. Database Setup
```bash
# Make sure MongoDB is running
# Create database and collections as needed
# You can import sample data if available
```

---

## 🏃‍♂️ Quick Start

1. **Start Backend Server:** `cd Fyp_Areeba_Server && npm start`
2. **Start AI Server:** `cd AI && python app.py`
3. **Start Expo App:** `cd FYP_Areeba_Client && npx expo start`

Then scan the QR code with Expo Go app on your phone or press 'a'/'i' for emulator.

Make sure all three services are running for full functionality.

---

## 📷 Screenshots

<img width="550" alt="image" src="https://github.com/user-attachments/assets/7fe73f6d-9d24-45a4-8662-4c94198499c1" />
<img width="550" alt="image" src="https://github.com/user-attachments/assets/65ef365c-64a4-4751-87b9-5f5621b985e1" />
<img width="550" alt="image" src="https://github.com/user-attachments/assets/9c0ff4c4-2df9-44e8-9c34-3d43f58322c2" />
<img width="550" alt="image" src="https://github.com/user-attachments/assets/51d0848d-00f5-42e0-a7a2-afce10570e18" />

---

## 👥 Team

- **Areeba Jilani** - Front End Developer
- **Wajiha Zainab** - UI/UX Designer
- **ZabiUllah** - Backend Developer

