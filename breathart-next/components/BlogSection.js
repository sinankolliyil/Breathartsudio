'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogs } from '@/data/blogs';

export default function BlogSection() {
  // Take the two most recent blogs for the homepage
  const recentBlogs = blogs.slice(0, 2);

  return (
    <section className="section" style={{ background: 'var(--color-shade-1)', padding: '6rem 0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', gap: '2rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '1rem' }}
            >
              Our Journal
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontFamily: 'var(--font-heading)', color: 'var(--color-white)', lineHeight: 1.2 }}
            >
              Latest Inspiration
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden-mobile"
          >
            <Link href="/blog" className="noha-btn-outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
              View All Articles
            </Link>
          </motion.div>
        </div>

        <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {recentBlogs.map((blog, idx) => (
            <motion.div 
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="blog-card"
            >
              <Link href={`/blog/${blog.slug}`} style={{ display: 'block', height: '100%' }}>
                <div className="blog-item-img-wrapper" style={{ marginBottom: '2rem' }}>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="blog-item-img"
                  />
                </div>
                <h3 className="blog-item-title" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {blog.title.split('|')[0]}
                </h3>
                <p className="blog-desc" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1.5rem' }}>
                  {blog.metaDescription}
                </p>
                <span className="blog-read-more">
                  Read Full Article
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }} className="show-mobile">
          <Link href="/blog" className="noha-btn-outline" style={{ display: 'inline-block', width: '100%' }}>
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
