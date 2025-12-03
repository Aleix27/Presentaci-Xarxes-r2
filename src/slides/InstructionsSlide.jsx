import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const InstructionsSlide = () => {
    return (
        <Slide title="Instruccions del Repte">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', height: '100%', padding: '0 2rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel"
                    style={{ padding: '2rem', borderLeft: '4px solid #00f2ff' }}
                >
                    <h3 style={{ color: '#00f2ff', marginBottom: '1rem' }}>Equip i Material</h3>
                    <p style={{ fontSize: '1.2rem' }}>Cada equip de 3 persones necessita 1 ordinador del laboratori.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel"
                    style={{ padding: '2rem', borderLeft: '4px solid #7000ff' }}
                >
                    <h3 style={{ color: '#7000ff', marginBottom: '1rem' }}>Valoració Positiva</h3>
                    <p style={{ fontSize: '1.2rem' }}>Feu totes les tasques en un mateix ordinador.</p>
                    <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Aviseu al professor quan ho tingueu tot.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{ textAlign: 'center', color: '#ff6b6b', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '2rem' }}
                >
                    ⚠️ Recordeu respondre el qüestionari del repte!
                </motion.div>
            </div>
        </Slide>
    );
};

export default InstructionsSlide;
