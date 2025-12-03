import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const EmailArchSlide = () => {
    return (
        <Slide title="4. Correu Electrònic">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 2rem' }}>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ textAlign: 'center' }}
                >
                    <div style={{ fontSize: '4rem' }}>🧑‍💻</div>
                    <h3>MUA</h3>
                    <p>Mail User Agent</p>
                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>(Outlook, Thunderbird, Gmail)</div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ fontSize: '2rem', color: '#00f2ff' }}
                >
                    ➡️ SMTP ➡️
                </motion.div>

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ textAlign: 'center', background: '#1a1a1a', padding: '1rem', borderRadius: '10px', border: '1px solid #7000ff' }}
                >
                    <div style={{ fontSize: '4rem' }}>🏢</div>
                    <h3>MTA</h3>
                    <p>Mail Transfer Agent</p>
                    <p style={{ fontSize: '0.8rem' }}>Servidor de Correu</p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1 }}
                    style={{ fontSize: '2rem', color: '#00f2ff' }}
                >
                    ➡️ SMTP ➡️
                </motion.div>

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    style={{ textAlign: 'center', background: '#1a1a1a', padding: '1rem', borderRadius: '10px', border: '1px solid #7000ff' }}
                >
                    <div style={{ fontSize: '4rem' }}>🏢</div>
                    <h3>MTA</h3>
                    <p>Destí</p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7 }}
                    style={{ fontSize: '2rem', color: '#7000ff' }}
                >
                    ➡️ IMAP ➡️
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.0 }}
                    style={{ textAlign: 'center' }}
                >
                    <div style={{ fontSize: '4rem' }}>📩</div>
                    <h3>MUA</h3>
                    <p>Receptor</p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default EmailArchSlide;
