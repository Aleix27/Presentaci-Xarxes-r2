import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const DNSEfficiencySlide = () => {
    return (
        <Slide title="2.2 Eficiència DNS">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', height: '100%', alignContent: 'center' }}>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel"
                    style={{ padding: '2rem' }}
                >
                    <h3 style={{ color: '#00f2ff', fontSize: '2rem', marginBottom: '1rem' }}>Memòria Cau (Cache)</h3>
                    <p>Els resolutors guarden les respostes durant un temps (TTL).</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                        <li>Evita consultes repetitives.</li>
                        <li>Redueix el trànsit a la xarxa.</li>
                        <li>Millora la velocitat de navegació.</li>
                    </ul>
                    <div style={{ fontSize: '3rem', marginTop: '1rem' }}>⚡</div>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel"
                    style={{ padding: '2rem' }}
                >
                    <h3 style={{ color: '#7000ff', fontSize: '2rem', marginBottom: '1rem' }}>Proxy DNS / Resolutor Local</h3>
                    <p>Intermediari a la xarxa local (LAN/SOHO).</p>
                    <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
                        <li>El router sovint fa de proxy.</li>
                        <li>Centralitza les peticions de la xarxa.</li>
                        <li>Optimitza les respostes per a múltiples usuaris.</li>
                    </ul>
                    <div style={{ fontSize: '3rem', marginTop: '1rem' }}>🏠</div>
                </motion.div>

            </div>
        </Slide>
    );
};

export default DNSEfficiencySlide;
