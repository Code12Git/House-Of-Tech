# 🏠 House of Tech

A **production-ready, full-stack CRUD application** for course management built with  
**Next.js 16**, **React 19**, **TypeScript 5**, and **MongoDB**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)

🔗 **Live Demo:** [https://houseoftech.vercel.app](https://houseoftech.vercel.app)

---

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Testing](#-testing)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Security](#-security)
- [Author](#-author)

---

## ✨ Features

### Core Features
- ✅ Full CRUD operations for courses
- ✅ Server-Side Rendering using Next.js App Router
- ✅ RESTful API routes
- ✅ MongoDB integration using Mongoose
- ✅ Zod validation on client & server
- ✅ Fully typed with TypeScript
- ✅ Responsive UI with Tailwind CSS v4

### Authentication & Security
- 🔐 JWT authentication (jose)
- 🔐 Password hashing using bcrypt
- 🔐 Protected routes
- 🔐 Input sanitization via Zod

### User Experience
- 🎨 Modern UI
- 🔔 Toast notifications (react-hot-toast)
- 📊 Dashboard analytics
- 🔍 Search, filter & pagination

### Code Quality
- 🧪 Unit tests with Vitest (18 passing)
- 📝 ESLint enforced
- 🏗️ Modular architecture
- 🔄 CI/CD with GitHub Actions

---

## 🛠 Tech Stack

| Category | Technology |
|--------|-----------|
| Frontend | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Backend | Next.js API Routes |
| Database | MongoDB + Mongoose |
| Auth | JWT (jose), bcrypt |
| Validation | Zod |
| Testing | Vitest, Testing Library |
| CI/CD | GitHub Actions |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (Atlas or local)
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/Code12Git/House-Of-Tech.git
cd houseoftech
npm install
```

Environment Setup

```bash
cp .env.example .env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key_min_32_chars
NEXT_PUBLIC_API_URL=/api
```

Run Locally
npm run dev
Visit: http://localhost:3000


```

## 📁 Project Structure
```bash

House-Of-Tech/
├── app/                    # App Router (Next.js 13+)
│   ├── (auth)/             # Auth-related pages (sign-in, sign-up…)
│   ├── api/                # API routes
│   │   ├── auth/...
│   │   └── courses/...
│   ├── dashboard/          # Protected user dashboard
│   └── browse-courses/     # Public course listing
├── components/             # Reusable UI components
├── contexts/               # React Context providers
├── lib/                    # Utilities, helpers, db connection
├── models/                 # Mongoose schemas
├── services/               # Business logic / external API calls
├── validations/            # Zod schemas
├── types/                  # TypeScript shared types/interfaces
├── __tests__/              # Jest / Vitest tests
└── public/                 # Static assets
```

##  📡 API Documentation
### Auth Endpoints
Method	Endpoint	Description

- POST	/api/auth/register	Register user

- POST	/api/auth/login	Login user

- GET	/api/auth/me	Get current user

### Course Endpoints
Method	Endpoint	Description

- GET	/api/courses	Get courses

- POST	/api/courses	Create course

- GET	/api/courses/:id	Get course

- PUT	/api/courses/:id	Update course

- DELETE	/api/courses/:id	Delete course

### 🧪 Testing

```bash

npm run test

npm run test:run

npm run test:coverage
```


### 🚢 Deployment
- Vercel (Recommended)

- Push repo to GitHub

- Import in Vercel

- Add environment variables

### Deploy 🚀

🔒 Security

- JWT-based authentication

- bcrypt password hashing

- Zod validation

- Environment variable protection

- HTTPS in production

👤 Author
Saksham Saxena

🐙 GitHub: @SakshamSaxena0

💼 LinkedIn: saksham-saxena

📄 License
MIT License

<p align="center"> Made with ❤️ by <b>Saksham Saxena</b> </p> 