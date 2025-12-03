import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const RequirementsSlide = () => {
    const requirements = [
        "Exemple de crida a traceroute i resultat.",
        "Taula de RTT (ping) amb: Lab, 8.8.8.8, i un servidor propi.",
        "Captura tcpdump d'un ping a example.com.",
        "Captura Wireshark (filtrada) d'un ping a example.com."
    ];

    return (
        <Slide title="Què cal per obtenir el punt?">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 2rem' }}>
                {requirements.map((req, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        style={{
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)'
                        }}
                    >
                        <span style={{ color: '#2ecc71', marginRight: '1rem', fontSize: '1.5rem' }}>✓</span>
                        {req}
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{ marginTop: '2rem', textAlign: 'center', color: '#f1c40f', fontStyle: 'italic' }}
                >
                    Tingueu-ho preparat abans de cridar al professor!
                </motion.div>
            </div>
        </Slide>
    );
};

export default RequirementsSlide;
