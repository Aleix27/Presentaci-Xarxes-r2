import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const ICMPSlide = () => {
    return (
        <Slide title="El Protocol ICMP">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p style={{ fontSize: '1.2rem' }}>
                    <strong>Internet Control Message Protocol</strong>: Missatges de control i diagnòstic (errors, disponibilitat).
                </p>
                <p style={{ fontSize: '1rem', color: '#94a3b8' }}>És capa de xarxa (no té ports).</p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel"
                    style={{ padding: '2rem', border: '1px solid #ff6b6b' }}
                >
                    <h3 style={{ color: '#ff6b6b', marginBottom: '1rem' }}>⚠️ Bloqueig ICMP</h3>
                    <p>Molts servidors bloquegen ICMP per seguretat.</p>
                    <div style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px', marginTop: '1rem', fontFamily: 'monospace' }}>
                        <span style={{ color: '#2ecc71' }}>~$</span> ping urv.cat
                        <br />
                        <span style={{ color: '#aaa', fontStyle: 'italic' }}>(Sense resposta...)</span>
                    </div>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        Pots accedir a la web (HTTP/TCP) però no fer ping (ICMP).
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default ICMPSlide;
