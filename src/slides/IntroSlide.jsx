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
                textAlign: 'center'
            }}>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="gradient-text"
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: 0, lineHeight: 1.1 }}
                >
                    Eines de xarxa
                </motion.h1>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', margin: '1rem 0', fontWeight: 300, color: '#94a3b8' }}
                >
                    Pràctiques - Xarxes de Dades i Internet
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{ marginTop: '4rem' }}
                >
                    <div className="glass-panel" style={{ padding: '1rem 3rem' }}>
                        <span style={{ color: '#f8fafc', fontWeight: 600, fontSize: '1.2rem' }}>Antoni Martínez Ballesté</span>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#64748b' }}
                >
                    Imatges de l'autor o Freepik
                </motion.p>
            </div>
        </Slide>
    );
};

export default IntroSlide;
