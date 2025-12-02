import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogArticles, { getAllCategories, getAllTags } from "../../assets/blogData";
import { FaCalendar, FaUser, FaEye, FaHeart, FaClock, FaTag, FaSearch } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import SEO from "../../components/user/SEO";
import { PAGE_SEO } from "../../config/seo.config";

const BlogList = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const categories = ["All", ...getAllCategories()];
  const tags = ["All", ...getAllTags()];

  let filteredBlogs = blogArticles.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesTag = selectedTag === "All" || blog.tags.includes(selectedTag);
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesTag && matchesSearch;
  });

  // Sort blogs
  if (sortBy === "latest") {
    filteredBlogs = filteredBlogs.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  } else if (sortBy === "popular") {
    filteredBlogs = filteredBlogs.sort((a, b) => b.views - a.views);
  } else if (sortBy === "liked") {
    filteredBlogs = filteredBlogs.sort((a, b) => b.likes - a.likes);
  }

  const handleBlogClick = (blogId) => {
    navigate(`/blog-details/${blogId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">CLICON Blog</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Insights on technology, e-commerce, and digital innovation
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, authors, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500 transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "All" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              {/* Tag Filter */}
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500 transition-colors"
              >
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag === "All" ? "All Tags" : tag}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Control */}
            <div className="flex items-center gap-2">
              <BiTrendingUp className="text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500 transition-colors"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="liked">Most Liked</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== "All" || selectedTag !== "All" || searchTerm) && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedCategory !== "All" && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {selectedCategory}
                </span>
              )}
              {selectedTag !== "All" && (
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {selectedTag}
                </span>
              )}
              {searchTerm && (
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  "{searchTerm}"
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedTag("All");
                  setSearchTerm("");
                }}
                className="text-sm text-red-500 hover:text-red-700 underline"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Results Count */}
          <p className="text-gray-600 text-center">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"} found
          </p>
        </div>

        {/* Blog Grid - Medium Style */}
        <div className="space-y-12">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <article
                key={blog.id}
                onClick={() => handleBlogClick(blog.id)}
                className="group cursor-pointer border-b border-gray-200 pb-12 last:border-b-0 hover:bg-gray-50 transition-colors p-6 rounded-lg"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Featured Image */}
                  <div className="md:col-span-1">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"><span class="text-white text-4xl font-bold">${blog.category[0]}</span></div>`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      {/* Category Badge */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                          {blog.category}
                        </span>
                        <span className="text-sm text-gray-500">{blog.readTime}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gray-600 transition-colors leading-tight">
                        {blog.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700"
                          >
                            <FaTag className="text-xs" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Author and Meta Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-3">
                        <img
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>

                      {/* Engagement Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <FaEye />
                          <span>{blog.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaHeart className="text-red-500" />
                          <span>{blog.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters to find what you're looking for
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedTag("All");
                  setSearchTerm("");
                }}
                className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;