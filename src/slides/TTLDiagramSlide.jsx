import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const TTLDiagramSlide = () => {
    return (
        <Slide title="Funcionament del TTL">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '0 2rem' }}>

                {/* Network Diagram */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '900px',
                    position: 'relative',
                    height: '200px'
                }}>
                    {/* Source */}
                    <div style={{ textAlign: 'center', zIndex: 2 }}>
                        <div style={{ fontSize: '3rem' }}>💻</div>
                        <div style={{ color: '#94a3b8' }}>Origen</div>
                    </div>

                    {/* Router 1 */}
                    <div style={{ textAlign: 'center', zIndex: 2 }}>
                        <div style={{ fontSize: '3rem' }}>🔄</div>
                        <div style={{ color: '#94a3b8' }}>Router 1</div>
                    </div>

                    {/* Router 2 */}
                    <div style={{ textAlign: 'center', zIndex: 2 }}>
                        <div style={{ fontSize: '3rem' }}>🔄</div>
                        <div style={{ color: '#94a3b8' }}>Router 2</div>
                    </div>

                    {/* Destination */}
                    <div style={{ textAlign: 'center', zIndex: 2 }}>
                        <div style={{ fontSize: '3rem' }}>🌐</div>
                        <div style={{ color: '#94a3b8' }}>Destí</div>
                    </div>

                    {/* Connecting Line */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50px',
                        right: '50px',
                        height: '4px',
                        background: '#333',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }} />

                    {/* Animated Packet with TTL */}
                    <motion.div
                        animate={{
                            left: ['5%', '33%', '33%', '66%', '66%', '95%'], // Stop at each router
                            backgroundColor: ['#00f2ff', '#00f2ff', '#f1c40f', '#f1c40f', '#e74c3c', '#e74c3c'] // Change color as TTL drops
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            color: '#000',
                            fontSize: '0.8rem',
                            zIndex: 3,
                            marginTop: '-20px',
                            boxShadow: '0 0 20px currentColor'
                        }}
                    >
                        <motion.span
                            animate={{ opacity: [1, 1, 0, 1, 0, 1] }} // Blink text on change
                            transition={{ duration: 6, repeat: Infinity, times: [0, 0.39, 0.4, 0.79, 0.8, 1] }}
                        >
                            TTL
                        </motion.span>
                    </motion.div>

                    {/* Floating "-1" indicators */}
                    <motion.div
                        animate={{ opacity: [0, 1, 0], y: [0, -30, -40] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.2, repeatDelay: 4 }}
                        style={{ position: 'absolute', left: '33%', top: '30%', color: '#ff6b6b', fontWeight: 'bold', fontSize: '1.5rem' }}
                    >
                        -1
                    </motion.div>

                    <motion.div
                        animate={{ opacity: [0, 1, 0], y: [0, -30, -40] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 3.6, repeatDelay: 4 }}
                        style={{ position: 'absolute', left: '66%', top: '30%', color: '#ff6b6b', fontWeight: 'bold', fontSize: '1.5rem' }}
                    >
                        -1
                    </motion.div>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center', maxWidth: '800px' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                        Cada vegada que un paquet passa per un <strong>Router</strong>, el seu <strong style={{ color: '#f1c40f' }}>TTL</strong> es redueix en 1.
                    </p>
                    <p style={{ color: '#94a3b8', marginTop: '1rem' }}>
                        Si el TTL arriba a 0, el paquet es descarta i s'envia un error "Time Exceeded".
                    </p>
                </div>
            </div>
        </Slide>
    );
};

export default TTLDiagramSlide;
