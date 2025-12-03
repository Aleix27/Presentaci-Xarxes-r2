import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const PacketInfoSlide = () => {
    return (
        <Slide title="Informació del Paquet">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#00f2ff' }}>Llistat de Paquets</h3>
                        <ul style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                            <li><strong>No.</strong>: Número seqüencial.</li>
                            <li><strong>Time</strong>: Segons des de l'inici.</li>
                            <li><strong>Source/Dest</strong>: IPs origen i destí.</li>
                            <li><strong>Protocol</strong>: Capa més alta (ex: ICMP).</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#7000ff' }}>Detalls</h3>
                        <p>Fent clic a un paquet, veiem el desglossament per capes:</p>
                        <ul style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                            <li>Frame (Física)</li>
                            <li>Ethernet (Enllaç)</li>
                            <li>IP (Xarxa)</li>
                            <li>ICMP (Protocol)</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
};

export default PacketInfoSlide;
