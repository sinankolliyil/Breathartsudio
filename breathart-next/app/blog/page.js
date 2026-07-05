'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogs } from '@/data/blogs';

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState('All posts');
  
  // Extract unique categories
  const categories = ['All posts', ...new Set(blogs.map(blog => blog.category))].sort((a, b) => {
      if (a === 'All posts') return -1;
      if (b === 'All posts') return 1;
      return a.localeCompare(b);
  });

  const filteredBlogs = activeCategory === 'All posts' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <main className="blog-minimal-main">
      {/* Editorial Header */}
      <div className="blog-minimal-header">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="blog-minimal-title"
        >
          The Journal
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="blog-minimal-intro"
        >
          After years of capturing beautiful moments, we decided to take up the challenge to share our stories! Here we post stories from our photoshoots, to give you an idea of our work but also to share and talk about our passion for photography. Enjoy our blog.
        </motion.p>
      </div>

      {/* Navigation / Filters */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="blog-minimal-nav"
      >
        <div className="blog-minimal-categories">
          {categories.map((cat, idx) => (
            <span 
              key={idx} 
              className={`blog-minimal-cat ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="blog-minimal-layout-grid">
        {/* Blog Feed */}
        <div className="blog-minimal-feed">
          {filteredBlogs.map((blog, idx) => (
            <motion.article 
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="blog-minimal-post"
            >
              <Link href={`/blog/${blog.slug}`} className="blog-minimal-image-wrapper block">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="blog-minimal-image"
                />
              </Link>
              
              <div className="blog-minimal-content">
                <Link href={`/blog/${blog.slug}`} className="block">
                  <h2 className="blog-minimal-post-title">
                    {blog.title.split('|')[0]}
                  </h2>
                  <span className="blog-minimal-meta">
                    {/* Simulate a date since we don't have one in data currently */}
                    {idx === 0 ? 'October 2024' : idx === 1 ? 'September 2024' : 'August 2024'} - {blog.category}
                  </span>
                  <p className="blog-minimal-excerpt">
                    {blog.metaDescription}
                  </p>
                </Link>
                
                <div className="blog-minimal-post-footer">
                  <Link href={`/blog/${blog.slug}`} className="blog-minimal-readmore">
                    Read More 
                    <svg style={{marginLeft: '0.5rem'}} width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Right Sidebar */}
        <aside className="blog-minimal-sidebar">
          {/* Categories Section */}
          <div className="blog-sidebar-section">
            <h3 className="blog-sidebar-title">Category</h3>
            <ul className="blog-sidebar-list">
              {categories.filter(c => c !== 'All posts').map((cat, idx) => (
                <li key={idx} className="blog-sidebar-item">
                  <span 
                    className="blog-sidebar-link" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Blogs Section */}
          <div className="blog-sidebar-section">
            <h3 className="blog-sidebar-title">Recent Blog</h3>
            <ul className="blog-sidebar-list">
              {blogs.slice(0, 4).map((blog, idx) => (
                <li key={idx} className="blog-sidebar-item" style={{ marginBottom: '1.5rem' }}>
                  <Link href={`/blog/${blog.slug}`} className="blog-sidebar-recent-title">
                    {blog.title.split('|')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
