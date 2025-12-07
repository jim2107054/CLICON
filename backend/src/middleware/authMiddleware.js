import { verifyToken } from '../config/jwt.js';
import User from '../models/User.js';
import Admin from '../models/Admin.js';

// Protect routes - User authentication
export const protect = async (req, res, next) => {
  let token;
  let userId;

  // Check for JWT token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = verifyToken(token);

      if (!decoded) {
        return res.status(401).json({ message: 'Not authorized, token failed' });
      }

      userId = decoded.id;
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } 
  // Check for session-based authentication
  else if (req.session && req.session.userId) {
    userId = req.session.userId;
  }

  // If we have a userId (from either JWT or session), get the user
  if (userId) {
    try {
      req.user = await User.findById(userId).select('-password');

      if (!req.user) {
        return res.status(401).json({ message: 'User not found' });
      }

      if (req.user.status !== 'active') {
        return res.status(401).json({ message: 'Account is not active' });
      }

      return next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Not authorized' });
    }
  }

  // No authentication found
  return res.status(401).json({ message: 'Not authorized, no token or session' });
};

// Admin authentication middleware
export const adminProtect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = verifyToken(token, true);

      if (!decoded || !decoded.isAdmin) {
        return res.status(403).json({ message: 'Not authorized as admin' });
      }

      req.admin = await Admin.findById(decoded.id).select('-password');

      if (!req.admin) {
        return res.status(403).json({ message: 'Admin not found' });
      }

      if (!req.admin.isActive) {
        return res.status(403).json({ message: 'Admin account is not active' });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(403).json({ message: 'Not authorized as admin' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Check admin permissions
export const checkPermission = (...permissions) => {
  return (req, res, next) => {
    if (req.admin.role === 'super-admin') {
      return next();
    }

    const hasPermission = permissions.some(permission => 
      req.admin.permissions.includes(permission)
    );

    if (!hasPermission) {
      return res.status(403).json({ 
        message: 'You do not have permission to perform this action' 
      });
    }

    next();
  };
};
