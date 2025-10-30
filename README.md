<h1 align="center">🧠 Personal Task Manager</h1>

<p align="center">
A full-stack <b>MERN</b> web app to organize, prioritize, and track your daily tasks — with due-date reminders, overdue notifications, and a modern UI powered by <b>ShadCN UI</b> and <b>Radix UI</b>.
</p>

---

## 🧩 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20(Vite)-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-Express.js-black?logo=express&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/UI-ShadCN%20%2B%20Radix-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white&style=for-the-badge" />
</p>

---

## ✨ Features

### 🔐 Authentication
- User registration and login using **JWT**
- Secure cookie-based authentication
- Protected routes for authorized users

### 📝 Task Management
- Full **CRUD** (Create, Read, Update, Delete) functionality  
- Add **title**, **description**, **category**, **priority**, and **due date**
- **Mark as completed** or pending

### ⏰ Due Date & Notifications
- **Track deadlines**
- Receive **overdue alerts**
- Visual priority indicators

### 🔍 Search & Filter
- Search tasks by **title** or **keyword**
- Filter by **category**, **priority**, or **status**

### 💻 Responsive UI
- Fully responsive layout for desktop and mobile  
- Built with **ShadCN UI** and **Radix Primitives**  
- Smooth animations and accessible design

---

## ⚙️ Environment Variables

Create a `.env` file inside your **backend** folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173



🗂️ Folder Structure
📦 personal-task-manager
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── hooks/
│   │   └── main.jsx
│   └── index.html
│
└── README.md



🚀 Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/m-taaha/tasuku-man-ja.git
cd tasuku-man-ja

2️⃣ Setup Backend
cd backend
npm install
npm run dev

3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev

4️⃣ Access the App
Open your browser and navigate to:
👉 http://localhost:5173


🌱 Future Enhancements
 Email reminders for overdue tasks
 Shared task boards / team collaboration
 Analytics dashboard for productivity tracking
 PWA support for mobile task management


 🧠 Skills Demonstrated
Full-Stack MERN Development
RESTful API Design
Authentication & Authorization (JWT + Cookies)
MongoDB Schema Modeling
File & State Management in React
ShadCN & Radix UI Integration

👨‍💻 Author

Mohammad Taaha Ashraf
🎓 B.Tech CSE, Jamia Hamdard
💻 MERN Stack Developer

<p align="left"> <a href="https://github.com/m-taaha"> <img src="https://img.shields.io/badge/GitHub-Taaha-black?logo=github&style=for-the-badge"> </a> <a href="https://linkedin.com"> <img src="https://img.shields.io/badge/LinkedIn-Taaha-blue?logo=linkedin&style=for-the-badge"> </a> </p>


📜 License
This project is licensed under the MIT License — free to use, modify, and learn from.