import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import TypingTerminal from '../components/TypingTerminal';

const TcpdumpSlide = () => {
    return (
        <Slide title="Tcpdump">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p style={{ fontSize: '1.2rem' }}>
                    Eina de línia de comandes per <strong>capturar i analitzar</strong> paquets en temps real.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem', borderLeft: '4px solid #2ecc71' }}
                    >
                        <h3 style={{ color: '#2ecc71' }}>Usos</h3>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                            <li>Detectar problemes de xarxa.</li>
                            <li>Analitzar tràfic a baix nivell.</li>
                            <li>Sense entorn gràfic (servidors).</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem', borderLeft: '4px solid #f1c40f' }}
                    >
                        <h3 style={{ color: '#f1c40f' }}>Característiques</h3>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                            <li>Filtratge potent (protocol, port, IP).</li>
                            <li>Guardar en <code>.pcap</code> per Wireshark.</li>
                        </ul>
                    </motion.div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <TypingTerminal
                        command="sudo apt install tcpdump"
                        output="Reading package lists... Done\nBuilding dependency tree... Done\ntcpdump is already the newest version."
                        delay={0.5}
                    />
                </div>
            </div>
        </Slide>
    );
};

export default TcpdumpSlide;
