import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const TTLSlide = () => {
    return (
        <Slide title="El Time To Live (TTL)">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p style={{ fontSize: '1.2rem' }}>
                    Valor que indica quants <strong>salts (hops)</strong> pot fer un paquet abans de ser descartat.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#00f2ff' }}>Objectiu</h3>
                        <p>Evitar bucles infinits a la xarxa.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#7000ff' }}>Funcionament</h3>
                        <p>Cada rúter resta <strong>-1</strong> al TTL.</p>
                        <p>Si TTL = 0 ➡️ Descartat (ICMP Time Exceeded).</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace' }}
                >
                    <p style={{ margin: 0 }}>
                        <span style={{ color: '#2ecc71' }}>~$</span> ping -t 2 8.8.8.8
                    </p>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        Prova d'enviar amb TTL inicial de 2. Què passa?
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default TTLSlide;
