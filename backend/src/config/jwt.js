import jwt from 'jsonwebtoken';

// Generate JWT Token for Users
export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

// Generate JWT Token for Admins
export const generateAdminToken = (adminId) => {
  return jwt.sign(
    { id: adminId, isAdmin: true }, 
    process.env.JWT_ADMIN_SECRET || process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_ADMIN_EXPIRE || '1d' }
  );
};

// Verify Token
export const verifyToken = (token, isAdmin = false) => {
  try {
    const secret = isAdmin 
      ? (process.env.JWT_ADMIN_SECRET || process.env.JWT_SECRET)
      : process.env.JWT_SECRET;
    
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};
