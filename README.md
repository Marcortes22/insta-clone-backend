# 🧠 Instagram Clone – Backend (NestJS + GraphQL)

This is the backend for the Instagram clone, built with NestJS and GraphQL. It handles authentication, user management, posts, real-time messaging, content moderation, and audit logging.

---

## 📦 Core Modules

### 🔐 Authentication

- JWT-based login
- OAuth2 login (Google, Facebook)
- Password recovery
- Email verification
- Role-based access control (RBAC)

### 👤 Users

- Profile management
- Follow/unfollow system
- Block/unblock users
- Private/public profile toggle

### 📸 Posts

- Upload photo/video (Cloud Storage)
- Add/edit/delete posts
- Like and save posts
- View by hashtag or location

### 💬 Comments

- Add, reply, like, and delete comments
- Report inappropriate comments

### 📥 Messaging

- One-on-one direct messaging
- Real-time via WebSocket / GraphQL Subscriptions
- Delete messages

### 📰 Feed & Explore

- Personalized feed based on followed users
- Trending content and hashtags
- Search engine

### 🔔 Notifications

- Push notifications (likes, comments, messages, follows)
- Notification preferences

---

## ⚙️ Admin Modules

### 🛡️ User Management

- List, search, and view users
- Change roles (user/moderator/admin)
- Suspend or delete accounts

### 🧹 Content Moderation

- Review and remove reported posts/comments
- Moderate users and content

### 📊 Platform Statistics

- Total users/posts/messages
- Active users per day/week/month
- Top posts and activity logs

### 🔍 Audit Logging

- Tracks key user and admin actions
- Logs include: user, action type, timestamps, previous/new values
- Logs stored in `audit_logs` table
- Filter and export via admin panel

---

## 🛠️ Tech Stack

- NestJS
- GraphQL (Apollo Server)
- TypeORM or Prisma (PostgreSQL)
- Passport + JWT
- WebSocket / GraphQL Subscriptions
- Supabase Storage or Cloudinary (for media)
- class-validator, class-transformer
