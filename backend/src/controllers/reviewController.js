import Review from '../models/Review.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import { asyncHandler } from '../middleware/errorMiddleware.js';

// @desc    Get reviews for a product
// @route   GET /api/reviews/product/:productId
// @access  Public
export const getProductReviews = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const query = {
    product: req.params.productId,
    status: 'approved'
  };

  // Filter by rating
  if (req.query.rating) {
    query.rating = parseInt(req.query.rating);
  }

  const reviews = await Review.find(query)
    .populate('user', 'name avatar')
    .sort('-createdAt')
    .limit(limit)
    .skip(skip);

  const total = await Review.countDocuments(query);

  res.json({
    reviews,
    page,
    pages: Math.ceil(total / limit),
    total,
  });
});

// @desc    Create a review
// @route   POST /api/reviews
// @access  Private
export const createReview = asyncHandler(async (req, res) => {
  const { product, rating, title, comment } = req.body;

  // Check if product exists
  const productExists = await Product.findById(product);

  if (!productExists) {
    res.status(404);
    throw new Error('Product not found');
  }

  // Check if user already reviewed this product
  const alreadyReviewed = await Review.findOne({
    product,
    user: req.user._id
  });

  if (alreadyReviewed) {
    res.status(400);
    throw new Error('You have already reviewed this product');
  }

  // Check if user purchased this product
  const hasPurchased = await Order.findOne({
    user: req.user._id,
    'items.product': product,
    status: 'delivered'
  });

  const review = await Review.create({
    product,
    user: req.user._id,
    rating,
    title,
    comment,
    isVerifiedPurchase: !!hasPurchased,
    status: 'approved' // Auto-approve, or set to 'pending' for manual moderation
  });

  const populatedReview = await Review.findById(review._id)
    .populate('user', 'name avatar');

  res.status(201).json(populatedReview);
});

// @desc    Update a review
// @route   PUT /api/reviews/:id
// @access  Private
export const updateReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    res.status(404);
    throw new Error('Review not found');
  }

  // Check if user owns this review
  if (review.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('Not authorized to update this review');
  }

  review.rating = req.body.rating || review.rating;
  review.title = req.body.title || review.title;
  review.comment = req.body.comment || review.comment;
  review.status = 'pending'; // Re-submit for moderation after edit

  const updatedReview = await review.save();

  res.json(updatedReview);
});

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private
export const deleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    res.status(404);
    throw new Error('Review not found');
  }

  // Check if user owns this review or is admin
  if (review.user.toString() !== req.user._id.toString() && !req.admin) {
    res.status(403);
    throw new Error('Not authorized to delete this review');
  }

  await review.deleteOne();
  res.json({ message: 'Review removed' });
});

// @desc    Get all reviews (Admin)
// @route   GET /api/reviews
// @access  Private/Admin
export const getAllReviews = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  const query = {};

  if (req.query.status) {
    query.status = req.query.status;
  }

  const reviews = await Review.find(query)
    .populate('user', 'name email')
    .populate('product', 'name images')
    .sort('-createdAt')
    .limit(limit)
    .skip(skip);

  const total = await Review.countDocuments(query);

  res.json({
    reviews,
    page,
    pages: Math.ceil(total / limit),
    total,
  });
});

// @desc    Update review status (Admin)
// @route   PATCH /api/reviews/:id/status
// @access  Private/Admin
export const updateReviewStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const review = await Review.findById(req.params.id);

  if (review) {
    review.status = status;
    const updatedReview = await review.save();
    res.json(updatedReview);
  } else {
    res.status(404);
    throw new Error('Review not found');
  }
});
