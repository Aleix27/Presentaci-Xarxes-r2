import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const WiresharkFilterSlide = () => {
    return (
        <Slide title="Wireshark: Filtratge">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p>El camp de filtratge és essencial per trobar el que busquem.</p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ background: '#fff', padding: '0.5rem', borderRadius: '4px', color: '#000', display: 'flex', alignItems: 'center' }}
                >
                    <span style={{ marginRight: '1rem', fontWeight: 'bold', color: '#666' }}>Apply a display filter...</span>
                    <span style={{ fontFamily: 'monospace', color: '#008000', background: '#e0ffe0', padding: '2px 5px' }}>icmp</span>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#00f2ff' }}>Exemples</h3>
                        <ul style={{ fontFamily: 'monospace', paddingLeft: '1.5rem' }}>
                            <li>icmp</li>
                            <li>ip.addr == 8.8.8.8</li>
                            <li>tcp.port == 80</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#7000ff' }}>Guardar</h3>
                        <p>Podeu guardar les captures en format <code>.pcap</code> per analitzar-les després.</p>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
};

export default WiresharkFilterSlide;
