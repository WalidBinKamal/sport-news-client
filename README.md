# 📰 Sport News

**Sport News** is a responsive web application where users can browse, add, and manage the latest sports news. Built using **React**, **Firebase**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MongoDB**, this project provides full-stack functionality with real-time data management.

---

## 🌐 Live Website

[Visit Sport News 🔗](https://sport-news-237d3.web.app/)

---

## 📂 Project Repositories

- **Client (Frontend) Repository:** [sport-news-client](https://github.com/WalidBinKamal/sport-news-client.git)
- **Server (Backend) Repository:** [sport-news-server](https://github.com/WalidBinKamal/sport-news-server.git)

---

## ✨ Features

✅ Responsive Design (Mobile & Desktop Friendly)  
✅ Functional Navbar with Routing  
✅ Firebase Authentication (Username & Password Login, Registration, Logout)  
✅ Add, View, and Delete Sports News  
✅ View and Manage User List  
✅ News Displayed as Cards on Home Page  
✅ Like & Delete Functionality for News and Users  
✅ Backend with Node.js, Express.js, and MongoDB  
✅ Deployed using Vercel (Server) and Firebase Hosting (Client)  

---

## 🛠️ Tech Stack

**Frontend:**  
- React  
- Tailwind CSS  
- Firebase Authentication & Hosting  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB  
- Vercel (Deployment)  

---

## 🖥️ Local Setup Instructions

### ⚡ Prerequisites

Make sure you have the following installed on your system:

- [Node.js & npm](https://nodejs.org/en/download)  
- [MongoDB](https://www.mongodb.com/try/download/community)  
- [Git](https://git-scm.com/downloads)  

---

### 📦 Setup the Backend (Server)

1. **Clone the server repository:**

   ```bash
   git clone https://github.com/WalidBinKamal/sport-news-server.git
   cd sport-news-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the `sport-news-server` directory with the following (replace values accordingly):

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the server:**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000`.

---

### 🎨 Setup the Frontend (Client)

1. **Clone the client repository:**

   ```bash
   git clone https://github.com/WalidBinKamal/sport-news-client.git
   cd sport-news-client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Firebase Configuration:**

   Inside the client project, locate your Firebase configuration file (commonly in `src/firebase.init.js`) and replace it with your Firebase project's configuration.

4. **Run the client:**

   ```bash
   npm start
   ```

   The client will be available at `http://localhost:3000`.

---

## ⚙️ Additional Notes

- Ensure your MongoDB server is running locally or use a cloud-based service like [MongoDB Atlas](https://www.mongodb.com/atlas).
- For deploying your own version, you can use **Vercel** for the backend and **Firebase Hosting** for the frontend, following the respective deployment guides.


