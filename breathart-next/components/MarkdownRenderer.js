'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MarkdownRenderer = ({ content }) => {
  const blocks = content.split('\n\n');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="markdown-renderer"
    >
      {blocks.map((block, index) => {
        // H2
        if (block.startsWith('## ')) {
          return (
            <motion.h2 
              variants={itemVariants}
              key={index}
            >
              {block.replace('## ', '')}
            </motion.h2>
          );
        }
        
        // H1
        if (block.startsWith('# ')) {
          return (
            <motion.h1 
              variants={itemVariants}
              key={index}
            >
              {block.replace('# ', '')}
            </motion.h1>
          );
        }
        
        // Unordered List
        if (block.startsWith('- ')) {
          const items = block.split('\n').map(line => line.replace('- ', ''));
          return (
            <motion.ul variants={itemVariants} key={index}>
              {items.map((item, i) => {
                const bolded = renderBold(item);
                return (
                  <li key={i}>
                    <span className="markdown-list-icon">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span style={{ flex: 1 }}>{bolded}</span>
                  </li>
                );
              })}
            </motion.ul>
          );
        }

        // Paragraphs (apply Drop Cap to the very first paragraph via CSS :first-child pseudo selector in globals.css)
        return (
          <motion.p 
            variants={itemVariants}
            key={index}
          >
            {renderBold(block)}
          </motion.p>
        );
      })}
    </motion.div>
  );
};

const renderBold = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="markdown-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default MarkdownRenderer;
