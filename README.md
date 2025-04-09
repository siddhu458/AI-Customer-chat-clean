# AI-Customer Query Assistant 🤖💬

An intelligent, full-stack **AI-powered assistant** built using the **MERN stack** (MongoDB, Express, React, Node.js). This chatbot helps businesses respond to customer queries in real-time using OpenAI's GPT model, streamlining support and boosting engagement.

---

## 🚀 Features

- 💬 **AI Chat Assistant** powered by OpenAI (ChatGPT)
- 🔐 **User Authentication** with role-based access (Admin/User)
- 🧑‍💻 **Admin Dashboard** for managing users, announcements, reports, backups
- 📦 **Backup Functionality** for user data
- 📄 **Export Users** to CSV
- 📢 **Post Announcements** (admin-only)
- 📊 **User Statistics & Insights**
- ✨ Modern, responsive UI with React & TailwindCSS

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Axios
- Tailwind CSS
- Lucide Icons

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (for secure login)

**AI Integration:**
- OpenAI API (ChatGPT)

---

## 🔐 Roles & Access

- **Admin**: Can manage users, send announcements, view dashboards, and backup/export data
- **User**: Can chat with the AI assistant and view responses

---

## 📂 Project Structure

AI-CUSTOMER_QUERY-ASSISTANT/ │├── client/ # React frontend 
                              │ ├── src/ 
                              │
                              │ ├── components/
                              │ 
                              │ ├── pages/ 
                              │ 
                              │ └── App.jsx 
                              │
                              └── public/ 
                              │├── server/ 
                              # Node.js backend 
                              │├── routes/ 
                              │├── controllers/ 
                              │├── models/ 
                              │└── server.js 
                               ├── README.md
                               └── package.json

---

## 🧑‍💻 Getting Started

### ⚙️ Prerequisites
- Node.js & npm
- MongoDB installed & running
- OpenAI API key

### 🔧 Backend Setup

```bash
cd server
npm install
# Add your OpenAI API key and MongoDB URI in a .env file
node server.js

### 💻 Frontend Setup
cd client
npm install
npm start

🔑 Environment Variables (.env)
In your server/.env file:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key


📃 License
This project is licensed under the MIT License.

✨ Author
👨‍💻 siddhu Chaparthi

 E-mail:Siddhuchaparthi86@gmail.com
🌐 GitHub: https://github.com/siddhu458/AI_Customer_chat-clean

