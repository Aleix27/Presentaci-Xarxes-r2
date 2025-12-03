import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ children, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem',
        boxSizing: 'border-box',
        zIndex: 1
      }}
    >
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '1200px',
        height: '80%',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {title && (
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gradient"
            style={{
              fontSize: '3rem',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
          >
            {title}
          </motion.h2>
        )}
        <div style={{ flex: 1, position: 'relative' }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Slide;
