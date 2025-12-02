import React, { useState } from 'react';
import { FaStar, FaUserCircle, FaThumbsUp, FaThumbsDown, FaCheckCircle } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const ProductReview = ({ product }) => {
  const [reviewFilter, setReviewFilter] = useState('all');
  const [helpfulReviews, setHelpfulReviews] = useState({});
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: '',
    comment: '',
    name: ''
  });

  // Generate reviews based on product ID for variety
  // Backend: Fetch from reviews table with product_id foreign key
  const generateReviews = () => {
    // In production, replace with: const reviews = product.reviews || [];
    return [
      {
        id: product.id * 100 + 1,
        name: ["Sarah Johnson", "Michael Chen", "Emily Rodriguez", "David Kim"][product.id % 4],
        rating: 5,
        date: `2024-${10 + (product.id % 2)}-${10 + (product.id % 20)}`,
        verified: true,
        title: "Absolutely Amazing Product!",
        comment: `This ${product.title?.substring(0, 30)} exceeded all my expectations. The quality is outstanding and it works perfectly. I've been using it for over a month now and couldn't be happier with my purchase. Highly recommend to anyone looking for a reliable product.`,
        helpful: 35 + (product.id % 20),
        notHelpful: product.id % 3
      },
      {
        id: product.id * 100 + 2,
        name: ["James Wilson", "Lisa Anderson", "Robert Taylor", "Jennifer Lee"][product.id % 4],
        rating: 4,
        date: `2024-${9 + (product.id % 3)}-${5 + (product.id % 25)}`,
        verified: true,
        title: "Great value for money",
        comment: `Really impressed with the build quality and features of this ${product.category || 'product'}. Does everything I need it to do. The only minor issue is the setup took a bit longer than expected, but once it's up and running, it's fantastic. Would definitely buy again.`,
        helpful: 25 + (product.id % 15),
        notHelpful: product.id % 2
      },
      {
        id: product.id * 100 + 3,
        name: ["Emma Thompson", "Daniel Martinez", "Olivia Brown", "William Davis"][product.id % 4],
        rating: product.id % 3 === 0 ? 5 : 4,
        date: `2024-${8 + (product.id % 4)}-${15 + (product.id % 15)}`,
        verified: true,
        title: product.id % 2 ? "Best purchase this year!" : "Exactly what I needed",
        comment: `I've been searching for something like this for months and finally found it! The performance is incredible and the design is sleek. At $${product.price}, it's worth every penny. Customer service was also very helpful when I had questions. 10/10 would recommend!`,
        helpful: 20 + (product.id % 18),
        notHelpful: product.id % 4 === 0 ? 0 : 1
      },
      {
        id: 4,
        name: "David Thompson",
        rating: 4,
        date: "2024-10-28",
        verified: true,
        title: "Solid product with minor flaws",
        comment: "Overall, I'm satisfied with this purchase. It performs well and meets most of my needs. There are a couple of features that could be improved, but nothing major. For the price point, it's a great deal.",
        helpful: 19,
        notHelpful: 3
      },
      {
        id: product.id * 100 + 5,
        name: ["Patricia Martinez", "Richard Harris", "Linda Walker", "Charles Young"][(product.id + 2) % 4],
        rating: product.price > 500 ? 5 : 4,
        date: `2024-${6 + (product.id % 6)}-${12 + (product.id % 18)}`,
        verified: product.id % 2 === 0,
        title: "Worth every penny!",
        comment: `Premium product with excellent features. The attention to detail is impressive. Been using it for ${2 + (product.id % 4)} weeks now and it's performing flawlessly. Great investment!`,
        helpful: 18 + (product.id % 15),
        notHelpful: product.id % 5
      },
      {
        id: product.id * 100 + 6,
        name: ["Kevin Davis", "Laura Wilson", "Brian Moore", "Michelle Taylor"][(product.id + 3) % 4],
        rating: 3 + (product.id % 3 === 0 ? 1 : 0),
        date: `2024-${5 + (product.id % 7)}-${5 + (product.id % 25)}`,
        verified: true,
        title: product.id % 2 ? "Good but not great" : "Solid choice",
        comment: `It's a decent product that gets the job done. ${product.id % 2 ? 'However, I expected a bit more for the price.' : 'Performance meets expectations.'} Some features feel basic compared to competitors. Still functional and reliable though.`,
        helpful: 12 + (product.id % 8),
        notHelpful: 3 + (product.id % 4)
      }
    ];
  };

  const reviews = generateReviews();

  // Calculate rating distribution
  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  const filteredReviews = reviewFilter === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === parseInt(reviewFilter));

  const handleHelpful = (reviewId, type) => {
    setHelpfulReviews(prev => ({
      ...prev,
      [reviewId]: type
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // In a real app, this would send to backend
    alert('Thank you for your review! It will be published after verification.');
    setShowReviewForm(false);
    setNewReview({ rating: 5, title: '', comment: '', name: '' });
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Rating Overview */}
      <div className="bg-gradient-to-r from-btnColor to-orange-500 p-8 rounded-xl mb-8 text-white shadow-lg">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Average Rating */}
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">{averageRating}</div>
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar 
                  key={star} 
                  className={`text-2xl ${star <= Math.round(averageRating) ? 'text-white' : 'text-orange-300'}`}
                />
              ))}
            </div>
            <p className="text-orange-100">Based on {totalReviews} reviews</p>
          </div>

          {/* Rating Distribution */}
          <div className="md:col-span-2">
            <h3 className="font-bold mb-4 text-xl">Rating Distribution</h3>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3 mb-2">
                <span className="w-12 font-medium">{rating} ★</span>
                <div className="flex-1 bg-orange-300 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-white h-full rounded-full transition-all duration-500"
                    style={{ width: `${(ratingDistribution[rating] / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="w-12 text-right">{ratingDistribution[rating]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter and Write Review */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setReviewFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              reviewFilter === 'all' 
                ? 'bg-btnColor text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Reviews
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setReviewFilter(rating.toString())}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                reviewFilter === rating.toString()
                  ? 'bg-btnColor text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {rating} ★
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-blueButton text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Write a Review
        </button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blueButton mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Write Your Review</h3>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Your Name</label>
              <input
                type="text"
                required
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blueButton focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    onClick={() => setNewReview({...newReview, rating: star})}
                    className={`text-3xl cursor-pointer transition-all ${
                      star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Review Title</label>
              <input
                type="text"
                required
                value={newReview.title}
                onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blueButton focus:outline-none"
                placeholder="Summarize your experience"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-gray-700">Your Review</label>
              <textarea
                required
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                rows="4"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blueButton focus:outline-none resize-none"
                placeholder="Share your experience with this product..."
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-gradient-to-r from-btnColor to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-600 transition-all duration-200 shadow-md"
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200">
            <div className="flex items-start gap-4 mb-4">
              <FaUserCircle className="text-5xl text-gray-400" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  {review.verified && (
                    <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                      <MdVerified /> Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar 
                        key={star} 
                        className={`${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            <h5 className="font-bold text-lg mb-2 text-gray-800">{review.title}</h5>
            <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-600">Was this helpful?</span>
              <button
                onClick={() => handleHelpful(review.id, 'yes')}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all ${
                  helpfulReviews[review.id] === 'yes'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FaThumbsUp /> Yes ({review.helpful})
              </button>
              <button
                onClick={() => handleHelpful(review.id, 'no')}
                className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all ${
                  helpfulReviews[review.id] === 'no'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FaThumbsDown /> No ({review.notHelpful})
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-500 text-lg">No reviews found for this rating.</p>
        </div>
      )}
    </div>
  );
};

export default ProductReview;