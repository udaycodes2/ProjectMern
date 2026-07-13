# 🌐 STAYO – Full Stack Hotel Booking Platform  
STAYO is a full-stack hotel booking system that enables users to explore rooms, check real-time availability, and complete bookings via **Pay At Hotel**, with online payments (Razorpay) planned as a future enhancement.
 
Admins/Owners can add hotels, manage rooms, track bookings, view revenue analytics, and monitor customer activity.
 
This project is ideal for:
 
- Portfolio demonstration
- Real-world **MERN** application learning
- Authentication + Webhooks + Cloud Storage example
- Scalable project structure reference
🔗 **Live Demo (Frontend):** [https://project-mern-indol.vercel.app/](https://project-mern-indol.vercel.app/)  
🔗 **Backend API (Live):** [https://hotelmanagementbackend.vercel.app/](https://hotelmanagementbackend.vercel.app/)
 
---
 
## 📌 Table of Contents
- [Project Overview](#project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#system-architecture)
- [Screenshots](#-screenshots)
- [Environment Variables](#-environment-variables)
- [Folder Structure](#-folder-structure)
- [API Endpoints](#-api-endpoints)
- [Payment Details](#-payment-details)
- [Installation & Setup](#installation--setup)
- [Dashboard Overview](#-dashboard-overview)
- [Future Enhancements / Roadmap](#-future-enhancements--roadmap)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [Author & Contact](#author--contact)
---
 
## Project Overview
 
**STAYO** is a full-stack hotel booking web application built with the **MERN stack**, designed to simulate real-world booking platforms with role-based dashboards, webhook-driven data sync, and a scalable architecture.
 
---
 
## 🚀 Features
 
### 🧑‍💼 User Features
 
- 🔐 **User Authentication (Clerk)**
- 🏨 **Browse, search & filter hotels**
- 🎯 **Advanced filters** (room type, price range, sorting)
- 📅 **Real-time room availability check**
- 🛏️ **Instant booking system (Pay At Hotel)**
- 📜 **Booking history** with statuses & details
- 📧 **Email confirmation** on successful booking (best-effort — booking still succeeds even if email delivery fails)
- 🖼 **Cloudinary-based image delivery**
- 🚫 **Auto-hide deleted rooms from booking history**
---
 
### 🏨 Owner/Admin Features
 
- 🏢 **Register hotels & manage listings**
- 🏘 **Add, edit & delete rooms**
- 📊 **Analytics Dashboard** (total revenue & bookings)
- 👤 **View all customer bookings**
- 📤 **Cloudinary image uploads**
- ⚠️ **Auto-hide deleted rooms app-wide**
---
 
## 🧰 Tech Stack
 
### **Frontend**
- React.js  
- Tailwind CSS  
- AppContext (Global State Management)  
- Axios  
- React Router  
- Clerk Authentication  
### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Cloudinary (images)  
- Multer (uploads)  
- Nodemailer (emails, via Brevo SMTP)  
- Svix (Clerk webhook signature verification)  
- CORS  
---
 
## 🏗️ System Architecture <a id="system-architecture"></a>
```
React (Frontend)
        ↓ Axios
Express API (Backend)
        ↓
MongoDB (Data Layer)
        ↓
Cloudinary (Image Storage)
Clerk (Authentication + Webhooks)
```
 

 
## 🔑 Environment Variables
 
### Frontend (.env)
```env
VITE_CLERK_PUBLISHABLE_KEY=
VITE_BACKEND_URL=
VITE_CURRENCY=₹
```
### Backend (.env)
```env
# MongoDB
MONGODB_URI=
 
# Clerk keys
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
 
# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
 
# NodeMailer SMTP - Brevo
SENDER_EMAIL=
SMTP_USER=
SMTP_PASS=
```
 
> ⚠️ **Deployment note:** Environment variables must be set directly in your hosting platform's dashboard (e.g., Vercel → Project → Settings → Environment Variables). A local `.env` file does **not** carry over to a deployed environment, and changes to env vars require a redeploy to take effect.
 
---
 
## 📦 Folder Structure
```
STAYO/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── pages/
│   │   └── App.jsx
│
└── server/                 # Node.js Backend
    ├── configs/            # DB, Cloudinary, Nodemailer
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── server.js
```
 
---
 
## 🧪 API Endpoints
 
### Webhooks
| Method | Endpoint      | Description                          |
|--------|---------------|---------------------------------------|
| POST   | /api/clerk    | Clerk user sync (create/update/delete) |
 
### User
| Method | Endpoint                     | Description                     |
|--------|-------------------------------|----------------------------------|
| GET    | /api/user                     | Get current user role & data    |
| POST   | /api/user/store-recent-search | Save a recently searched city   |
 
### Hotels
| Method | Endpoint      | Description           |
|--------|---------------|------------------------|
| POST   | /api/hotels   | Register a new hotel   |
 
### Rooms
| Method | Endpoint                     | Description              |
|--------|-------------------------------|---------------------------|
| GET    | /api/rooms                    | Get all available rooms  |
| POST   | /api/rooms                    | Add a new room (owner)   |
| GET    | /api/rooms/owner              | Get rooms for current owner |
| POST   | /api/rooms/toggle-availability | Toggle a room's availability |
 
### Bookings
| Method | Endpoint                       | Description                  |
|--------|----------------------------------|-------------------------------|
| POST   | /api/bookings/check-availability | Check room availability      |
| POST   | /api/bookings/book               | Create a booking             |
| GET    | /api/bookings/user               | Get bookings for current user |
| GET    | /api/bookings/hotel              | Get bookings for owner's hotel |
 
---
 
## 💳 Payment Details
 
**Currently Supported:**
 
- ✔️ **Pay At Hotel** — the default and only active payment method. Bookings are created immediately; payment is settled in person.
**Planned:**
 
- 🔜 **Razorpay integration** for online payments — see [Future Enhancements](#-future-enhancements--roadmap).
---
 
## 🛠️ Installation & Setup <a id="installation--setup"></a>
 
### Frontend
```bash
cd client
npm install
npm run dev
```
 
### Backend
```bash
cd server
npm install
npm run server
```
 
### Webhook development (local only)
Clerk needs a public URL to deliver webhook events to your local server. Use a tunneling tool such as `ngrok` or `cloudflared`:
```bash
ngrok http 3000
```
Then set the forwarding URL (`https://xxxx.ngrok-free.app/api/clerk`) as your webhook endpoint in the Clerk Dashboard.
 
---
 
## 📊 Dashboard Overview
Dashboard includes:
| Metric           | Description              |
| ---------------- | ------------------------ |
| Total Bookings   | Count of all bookings    |
| Total Revenue    | Sum of all paid bookings |
| Recent Bookings  | Latest bookings, most recent first |
| Room Management  | Add/toggle availability  |
| Photo Management | Cloudinary upload        |
 
Updates automatically after bookings are created.
 
---
 
## 🚀 Future Enhancements / Roadmap
 
### Backend
 
- Razorpay integration for online payments
- JWT refresh tokens
- Additional admin/owner role granularity
### Frontend
 
- Wishlist / Favorites
- PWA support
- Infinite scroll
### Dashboard
 
- Revenue chart
- Hotel comparison
- Occupancy analytics
---
 
## 🤝 Contributing
```bash
git clone https://github.com/udaycodes2/ProjectMern.git
git checkout -b feature-name
git commit -m "Added new feature"
git push origin feature-name
```
Open a Pull Request ✔
 
---
 
## 🐛 Troubleshooting
 
### Images not uploading
✔ Check Cloudinary keys are set correctly in your environment variables
 
### Room registration fails with a null/undefined user error
✔ Confirm the Clerk `user.created` webhook is reaching `/api/clerk` successfully (check Clerk Dashboard → Webhooks → Logs) and that a matching document exists in the `users` collection in MongoDB
 
### `Operation buffering timed out` / rooms not loading
✔ Check MongoDB Atlas → Network Access allows `0.0.0.0/0`, the cluster isn't paused, and `MONGODB_URI` matches exactly between local and deployed environments
 
### Booking fails with "Failed to create booking"
✔ Check server logs for the underlying error — a common cause is invalid SMTP credentials for the booking confirmation email
 
### Dashboard showing 0 values
✔ Check if `isPaid` / booking records are populating correctly in MongoDB
 
---
 
<h2><a class="anchor" id="author--contact"></a>Author & Contact</h2>
 
**Uday**  
MERN Stack Developer