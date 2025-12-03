import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const RequirementsSlide = () => {
    return (
        <Slide title="Que hem fet per aconseguir el punt">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel"
                    style={{ padding: '2rem', background: 'rgba(2, 6, 23, 0.8)' }}
                >
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ color: '#2ecc71' }}>✔</span>
                            Instal·lació i ús de <strong>tcpdump</strong>.
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ color: '#2ecc71' }}>✔</span>
                            Captura de paquets <strong>ICMP</strong> (ping).
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ color: '#2ecc71' }}>✔</span>
                            Anàlisi gràfic amb <strong>Wireshark</strong>.
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ color: '#2ecc71' }}>✔</span>
                            Interpretació de capçaleres i dades.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Slide>
    );
};

export default RequirementsSlide;
