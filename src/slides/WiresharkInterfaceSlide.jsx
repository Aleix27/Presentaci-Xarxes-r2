import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import wiresharkImg from '../assets/wireshark_gui_mockup.png';

const WiresharkInterfaceSlide = () => {
    return (
        <Slide title="Interfície de Wireshark">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', padding: '0 2rem', alignItems: 'center' }}>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#cbd5e1' }}>
                    Visualització detallada de paquets en temps real.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        width: '90%',
                        maxWidth: '800px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 0 30px rgba(0, 242, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                >
                    <img
                        src={wiresharkImg}
                        alt="Wireshark Interface"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </motion.div>

                <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                    <div className="glass-panel" style={{ padding: '1rem', fontSize: '0.9rem' }}>
                        <span style={{ color: '#00f2ff' }}>●</span> Llista de Paquets
                    </div>
                    <div className="glass-panel" style={{ padding: '1rem', fontSize: '0.9rem' }}>
                        <span style={{ color: '#7000ff' }}>●</span> Detalls del Protocol
                    </div>
                    <div className="glass-panel" style={{ padding: '1rem', fontSize: '0.9rem' }}>
                        <span style={{ color: '#ff6b6b' }}>●</span> Bytes (Hex)
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default WiresharkInterfaceSlide;
