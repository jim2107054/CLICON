# CLICON - Professional E-Commerce Platform

A modern, fully-functional e-commerce web application built with React, Vite, and TailwindCSS.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse through extensive product listings with filtering and sorting
- **Search**: Real-time search across all products
- **Shopping Cart**: Add, remove, and update product quantities
- **Wishlist**: Save favorite products for later
- **Product Comparison**: Compare up to 4 products side-by-side
- **User Authentication**: Login, signup, password recovery
- **Order Management**: Place orders and track their status
- **Blog System**: Read articles and news about products

### Advanced Features
- **Persistent Storage**: Cart, wishlist, and user data saved in localStorage
- **Dynamic Routing**: Product and blog details with dynamic URLs
- **Responsive Design**: Fully responsive across all devices
- **Professional UI**: Clean, modern interface with smooth animations
- **Form Validation**: Client-side validation for all forms
- **Filter & Sort**: Multiple filtering options (category, brand, price)

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and static data
│   ├── components/        # Reusable components
│   ├── config/            # Configuration files
│   ├── constants/         # Constants and enums
│   ├── context/           # React Context API
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS 3
- **Routing**: React Router DOM 7
- **Icons**: React Icons 5
- **State Management**: React Context API
- **Storage**: localStorage for persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jim2107054/CLICON.git
   cd CLICON/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### App Configuration
Edit `src/config/app.config.js` to customize app settings, currency, shipping costs, tax rates, and contact information.

### Routes
Routes are defined in `src/constants/routes.js` for easy management.

### Categories & Filters
Product categories, brands, and price ranges are in `src/constants/categories.js`.

## 📱 Key Pages

- Home, Shop, Product Details
- Shopping Cart, Wishlist, Compare
- Checkout & Order Tracking
- Blog List & Details
- Login, Signup, Password Recovery
- About Us, Customer Support, FAQs

## 👨‍💻 Developer

**MD Jahid Hasan Jim**
- KUET - Computer Science and Engineering
- GitHub: [@jim2107054](https://github.com/jim2107054)

---

Made with ❤️ by MD Jahid Hasan Jim (KUET-CSE)
