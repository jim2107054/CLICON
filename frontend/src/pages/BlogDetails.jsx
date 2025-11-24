import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogArticles, { getBlogById, getBlogsByCategory } from "../assets/blogData";
import { FaCalendar, FaUser, FaEye, FaHeart, FaComment, FaArrowLeft, FaShare, FaTwitter, FaFacebook, FaLinkedin, FaClock, FaBookmark } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

const BlogDetails = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [localLikes, setLocalLikes] = useState(0);

  useEffect(() => {
    const id = blogId || localStorage.getItem("currentBlogId");
    const foundBlog = getBlogById(parseInt(id));
    
    if (foundBlog) {
      setBlog(foundBlog);
      setLocalLikes(foundBlog.likes);
      localStorage.setItem("currentBlogId", foundBlog.id);
      // Scroll to top on blog change
      window.scrollTo(0, 0);
    } else {
      navigate("/blogs");
    }
  }, [blogId, navigate]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: Date.now(),
        author: "Current User",
        avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
        content: comment,
        date: new Date().toISOString()
      };
      setComments([...comments, newComment]);
      setComment("");
    }
  };

  const handleLike = () => {
    if (!liked) {
      setLocalLikes(localLikes + 1);
    } else {
      setLocalLikes(localLikes - 1);
    }
    setLiked(!liked);
  };

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  const relatedBlogs = getBlogsByCategory(blog.category)
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button - Fixed at top */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft /> Back to all articles
          </button>
        </div>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          {blog.title}
        </h1>

        {/* Subtitle/Excerpt */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Author Info and Meta */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{blog.author.name}</p>
              <p className="text-sm text-gray-500">{blog.author.role}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <FaCalendar className="text-xs" />
                  {formatDate(blog.publishedDate)}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="text-xs" />
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Engagement Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                liked ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <FaHeart className={liked ? 'fill-current' : ''} />
              <span className="font-medium">{localLikes}</span>
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-full transition-all ${
                bookmarked ? 'bg-yellow-50 text-yellow-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <FaBookmark className={bookmarked ? 'fill-current' : ''} />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"><span class="text-white text-6xl font-bold">${blog.category[0]}</span></div>`;
              }}
            />
          </div>
        </div>

        {/* Article Content - Medium Style Typography */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            className="text-gray-800 leading-relaxed"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
            }}
          >
            {blog.content.split('\n\n').map((paragraph, index) => {
              // Check if paragraph is a heading
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-gray-900">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else {
                return (
                  <p key={index} className="mb-6 text-gray-800">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-12 pb-8 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => navigate('/blogs')}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mb-12 pb-8 border-b border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Share this article</h3>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              <FaFacebook />
              Facebook
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
              <FaTwitter />
              Twitter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
              <FaLinkedin />
              LinkedIn
            </button>
          </div>
        </div>

        {/* Author Bio Section */}
        <div className="mb-12 p-8 bg-gray-50 rounded-lg">
          <div className="flex items-start gap-6">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Written by {blog.author.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{blog.author.role}</p>
              <p className="text-gray-700 leading-relaxed">{blog.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Responses ({comments.length})
          </h2>
          
          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts on this article..."
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors text-lg"
              rows="4"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              className="mt-3 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Publish Response
            </button>
          </form>

          {/* Display Comments */}
          <div className="space-y-6">
            {comments.length > 0 ? (
              comments.map((c) => (
                <div key={c.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                  <img
                    src={c.avatar}
                    alt={c.author}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-gray-900">{c.author}</span>
                      <span className="text-sm text-gray-500">
                        {formatDate(c.date)}
                      </span>
                    </div>
                    <p className="text-gray-800 leading-relaxed">{c.content}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                      <button className="hover:text-gray-900 transition-colors flex items-center gap-1">
                        <BiLike /> Like
                      </button>
                      <button className="hover:text-gray-900 transition-colors">Reply</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-2">No responses yet</p>
                <p className="text-sm">Be the first to share your thoughts</p>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* View All Articles Button */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/blogs')}
            className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            View All Articles
            <FaArrowLeft className="rotate-180" />
          </button>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedBlogs.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">More from {blog.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <article
                  key={relatedBlog.id}
                  onClick={() => navigate(`/blog-details/${relatedBlog.id}`)}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <img
                      src={relatedBlog.featuredImage}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"><span class="text-white text-4xl font-bold">${relatedBlog.category[0]}</span></div>`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gray-500 mb-2 block">{relatedBlog.readTime}</span>
                    <h3 className="font-bold text-xl mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">{relatedBlog.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <img
                        src={relatedBlog.author.avatar}
                        alt={relatedBlog.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">{relatedBlog.author.name}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;