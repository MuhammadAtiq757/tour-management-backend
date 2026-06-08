# 🌍 Tour Management Backend

A production-ready REST API for a tour booking platform built with **Node.js**, **TypeScript**, **Express**, and **MongoDB**. Supports full tour lifecycle management — from listing and image handling to booking and payment processing.

---

## ✨ Features

- 🔐 **Authentication & Authorization** — JWT-based auth with email verification and password management
- 🗺️ **Tour Management** — Create, update, delete tours with Cloudinary image upload & deletion
- 📅 **Booking System** — End-to-end booking flow with status tracking
- 💳 **Payment Integration** — SSLCommerz payment gateway for local payment processing
- 👤 **User Management** — User profiles, verification, and role-based access
- 🏙️ **Division Module** — Location/division data management
- 📧 **Email Utility** — Transactional email support for user notifications
- 🛡️ **Global Error Handling** — Centralized error handling with custom error helpers

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Language | TypeScript |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (JSON Web Tokens) |
| Image Upload | Cloudinary + Multer |
| Payment | SSLCommerz |
| Validation | Custom interfaces + TypeScript types |

---

## 📁 Project Structure

```
src/
└── app/
    ├── config/          # Environment & DB configuration
    ├── constants/       # App-wide constants
    ├── errorHelpers/    # Custom error classes & handlers
    ├── helpers/         # Reusable utility helpers
    ├── interfaces/      # TypeScript interfaces & types
    ├── middlewares/     # Auth, error, upload middlewares
    ├── modules/
    │   ├── auth/        # Login, register, email verification
    │   ├── booking/     # Tour booking logic
    │   ├── division/    # Location/division management
    │   ├── payment/     # Payment processing
    │   ├── sslCommerz/  # SSLCommerz gateway integration
    │   ├── tour/        # Tour CRUD + image management
    │   └── user/        # User profile & management
    ├── routes/          # Centralized route definitions
    ├── utils/           # Utility functions (email, etc.)
    └── app.ts           # Express app entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Cloudinary account
- SSLCommerz sandbox credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/MuhammadAtiq757/tour-management-backend.git
cd tour-management-backend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

SSLCOMMERZ_STORE_ID=your_store_id
SSLCOMMERZ_STORE_PASSWORD=your_store_password
SSLCOMMERZ_IS_LIVE=false

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### Run the App

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login & get JWT |
| POST | `/api/auth/verify-email` | Email verification |
| POST | `/api/auth/forgot-password` | Password reset request |

### Tours
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tours` | Get all tours |
| GET | `/api/tours/:id` | Get single tour |
| POST | `/api/tours` | Create tour (admin) |
| PATCH | `/api/tours/:id` | Update tour (admin) |
| DELETE | `/api/tours/:id` | Delete tour (admin) |

### Bookings
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Create a booking |
| GET | `/api/bookings/my-bookings` | Get user's bookings |
| PATCH | `/api/bookings/:id` | Update booking status |

### Payments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payments/init` | Initialize SSLCommerz payment |
| POST | `/api/payments/success` | Payment success callback |
| POST | `/api/payments/fail` | Payment failure callback |

---

## 🔒 Authentication

Protected routes require a Bearer token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

---

## 👨‍💻 Author

**Mohammad Atiq Ullah**
- GitHub: [@MuhammadAtiq757](https://github.com/MuhammadAtiq757)
- LinkedIn: [mohammad-atiq-ullah](https://linkedin.com/in/mohammad-atiq-ullah)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
