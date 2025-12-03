import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const TracerouteSlide = () => {
    return (
        <Slide title="Traceroute">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p style={{ fontSize: '1.2rem' }}>
                    Mostra la <strong>ruta</strong> que segueixen els paquets fins al destí.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#00f2ff' }}>Com funciona?</h3>
                        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                            <li>Envia paquets amb TTL=1, TTL=2, TTL=3...</li>
                            <li>Els rúters retornen "Time Exceeded".</li>
                            <li>Així identifiquem cada salt.</li>
                        </ol>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#7000ff' }}>Resultat</h3>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                            <li>Llista de rúters (hops).</li>
                            <li>Temps de resposta (RTT).</li>
                            <li><strong>*</strong> = Sense resposta.</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace' }}
                >
                    <span style={{ color: '#2ecc71' }}>~$</span> traceroute 8.8.8.8
                </motion.div>
            </div>
        </Slide>
    );
};

export default TracerouteSlide;
