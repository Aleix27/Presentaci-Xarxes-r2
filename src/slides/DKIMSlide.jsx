import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const DKIMSlide = () => {
    return (
        <Slide title="4.3 Seguretat (DKIM)">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '2rem', marginBottom: '2rem' }}
                >
                    DomainKeys Identified Mail
                </motion.h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{ fontSize: '4rem' }}>✍️</div>
                        <p>Signatura Digital</p>
                    </motion.div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100px' }}
                        transition={{ delay: 0.6 }}
                        style={{ height: '4px', background: '#00f2ff' }}
                    />

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{ fontSize: '4rem' }}>🛡️</div>
                        <p>Verificació de Domini</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="glass-panel"
                    style={{ padding: '2rem', marginTop: '3rem', maxWidth: '600px' }}
                >
                    <p>Permet verificar que un correu realment prové del domini que diu ser.</p>
                    <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>Evita el Phishing i l'Spam.</p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default DKIMSlide;
