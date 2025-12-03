import express from 'express';
import {
  adminLogin,
  getAdminProfile,
  updateAdminProfile,
} from '../controllers/adminAuthController.js';
import { adminProtect } from '../middleware/authMiddleware.js';
import { loginValidation, validate } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/login', loginValidation, validate, adminLogin);
router.get('/profile', adminProtect, getAdminProfile);
router.put('/profile', adminProtect, updateAdminProfile);

export default router;
