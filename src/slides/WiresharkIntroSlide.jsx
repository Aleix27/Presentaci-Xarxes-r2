import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const WiresharkIntroSlide = () => {
    return (
        <Slide title="Wireshark">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p style={{ fontSize: '1.2rem' }}>
                    Similar a tcpdump però amb <strong>Interfície Gràfica (GUI)</strong>.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#00f2ff' }}>Funcionalitats</h3>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                            <li>Veure paquets per capes.</li>
                            <li>Seguir converses (TCP stream).</li>
                            <li>Filtres visuals intuïtius.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#7000ff' }}>Instal·lació</h3>
                        <div style={{ background: '#1e1e1e', padding: '0.5rem', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            sudo apt install wireshark
                        </div>
                        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#94a3b8' }}>
                            Executar amb <code>sudo wireshark</code> per capturar.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
};

export default WiresharkIntroSlide;
