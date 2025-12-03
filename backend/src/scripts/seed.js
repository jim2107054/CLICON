import dotenv from 'dotenv';
import connectDB from '../config/database.js';
import Admin from '../models/Admin.js';
import Category from '../models/Category.js';
import Product from '../models/Product.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('🌱 Starting database seeding...');

    // Clear existing data
    await Admin.deleteMany();
    await Category.deleteMany();
    await Product.deleteMany();

    // Create admin user
    const admin = await Admin.create({
      name: 'Admin User',
      email: process.env.ADMIN_EMAIL || 'admin@clicon.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      role: 'super-admin',
      permissions: ['products', 'orders', 'customers', 'categories', 'analytics', 'settings']
    });

    console.log('✅ Admin user created');

    // Create categories
    const categories = await Category.insertMany([
      {
        name: 'Computer & Laptop',
        slug: 'computer-laptop',
        description: 'Computers, laptops, and accessories',
        status: 'active',
        order: 1
      },
      {
        name: 'SmartPhone',
        slug: 'smartphone',
        description: 'Latest smartphones and mobile devices',
        status: 'active',
        order: 2
      },
      {
        name: 'Headphone',
        slug: 'headphone',
        description: 'Headphones, earbuds, and audio accessories',
        status: 'active',
        order: 3
      },
      {
        name: 'Camera',
        slug: 'camera',
        description: 'Cameras and photography equipment',
        status: 'active',
        order: 4
      },
      {
        name: 'TV & Homes',
        slug: 'tv-homes',
        description: 'Smart TVs and home entertainment',
        status: 'active',
        order: 5
      },
      {
        name: 'Watches & Accessories',
        slug: 'watches-accessories',
        description: 'Smart watches and accessories',
        status: 'active',
        order: 6
      },
      {
        name: 'Gaming',
        slug: 'gaming',
        description: 'Gaming consoles, games, and accessories',
        status: 'active',
        order: 7
      },
      {
        name: 'Accessories',
        slug: 'accessories',
        description: 'Various tech accessories',
        status: 'active',
        order: 8
      }
    ]);

    console.log('✅ Categories created');

    // Create sample products
    const products = await Product.insertMany([
      {
        name: 'MacBook Pro 16"',
        slug: 'macbook-pro-16',
        sku: 'MBP-16-2023',
        description: 'Powerful laptop for professionals with M2 Pro chip, 16GB RAM, 512GB SSD',
        shortDescription: 'High-performance laptop for creative professionals',
        price: 2499.99,
        comparePrice: 2799.99,
        category: categories[0]._id,
        brand: 'Apple',
        images: [
          { url: '/images/macbook-pro.jpg', alt: 'MacBook Pro', isPrimary: true }
        ],
        stock: 45,
        specifications: [
          { key: 'Processor', value: 'Apple M2 Pro' },
          { key: 'RAM', value: '16GB' },
          { key: 'Storage', value: '512GB SSD' },
          { key: 'Display', value: '16-inch Retina' }
        ],
        tags: ['laptop', 'apple', 'macbook', 'professional'],
        status: 'active',
        isFeatured: true,
        rating: { average: 4.8, count: 156 }
      },
      {
        name: 'iPhone 15 Pro Max',
        slug: 'iphone-15-pro-max',
        sku: 'IP15PM-256',
        description: 'Latest iPhone with A17 Pro chip, titanium design, 256GB storage',
        shortDescription: 'Premium smartphone with advanced camera system',
        price: 1199.99,
        comparePrice: 1299.99,
        category: categories[1]._id,
        brand: 'Apple',
        images: [
          { url: '/images/iphone-15-pro.jpg', alt: 'iPhone 15 Pro Max', isPrimary: true }
        ],
        stock: 120,
        specifications: [
          { key: 'Processor', value: 'A17 Pro' },
          { key: 'Storage', value: '256GB' },
          { key: 'Display', value: '6.7-inch Super Retina XDR' },
          { key: 'Camera', value: '48MP Main + 12MP Ultra Wide + 12MP Telephoto' }
        ],
        tags: ['smartphone', 'iphone', 'apple', '5g'],
        status: 'active',
        isFeatured: true,
        rating: { average: 4.9, count: 243 }
      },
      {
        name: 'Sony WH-1000XM5',
        slug: 'sony-wh-1000xm5',
        sku: 'SONY-WH1000XM5',
        description: 'Industry-leading noise canceling headphones with exceptional sound quality',
        shortDescription: 'Premium wireless noise-canceling headphones',
        price: 399.99,
        comparePrice: 449.99,
        category: categories[2]._id,
        brand: 'Sony',
        images: [
          { url: '/images/sony-headphones.jpg', alt: 'Sony WH-1000XM5', isPrimary: true }
        ],
        stock: 85,
        specifications: [
          { key: 'Type', value: 'Over-Ear Wireless' },
          { key: 'Battery Life', value: '30 hours' },
          { key: 'Noise Canceling', value: 'Yes' },
          { key: 'Bluetooth', value: '5.2' }
        ],
        tags: ['headphones', 'wireless', 'noise-canceling', 'sony'],
        status: 'active',
        isFeatured: true,
        rating: { average: 4.7, count: 189 }
      },
      {
        name: 'Dell XPS 13',
        slug: 'dell-xps-13',
        sku: 'DELL-XPS13-I7',
        description: 'Ultra-portable laptop with 13.4-inch InfinityEdge display',
        shortDescription: 'Premium ultrabook for everyday computing',
        price: 1299.99,
        category: categories[0]._id,
        brand: 'Dell',
        images: [
          { url: '/images/dell-xps-13.jpg', alt: 'Dell XPS 13', isPrimary: true }
        ],
        stock: 32,
        specifications: [
          { key: 'Processor', value: 'Intel Core i7-13th Gen' },
          { key: 'RAM', value: '16GB' },
          { key: 'Storage', value: '512GB SSD' }
        ],
        tags: ['laptop', 'dell', 'ultrabook'],
        status: 'active',
        rating: { average: 4.6, count: 98 }
      },
      {
        name: 'Samsung Galaxy S24 Ultra',
        slug: 'samsung-galaxy-s24-ultra',
        sku: 'SGS24U-512',
        description: 'Flagship Android smartphone with S Pen and advanced AI features',
        price: 1299.99,
        category: categories[1]._id,
        brand: 'Samsung',
        images: [
          { url: '/images/samsung-s24.jpg', alt: 'Samsung Galaxy S24 Ultra', isPrimary: true }
        ],
        stock: 67,
        specifications: [
          { key: 'Storage', value: '512GB' },
          { key: 'Display', value: '6.8-inch Dynamic AMOLED 2X' },
          { key: 'Camera', value: '200MP Main' }
        ],
        tags: ['smartphone', 'samsung', 'android', '5g'],
        status: 'active',
        isFeatured: false,
        rating: { average: 4.8, count: 167 }
      }
    ]);

    console.log('✅ Products created');

    console.log('\n🎉 Database seeding completed successfully!');
    console.log(`\nAdmin Credentials:`);
    console.log(`Email: ${admin.email}`);
    console.log(`Password: ${process.env.ADMIN_PASSWORD || 'Admin@123'}`);
    console.log(`\nCategories created: ${categories.length}`);
    console.log(`Products created: ${products.length}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
