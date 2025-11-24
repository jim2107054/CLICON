export const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT_DETAILS: "/shop/:productId",
  CART: "/shoping-card",
  WISHLIST: "/wish-list",
  COMPARE: "/compare",
  CHECKOUT: "/check-out",
  CHECKOUT_SUCCESS: "/check-out-success",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/password",
  RESET_PASSWORD: "/reset-password",
  VERIFY_EMAIL: "/verify-email",
  TRACK_ORDER: "/track-order",
  TRACK_ORDER_DETAILS: "/track-order-details",
  ABOUT_US: "/about-us",
  CUSTOMER_SUPPORT: "/customer-support",
  FAQS: "/faqs",
  BLOGS: "/blogs",
  BLOG_DETAILS: "/blogs/:blogId",
  NEED_HELP: "/need-help",
};

export const getProductDetailsRoute = (productId) => `/shop/${productId}`;
export const getBlogDetailsRoute = (blogId) => `/blogs/${blogId}`;
