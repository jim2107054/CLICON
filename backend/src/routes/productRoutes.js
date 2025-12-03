import express from 'express';
import {
  getProducts,
  getProductById,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductStock,
  getFeaturedProducts,
  getRelatedProducts,
} from '../controllers/productController.js';
import { protect, adminProtect, checkPermission } from '../middleware/authMiddleware.js';
import { productValidation, validate } from '../middleware/validationMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/slug/:slug', getProductBySlug);
router.get('/:id', getProductById);
router.get('/:id/related', getRelatedProducts);

// Admin routes
router.post('/', adminProtect, checkPermission('products'), productValidation, validate, createProduct);
router.put('/:id', adminProtect, checkPermission('products'), updateProduct);
router.delete('/:id', adminProtect, checkPermission('products'), deleteProduct);
router.patch('/:id/stock', adminProtect, checkPermission('products'), updateProductStock);

export default router;
