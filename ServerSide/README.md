#  TaskDuty – Personal Task Manager

A full‑stack task management application built with the **MERN stack** (MongoDB, Express, React, Node.js) using **TypeScript** on both ends and **Tailwind CSS** for styling.  
Users can create, read, update, delete, and filter tasks by category and completion status. The UI is grouped into categories (Urgent, Important, Work, Personal) and is fully responsive.

---

##  Features

-  **CRUD operations** – Create, Read, Update, Delete tasks
-  **Category grouping** – Urgent, Important, Work, Personal
-  **Mark as done / pending** – Toggle completion status
-  **Filter tasks** – By category (All, Work, Personal, Urgent, Important) and by status (All, Completed, Pending)
-  **Due date validation** – Cannot be in the past
-  **Clean UI** – Tailwind CSS, responsive cards, category‑colored badges
-  **Navigation** – React Router with a navbar and separate pages for:
  - Cover page
  - My Tasks (grouped list)
  - New Task form
  - Edit Task form
-  **Backend API** – RESTful endpoints with proper error handling and HTTP status codes

---

##  Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose (ODM)
- TypeScript
- CORS, dotenv

### Frontend
- React (functional components, hooks)
- TypeScript
- Vite (build tool)
- Tailwind CSS
- React Router DOM
- Axios

---

##  Folder Structure (Client Side)



---

##  Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas cloud)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/your-username/taskduty.git
cd taskduty


{
  "_id": "60f7b1f4f1a2b3c4d5e6f7a8",
  "title": "Finish report",
  "description": "Quarterly financial report",
  "dueDate": "2026-06-30T00:00:00.000Z",
  "category": "Work",
  "completed": false,
  "createdAt": "2026-06-12T10:00:00.000Z",
  "updatedAt": "2026-06-12T10:00:00.000Z"
}
