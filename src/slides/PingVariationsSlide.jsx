import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const PingVariationsSlide = () => {
    const variations = [
        { cmd: "ping -c 4 8.8.8.8", desc: "Envia només 4 sondes (no cal Ctrl+C)." },
        { cmd: "ping -c 4 -i 5 8.8.8.8", desc: "Espera 5 segons entre cada sonda." },
        { cmd: "ping -c 4 -q 8.8.8.8", desc: "Quiet: Només mostra el resum final." }
    ];

    return (
        <Slide title="Variacions del Ping">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 2rem' }}>
                {variations.map((v, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        style={{ marginBottom: '2rem' }}
                    >
                        <div style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', borderLeft: '4px solid #00f2ff', marginBottom: '0.5rem' }}>
                            <span style={{ color: '#2ecc71' }}>~$</span> {v.cmd}
                        </div>
                        <p style={{ marginLeft: '1rem', color: '#94a3b8' }}>{v.desc}</p>
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
};

export default PingVariationsSlide;
