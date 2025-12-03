import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import TypingTerminal from '../components/TypingTerminal';

const TracerouteSlide = () => {
    return (
        <Slide title="Traceroute">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', padding: '0 1rem' }}>

                {/* Animated Graph */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', height: '120px' }}>
                    {[0, 1, 2, 3].map((i) => (
                        <React.Fragment key={i}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.5 }}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: i === 0 ? '#2ecc71' : i === 3 ? '#e74c3c' : '#3498db',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 0 15px rgba(255,255,255,0.2)',
                                    zIndex: 2
                                }}
                            >
                                {i === 0 ? '💻' : i === 3 ? '🌐' : 'R'}
                            </motion.div>
                            {i < 3 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '50px' }}
                                    transition={{ delay: (i * 0.5) + 0.2, duration: 0.3 }}
                                    style={{ height: '2px', background: '#555' }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <TypingTerminal
                    command="traceroute 8.8.8.8"
                    output={`1  192.168.1.1  2.1 ms\n2  10.0.0.1  4.5 ms\n3  142.250.x.x  12.3 ms\n4  8.8.8.8  14.2 ms`}
                    delay={1.5}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 }}
                        className="glass-panel"
                        style={{ padding: '1rem' }}
                    >
                        <h3 style={{ color: '#00f2ff' }}>TTL Incremental</h3>
                        <p style={{ fontSize: '0.9rem' }}>Envia paquets amb TTL=1, 2, 3...</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.7 }}
                        className="glass-panel"
                        style={{ padding: '1rem' }}
                    >
                        <h3 style={{ color: '#7000ff' }}>Time Exceeded</h3>
                        <p style={{ fontSize: '0.9rem' }}>Cada rúter retorna error i s'identifica.</p>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
};

export default TracerouteSlide;
