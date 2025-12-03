import express from 'express';
import {
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from '../controllers/customerController.js';
import { adminProtect, checkPermission } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes are admin-only
router.use(adminProtect, checkPermission('customers'));

router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;
