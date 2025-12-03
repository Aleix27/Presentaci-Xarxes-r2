import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const HTTPSecuritySlide = () => {
    return (
        <Slide title="3.10 Seguretat (HTTPS)">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', height: '100%', alignContent: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#00f2ff' }}>HTTP/2</h3>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '2' }}>
                        <li>🔢 <strong>Binari</strong>: Més eficient que text.</li>
                        <li>🔀 <strong>Multiplexació</strong>: Múltiples peticions en 1 connexió.</li>
                        <li>📦 <strong>Capçaleres comprimides</strong>.</li>
                        <li>🔮 <strong>Server Push</strong>: Anticipació de recursos.</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#7000ff' }}>HTTPS (Seguretat)</h3>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔒 TLS</div>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '2' }}>
                        <li>🔑 <strong>Xifrat</strong>: Confidencialitat.</li>
                        <li>✅ <strong>Autenticació</strong>: Certificat del servidor.</li>
                        <li>🛡️ <strong>Integritat</strong>: Dades no modificades.</li>
                    </ul>
                </motion.div>

            </div>
        </Slide>
    );
};

export default HTTPSecuritySlide;
