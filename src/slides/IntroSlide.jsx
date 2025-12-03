import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const IntroSlide = () => {
    return (
        <Slide>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center',
                perspective: '1000px'
            }}>
                {/* 3D Network Orb */}
                <motion.div
                    animate={{ rotateY: 360, rotateX: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: '200px',
                        height: '200px',
                        position: 'absolute',
                        top: '15%',
                        transformStyle: 'preserve-3d',
                        opacity: 0.3
                    }}
                >
                    {[...Array(3)].map((_, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            border: '2px solid #00f2ff',
                            borderRadius: '50%',
                            transform: `rotateY(${i * 60}deg) rotateX(${i * 30}deg)`
                        }} />
                    ))}
                </motion.div>

                <motion.h1
                    initial={{ y: 50, opacity: 0, rotateX: -20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="gradient-text"
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        margin: 0,
                        lineHeight: 1.1,
                        zIndex: 10,
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}
                >
                    Eines de xarxa
                </motion.h1>

                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', margin: '1rem 0', fontWeight: 300, color: '#94a3b8', zIndex: 10 }}
                >
                    Pràctiques - Xarxes de Dades i Internet
                </motion.h2>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    style={{ marginTop: '4rem', zIndex: 10 }}
                >
                    <div className="glass-panel" style={{
                        padding: '1rem 3rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 0 20px rgba(0, 242, 255, 0.2)'
                    }}>
                        <span style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.2rem' }}>Aleix Carles i Pol Mercader</span>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#64748b' }}
                >
                    Imatges de l'autor o Freepik
                </motion.p>
            </div>
        </Slide>
    );
};

export default IntroSlide;
