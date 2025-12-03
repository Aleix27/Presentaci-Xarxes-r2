import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const DNSSlide = () => {
    return (
        <Slide title="3. DNS (Domain Name System)">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ textAlign: 'center' }}
                >
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧑‍💻</div>
                    <h3>Client</h3>
                    <div style={{ background: '#333', padding: '0.5rem', borderRadius: '8px' }}>www.google.com</div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ fontSize: '2rem', color: '#00f2ff' }}
                >
                    ➜ ? ➜
                </motion.div>

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ textAlign: 'center' }}
                >
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📚</div>
                    <h3>Servidor DNS</h3>
                    <div style={{ background: '#333', padding: '0.5rem', borderRadius: '8px' }}>142.250.184.68</div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    style={{ fontSize: '2rem', color: '#7000ff' }}
                >
                    ➜ OK ➜
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    style={{ textAlign: 'center' }}
                >
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌐</div>
                    <h3>Servidor Web</h3>
                    <div style={{ background: '#333', padding: '0.5rem', borderRadius: '8px' }}>Connexió Establerta</div>
                </motion.div>

            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem', opacity: 0.8 }}>
                <p>El DNS tradueix noms de domini llegibles per humans a adreces IP.</p>
            </div>
        </Slide>
    );
};

export default DNSSlide;
