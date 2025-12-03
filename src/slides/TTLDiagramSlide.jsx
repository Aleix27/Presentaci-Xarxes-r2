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
                            x: ['0%', '300%'],
                            opacity: [1, 1, 1, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            left: '10%',
                            top: '-40px',
                            zIndex: 20
                        }}
                    >
                        <div style={{
                            background: '#00f2ff',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            boxShadow: '0 0 15px #00f2ff'
                        }}>
                            TTL
                        </div>
                    </motion.div>

                    {/* Routers as 3D Cards */}
                    {[1, 2].map((id, index) => (
                        <motion.div
                            key={id}
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
                            <motion.div
                                animate={{ color: ['#fff', '#ff6b6b', '#fff'] }}
                                transition={{ duration: 0.5, delay: 1.3 + (index * 1.3), repeat: Infinity, repeatDelay: 3.5 }}
                                style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '5px' }}
                            >
                                -1
                            </motion.div>
                        </motion.div>
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
