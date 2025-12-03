# CLICON E-commerce Backend

Complete professional backend API for the CLICON e-commerce platform built with Node.js, Express, and MongoDB.

## 🚀 Features

- **User Authentication & Authorization**
  - JWT-based authentication
  - User registration and login
  - Profile management
  - Address management
  
- **Admin Panel**
  - Separate admin authentication
  - Role-based access control
  - Permission management
  
- **Product Management**
  - CRUD operations for products
  - Category management
  - Product search and filtering
  - Featured products
  - Related products
  
- **Order Management**
  - Order creation and tracking
  - Order status management
  - Payment integration ready
  - Order history
  
- **Shopping Features**
  - Shopping cart
  - Wishlist
  - Product reviews and ratings
  
- **Analytics Dashboard**
  - Sales analytics
  - Product analytics
  - Customer analytics
  - Revenue tracking
  
- **Security Features**
  - Helmet for security headers
  - CORS configuration
  - Rate limiting
  - Input validation
  - Password hashing

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js      # MongoDB connection
│   │   └── jwt.js           # JWT configuration
│   ├── controllers/         # Request handlers
│   │   ├── authController.js
│   │   ├── adminAuthController.js
│   │   ├── productController.js
│   │   ├── categoryController.js
│   │   ├── orderController.js
│   │   ├── customerController.js
│   │   ├── cartController.js
│   │   ├── wishlistController.js
│   │   ├── reviewController.js
│   │   └── analyticsController.js
│   ├── middleware/          # Custom middleware
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   ├── rateLimiter.js
│   │   └── validationMiddleware.js
│   ├── models/             # Mongoose schemas
│   │   ├── User.js
│   │   ├── Admin.js
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Order.js
│   │   ├── Cart.js
│   │   ├── Wishlist.js
│   │   └── Review.js
│   ├── routes/             # API routes
│   │   ├── authRoutes.js
│   │   ├── adminAuthRoutes.js
│   │   ├── productRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── customerRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── wishlistRoutes.js
│   │   ├── reviewRoutes.js
│   │   ├── analyticsRoutes.js
│   │   └── uploadRoutes.js
│   └── scripts/
│       └── seed.js         # Database seeding
├── uploads/                # Uploaded files
├── .env.example           # Environment variables template
├── .gitignore
├── package.json
├── server.js              # Entry point
└── README.md
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/clicon
   JWT_SECRET=your-secret-key
   JWT_ADMIN_SECRET=your-admin-secret
   ADMIN_EMAIL=admin@clicon.com
   ADMIN_PASSWORD=Admin@123
   FRONTEND_URL=http://localhost:5173
   ```

3. **Start MongoDB:**
   - Make sure MongoDB is running locally, or
   - Use MongoDB Atlas (update MONGODB_URI in .env)

4. **Seed the database:**
   ```bash
   npm run seed
   ```
   This will create:
   - Admin user with default credentials
   - Sample categories
   - Sample products

5. **Start the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

The server will run on `http://localhost:5000`

## 📚 API Documentation

### Authentication Endpoints

#### User Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (Protected)
- `PUT /api/auth/profile` - Update user profile (Protected)
- `POST /api/auth/address` - Add address (Protected)
- `PUT /api/auth/address/:addressId` - Update address (Protected)
- `DELETE /api/auth/address/:addressId` - Delete address (Protected)

#### Admin Authentication
- `POST /api/admin/auth/login` - Admin login
- `GET /api/admin/auth/profile` - Get admin profile (Admin)
- `PUT /api/admin/auth/profile` - Update admin profile (Admin)

### Product Endpoints
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/slug/:slug` - Get product by slug
- `GET /api/products/:id/related` - Get related products
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)
- `PATCH /api/products/:id/stock` - Update stock (Admin)

### Category Endpoints
- `GET /api/categories` - Get all categories
- `GET /api/categories/tree` - Get category tree
- `GET /api/categories/:id` - Get category by ID
- `GET /api/categories/slug/:slug` - Get category by slug
- `POST /api/categories` - Create category (Admin)
- `PUT /api/categories/:id` - Update category (Admin)
- `DELETE /api/categories/:id` - Delete category (Admin)

### Order Endpoints
- `POST /api/orders` - Create order (Protected)
- `GET /api/orders/my-orders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get order by ID (Protected)
- `PATCH /api/orders/:id/pay` - Update to paid (Protected)
- `PATCH /api/orders/:id/cancel` - Cancel order (Protected)
- `GET /api/orders` - Get all orders (Admin)
- `PATCH /api/orders/:id/status` - Update order status (Admin)

### Cart Endpoints
- `GET /api/cart` - Get user cart (Protected)
- `POST /api/cart` - Add to cart (Protected)
- `PUT /api/cart/:itemId` - Update cart item (Protected)
- `DELETE /api/cart/:itemId` - Remove from cart (Protected)
- `DELETE /api/cart` - Clear cart (Protected)

### Wishlist Endpoints
- `GET /api/wishlist` - Get wishlist (Protected)
- `POST /api/wishlist` - Add to wishlist (Protected)
- `DELETE /api/wishlist/:productId` - Remove from wishlist (Protected)
- `DELETE /api/wishlist` - Clear wishlist (Protected)

### Review Endpoints
- `GET /api/reviews/product/:productId` - Get product reviews
- `POST /api/reviews` - Create review (Protected)
- `PUT /api/reviews/:id` - Update review (Protected)
- `DELETE /api/reviews/:id` - Delete review (Protected)
- `GET /api/reviews` - Get all reviews (Admin)
- `PATCH /api/reviews/:id/status` - Update review status (Admin)

### Analytics Endpoints (Admin)
- `GET /api/analytics/overview` - Get analytics overview
- `GET /api/analytics/sales` - Get sales data
- `GET /api/analytics/products` - Get product analytics
- `GET /api/analytics/customers` - Get customer analytics

### Customer Endpoints (Admin)
- `GET /api/customers` - Get all customers
- `GET /api/customers/:id` - Get customer by ID
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Upload Endpoints (Admin)
- `POST /api/upload` - Upload single image
- `POST /api/upload/multiple` - Upload multiple images

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <token>
```

## 🧪 Testing the API

1. **Health Check:**
   ```bash
   curl http://localhost:5000/health
   ```

2. **Admin Login:**
   ```bash
   curl -X POST http://localhost:5000/api/admin/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@clicon.com","password":"Admin@123"}'
   ```

3. **Get Products:**
   ```bash
   curl http://localhost:5000/api/products
   ```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | development |
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/clicon |
| `JWT_SECRET` | JWT secret key | - |
| `JWT_ADMIN_SECRET` | Admin JWT secret | - |
| `JWT_EXPIRE` | User token expiration | 7d |
| `JWT_ADMIN_EXPIRE` | Admin token expiration | 1d |
| `ADMIN_EMAIL` | Default admin email | admin@clicon.com |
| `ADMIN_PASSWORD` | Default admin password | Admin@123 |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:5173 |

## 📦 Database Models

- **User** - Customer accounts
- **Admin** - Admin accounts with roles and permissions
- **Product** - Product catalog
- **Category** - Product categories (hierarchical)
- **Order** - Customer orders
- **Cart** - Shopping carts
- **Wishlist** - User wishlists
- **Review** - Product reviews and ratings

## 🚀 Production Deployment

1. Set `NODE_ENV=production`
2. Use a production MongoDB database (MongoDB Atlas recommended)
3. Set strong JWT secrets
4. Configure proper CORS settings
5. Enable HTTPS
6. Set up proper logging
7. Configure file upload to cloud storage (Cloudinary)

## 📄 License

ISC

## 👥 Support

For support, email support@clicon.com
