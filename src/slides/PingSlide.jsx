import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const PingSlide = () => {
    return (
        <Slide title="L'eina Ping">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%', padding: '0 1rem' }}>
                <p>Verifica si podem accedir a un host d'Internet enviant un <strong>paquet sonda</strong>.</p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.9rem' }}
                >
                    <span style={{ color: '#2ecc71' }}>~$</span> ping 8.8.8.8
                    <br /><br />
                    <span style={{ color: '#aaa' }}>PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.</span><br />
                    <span style={{ color: '#fff' }}>64 bytes from 8.8.8.8: icmp_seq=1 ttl=115 time=14.2 ms</span><br />
                    <span style={{ color: '#fff' }}>64 bytes from 8.8.8.8: icmp_seq=2 ttl=115 time=13.8 ms</span>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel"
                        style={{ padding: '1rem' }}
                    >
                        <strong style={{ color: '#00f2ff' }}>icmp_seq</strong>: Seqüència de la sonda.
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="glass-panel"
                        style={{ padding: '1rem' }}
                    >
                        <strong style={{ color: '#7000ff' }}>ttl</strong>: Time To Live (temps de vida).
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="glass-panel"
                        style={{ padding: '1rem' }}
                    >
                        <strong style={{ color: '#ff6b6b' }}>time</strong>: Round-trip time (anada i tornada).
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="glass-panel"
                        style={{ padding: '1rem' }}
                    >
                        <strong style={{ color: '#2ecc71' }}>Ctrl + C</strong>: Aturar l'execució.
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
};

export default PingSlide;
