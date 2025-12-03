import express from 'express';
import {
  getAnalyticsOverview,
  getSalesData,
  getProductAnalytics,
  getCustomerAnalytics,
} from '../controllers/analyticsController.js';
import { adminProtect, checkPermission } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes are admin-only
router.use(adminProtect, checkPermission('analytics'));

router.get('/overview', getAnalyticsOverview);
router.get('/sales', getSalesData);
router.get('/products', getProductAnalytics);
router.get('/customers', getCustomerAnalytics);

export default router;
