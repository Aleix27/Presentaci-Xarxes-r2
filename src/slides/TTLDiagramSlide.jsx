import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const TTLDiagramSlide = () => {
    return (
        <Slide title="Explicació Gràfica TTL">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%',
                padding: '0 1rem',
                perspective: '1000px'
            }}>

                {/* Source */}
                <div style={{ textAlign: 'center', zIndex: 10 }}>
                    <div style={{ fontSize: '3rem' }}>💻</div>
                    <p>Origen</p>
                </div>

                {/* Packet Path */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative' }}>

                    {/* Moving Packet */}
                    <motion.div
                        animate={{
                            x: ['0%', '33%', '33%', '66%', '66%', '100%'],
                            opacity: [1, 1, 1, 1, 1, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear", times: [0, 0.3, 0.4, 0.7, 0.8, 1] }}
                        style={{
                            position: 'absolute',
                            left: '5%',
                            top: '-50px',
                            zIndex: 20,
                            width: '90%' // Container width reference
                        }}
                    >
                        <div style={{
                            width: 'fit-content',
                            background: '#00f2ff',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            boxShadow: '0 0 15px #00f2ff',
                            color: '#000'
                        }}>
                            TTL
                        </div>
                    </motion.div>

                    {/* Routers as 3D Cards */}
                    {[1, 2].map((id, index) => (
                        <div key={id} style={{ position: 'relative' }}>
                            <motion.div
                                initial={{ rotateY: 45, opacity: 0 }}
                                animate={{ rotateY: 0, opacity: 1 }}
                                transition={{ delay: 0.5 * index }}
                                style={{
                                    width: '100px',
                                    height: '120px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transformStyle: 'preserve-3d',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                                }}
                            >
                                <div style={{ fontSize: '2.5rem' }}>🔄</div>
                                <div style={{ fontSize: '0.8rem', marginTop: '10px' }}>Rúter {id}</div>
                            </motion.div>

                            {/* Decrement Animation */}
                            <motion.div
                                animate={{
                                    y: [0, -20, -20],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1.5, 1]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                    delay: index === 0 ? 1.8 : 4.2 // Sync with packet stop
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '-30px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    color: '#ff6b6b',
                                    fontWeight: 'bold',
                                    fontSize: '1.5rem',
                                    textShadow: '0 0 10px #ff6b6b'
                                }}
                            >
                                -1
                            </motion.div>
                        </div>
                    ))}

                </div>

                {/* Destination */}
                <div style={{ textAlign: 'center', zIndex: 10 }}>
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
