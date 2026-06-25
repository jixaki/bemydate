# 💌 BeMyDate

BeMyDate is a fun and interactive MERN-stack web application that allows users to create personalized date invitations and send them to someone special.

The recipient receives a unique invitation link where they can select a preferred date and food vibe. Once they respond, the original sender receives an email notification with all the details.

---

## ✨ Features

### 💖 Create Personalized Date Invitations

* Sender name & email
* Recipient name & email
* Multiple invitation themes
* Unique invitation links

### 📅 Date Selection

Recipients can:

* View the invitation
* Select a preferred date
* Confirm their response

### 🍽️ Food Vibe Selection

Recipients can choose from:

* Fancy Dinner 🥂
* Street Food 🌮
* Cozy Café ☕
* Surprise Me! 🎁

### 📧 Email Notifications

When an invitation is accepted:

* Sender receives an email notification
* Includes selected date
* Includes selected food vibe

### 🎨 Theme Support

Current themes:

* Romantic
* Kawaii
* Retro
* Minimalist

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Axios
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Services

* MongoDB Atlas
* Render
* Netlify
* Brevo Email API

---

## 📂 Project Structure

```text
bemydate/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   ├── server.js
│   ├── connectDB.js
│   ├── sendEmail.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000

BREVO_API_KEY=your_brevo_api_key

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

---

## 🚀 Local Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/bemydate.git
cd bemydate
```

### Backend Setup

```bash
cd backend
npm install
npm run start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment

### Frontend

Deployed on Netlify

### Backend

Deployed on Render

### Database

MongoDB Atlas

### Email Service

Brevo Transactional Email API

---

## 📧 Email Flow

1. User creates a date invitation
2. Invitation is stored in MongoDB
3. Unique link is generated
4. Recipient opens invitation
5. Recipient selects date and food vibe
6. Backend updates request
7. Brevo sends email notification to sender

---

## 🔮 Future Enhancements

* GIF picker for invitations
* Image upload support
* Dynamic social media previews
* Custom invitation backgrounds
* WhatsApp sharing
* Email templates
* User dashboard
* Date analytics

---

## 👨‍💻 Author

Created by Jess

Built with ❤️ using React, Node.js, Express, MongoDB, and Brevo.