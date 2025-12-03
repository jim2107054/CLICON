import express from 'express';
import {
  getProductReviews,
  createReview,
  updateReview,
  deleteReview,
  getAllReviews,
  updateReviewStatus,
} from '../controllers/reviewController.js';
import { protect, adminProtect, checkPermission } from '../middleware/authMiddleware.js';
import { reviewValidation, validate } from '../middleware/validationMiddleware.js';

const router = express.Router();

// Public routes
router.get('/product/:productId', getProductReviews);

// User routes
router.post('/', protect, reviewValidation, validate, createReview);
router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

// Admin routes
router.get('/', adminProtect, checkPermission('products'), getAllReviews);
router.patch('/:id/status', adminProtect, checkPermission('products'), updateReviewStatus);

export default router;
