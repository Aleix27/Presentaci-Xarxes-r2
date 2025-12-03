import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const EmailProtocolsSlide = () => {
    return (
        <Slide title="4.1 Protocols">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', height: '100%', alignContent: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel"
                    style={{ padding: '2rem' }}
                >
                    <h3 style={{ color: '#ff6b6b', fontSize: '2rem' }}>POP3</h3>
                    <p>Post Office Protocol</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', lineHeight: '1.8' }}>
                        <li>📥 Descarrega els missatges al dispositiu.</li>
                        <li>🗑️ Sol esborrar-los del servidor.</li>
                        <li>❌ No sincronitza entre dispositius.</li>
                        <li>⚠️ En desús.</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel"
                    style={{ padding: '2rem', border: '1px solid #00f2ff' }}
                >
                    <h3 style={{ color: '#00f2ff', fontSize: '2rem' }}>IMAP</h3>
                    <p>Internet Message Access Protocol</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem', lineHeight: '1.8' }}>
                        <li>🔄 Sincronitza amb el servidor.</li>
                        <li>📂 Permet carpetes i organització.</li>
                        <li>📱 Accessible des de múltiples dispositius.</li>
                        <li>✅ Estàndard actual.</li>
                    </ul>
                </motion.div>

            </div>
        </Slide>
    );
};

export default EmailProtocolsSlide;
