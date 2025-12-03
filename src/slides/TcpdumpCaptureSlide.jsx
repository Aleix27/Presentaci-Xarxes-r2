import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import TypingTerminal from '../components/TypingTerminal';

const TcpdumpCaptureSlide = () => {
    return (
        <Slide title="Captura d'un Ping">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p>Exemple: Capturar paquets ICMP mentre fem un ping.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace' }}
                    >
                        <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Terminal 1 (Captura):</div>
                        <span style={{ color: '#2ecc71' }}>~$</span> sudo tcpdump icmp
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace' }}
                    >
                        <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Terminal 2 (Generació de tràfic):</div>
                        <span style={{ color: '#2ecc71' }}>~$</span> ping 8.8.8.8
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="glass-panel"
                    style={{ padding: '1.5rem', marginTop: '1rem' }}
                >
                    <p>Veureu els paquets <strong>Echo Request</strong> i <strong>Echo Reply</strong> en temps real.</p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default TcpdumpCaptureSlide;
