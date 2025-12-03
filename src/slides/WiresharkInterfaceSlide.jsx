import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const WiresharkInterfaceSlide = () => {
    return (
        <Slide title="Wireshark: Interfície">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p>Abans de començar, cal triar la interfície (ex: <code>enp0s3</code> o <code>any</code>).</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🦈</div>
                        <div className="glass-panel" style={{ padding: '1rem' }}>
                            Botó <strong>Iniciar</strong> (Aleta de tauró blau)
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🟥</div>
                        <div className="glass-panel" style={{ padding: '1rem' }}>
                            Botó <strong>Aturar</strong> (Quadrat vermell)
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    style={{ fontSize: '0.9rem', color: '#94a3b8', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
                >
                    Nota: Veureu molts paquets <strong>ARP</strong> (trànsit broadcast) que no tenen a veure amb la vostra transmissió directa.
                </motion.div>
            </div>
        </Slide>
    );
};

export default WiresharkInterfaceSlide;
