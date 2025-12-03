import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const TTLDiagramSlide = () => {
    return (
        <Slide title="Explicació Gràfica TTL">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 1rem' }}>

                {/* Source */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem' }}>💻</div>
                    <p>Origen</p>
                    <motion.div
                        animate={{ x: [0, 100], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ background: '#00f2ff', padding: '5px', borderRadius: '4px', marginTop: '10px' }}
                    >
                        TTL=128
                    </motion.div>
                </div>

                {/* Router 1 */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem' }}>🔄</div>
                    <p>Rúter 1</p>
                    <motion.div
                        animate={{ x: [0, 100], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        style={{ background: '#7000ff', padding: '5px', borderRadius: '4px', marginTop: '10px' }}
                    >
                        TTL=127
                    </motion.div>
                </div>

                {/* Router 2 */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem' }}>🔄</div>
                    <p>Rúter 2</p>
                    <motion.div
                        animate={{ x: [0, 100], opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.0 }}
                        style={{ background: '#ff6b6b', padding: '5px', borderRadius: '4px', marginTop: '10px' }}
                    >
                        TTL=126
                    </motion.div>
                </div>

                {/* Destination */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem' }}>🌐</div>
                    <p>Destí</p>
                </div>

            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem', color: '#94a3b8' }}>
                Cada salt (hop) decrementa el TTL en 1.
            </div>
        </Slide>
    );
};

export default TTLDiagramSlide;
