# Adepoju Toheeb Ayobami — QA Engineer Portfolio

A professional portfolio website built for Adepoju Toheeb Ayobami, a Senior SDET with 5+ years of experience in fintech and payment systems.

🔗 **Live Site:** [toheeb-qa.netlify.app](https://toheeb-qa.netlify.app)

---

## 📸 Preview

![Portfolio Preview](public/image (1).png)

---

## ✨ Features

- **Multi-page React app** with smooth page transitions
- **Framer Motion animations** — scroll-triggered reveals, stagger effects, parallax
- **Fully responsive** — mobile, tablet and desktop
- **Contact form** that sends real emails via Netlify Functions + Nodemailer
- **Auto-reply** email sent to anyone who submits the form
- **SEO optimised** with meta tags and Open Graph support
- **ATA favicon** matching the portfolio brand

---

## 📄 Pages

| Page | Description |
|---|---|
| Home | Hero section with animated stats, Why Hire Me, real LinkedIn testimonials |
| About | Personal story, skills progress bars, quick facts, education |
| Skills | 6 skill group cards + tools & tech stack |
| Experience | Interactive timeline with expandable accordion cards |
| Certifications | 5 certification cards with credential IDs |
| Contact | Contact form with real email delivery |

---

## 🛠 Tech Stack

### Frontend
- **React** + **Vite**
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **Font Awesome** — icons
- **React Router DOM** — multi-page routing
- **Google Fonts** — Cormorant Garamond + Jost

### Backend
- **Netlify Functions** — serverless contact form handler
- **Nodemailer** — email delivery via Gmail
- **dotenv** — environment variable management

### Deployment
- **Netlify** — frontend + serverless functions
- **GitHub** — version control + auto-deploy trigger

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repo
git clone https://github.com/YOURUSERNAME/toheeb-qa.git

# Navigate into the project
cd toheeb-qa

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your_gmail@gmail.com
```

> ⚠️ Use a Gmail App Password, not your regular Gmail password.

### Run locally

```bash
npm run dev
```

Visit `http://localhost:5173`

> Note: The contact form requires Netlify CLI to work locally.

### Build for production

```bash
npm run build
```

---

## 📁 Project Structure

toheeb-qa/
├── netlify/
│   └── functions/
│       └── contact.js        # Serverless email function
├── public/
│   ├── favicon.ico
│   ├── toheeb.png            # Profile photo
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageWrapper.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolio.js      # All content in one place
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── netlify.toml
├── vite.config.js
└── index.html
---
---

## 📧 Contact Form Setup

The contact form uses **Netlify Functions** + **Nodemailer**:

1. User submits the form
2. Request goes to `/.netlify/functions/contact`
3. Nodemailer sends a formatted email to Toheeb's inbox
4. Auto-reply is sent to the person who submitted

---

## 🎨 Design System

| Property | Value |
|---|---|
| Primary Color | `#0f6e56` (Deep Teal) |
| Background | `#f8f7f4` (Warm Cream) |
| Display Font | Cormorant Garamond |
| Body Font | Jost |
| Animations | Framer Motion |

---

## 👨‍💻 Built By

Built with ❤️ by DevwithTao

For the portfolio owner:
**Adepoju Toheeb Ayobami**
QA Engineer & Senior SDET
[LinkedIn](https://www.linkedin.com/in/adepoju-toheeb-ayobami-52422b188/) • [Portfolio](https://toheeb-qa.netlify.app)
