import express from 'express';
import {
  getCategories,
  getCategoryById,
  getCategoryBySlug,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryTree,
} from '../controllers/categoryController.js';
import { adminProtect, checkPermission } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getCategories);
router.get('/tree', getCategoryTree);
router.get('/slug/:slug', getCategoryBySlug);
router.get('/:id', getCategoryById);

// Admin routes
router.post('/', adminProtect, checkPermission('categories'), createCategory);
router.put('/:id', adminProtect, checkPermission('categories'), updateCategory);
router.delete('/:id', adminProtect, checkPermission('categories'), deleteCategory);

export default router;
