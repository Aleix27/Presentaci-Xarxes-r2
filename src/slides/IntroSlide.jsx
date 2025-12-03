import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const NetworkOrb = () => {
    return (
        <div style={{
            position: 'relative',
            width: '250px',
            height: '250px',
            transformStyle: 'preserve-3d',
            animation: 'spin 20s linear infinite'
        }}>
            <style>{`
        @keyframes spin {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }
      `}</style>
            {[...Array(6)].map((_, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(59, 130, 246, 0.4)', // Blue
                    borderRadius: '50%',
                    transform: `rotateY(${i * 60}deg) rotateX(45deg)`
                }} />
            ))}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20px',
                height: '20px',
                background: '#3b82f6',
                borderRadius: '50%',
                boxShadow: '0 0 30px #3b82f6'
            }} />
        </div>
    );
};

const IntroSlide = () => {
    return (
        <Slide>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center'
            }}>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    style={{ marginBottom: '3rem' }}
                >
                    <NetworkOrb />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="gradient-text"
                    style={{ fontSize: '4.5rem', margin: 0, lineHeight: 1.1 }}
                >
                    Xarxes de Dades i Internet
                </motion.h1>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    style={{ fontSize: '2rem', margin: '1rem 0', fontWeight: 300, color: '#94a3b8' }}
                >
                    Serveis d'Internet
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{ marginTop: '4rem' }}
                >
                    <div className="glass-panel" style={{ padding: '1rem 3rem' }}>
                        <span style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.2rem' }}>Aleix Carles i Pol Mercader</span>
                    </div>
                </motion.div>

            </div>
        </Slide>
    );
};

export default IntroSlide;
