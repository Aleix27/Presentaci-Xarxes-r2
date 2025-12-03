import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const ObjectivesSlide = () => {
    const objectives = [
        "Identificar l'adreça IP local.",
        "Comprendre el funcionament de la comanda ping.",
        "Visualitzar el traçat de ruta d'un paquet.",
        "Conèixer les eines tcpdump i Wireshark."
    ];

    return (
        <Slide title="Objectius">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingLeft: 'clamp(1rem, 5vw, 4rem)' }}>
                {objectives.map((obj, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        style={{
                            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                            marginBottom: '2rem',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <span style={{ color: '#00f2ff', marginRight: '1rem' }}>▪</span>
                        {obj}
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
};

export default ObjectivesSlide;
