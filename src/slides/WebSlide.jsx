import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const WebSlide = () => {
    return (
        <Slide title="4. Web (HTTP/HTTPS)">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', height: '100%', alignContent: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel"
                    style={{ padding: '2rem', textAlign: 'center' }}
                >
                    <h3 style={{ color: '#00f2ff', fontSize: '2rem' }}>HTTP</h3>
                    <p>HyperText Transfer Protocol</p>
                    <div style={{ fontSize: '3rem', margin: '1rem 0' }}>🔓</div>
                    <p>Port 80</p>
                    <p style={{ color: '#ff6b6b' }}>No Xifrat</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel"
                    style={{ padding: '2rem', textAlign: 'center', border: '1px solid #00f2ff' }}
                >
                    <h3 style={{ color: '#7000ff', fontSize: '2rem' }}>HTTPS</h3>
                    <p>HTTP Secure</p>
                    <div style={{ fontSize: '3rem', margin: '1rem 0' }}>🔒</div>
                    <p>Port 443</p>
                    <p style={{ color: '#00f2ff' }}>Xifrat (SSL/TLS)</p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default WebSlide;
