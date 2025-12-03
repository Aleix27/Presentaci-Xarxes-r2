import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import TypingTerminal from '../components/TypingTerminal';

const PingSlide = () => {
    return (
        <Slide title="L'eina Ping">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 1rem' }}>

                {/* Visual Animation */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 2rem',
                    height: '120px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '16px'
                }}>
                    <div style={{ textAlign: 'center', zIndex: 2 }}>
                        <div style={{ fontSize: '3rem' }}>💻</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Localhost</div>
                    </div>

                    <div style={{ flex: 1, position: 'relative', height: '4px', background: '#333', margin: '0 2rem', borderRadius: '2px' }}>
                        {/* Packet */}
                        <motion.div
                            animate={{
                                x: ['0%', '100%', '0%'],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                width: '16px',
                                height: '16px',
                                background: '#00f2ff',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '-6px',
                                boxShadow: '0 0 15px #00f2ff',
                                zIndex: 3
                            }}
                        />

                        {/* Ripple Effect at Destination */}
                        <motion.div
                            animate={{ opacity: [0, 1, 0], scale: [1, 2] }}
                            transition={{ duration: 2.5, repeat: Infinity, times: [0.45, 0.5, 0.55] }}
                            style={{
                                position: 'absolute',
                                right: '-10px',
                                top: '-15px',
                                width: '30px',
                                height: '30px',
                                border: '2px solid #00f2ff',
                                borderRadius: '50%',
                                opacity: 0
                            }}
                        />
                    </div>

                    <div style={{ textAlign: 'center', zIndex: 2 }}>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, times: [0.4, 0.5, 0.6] }}
                            style={{ fontSize: '3rem' }}
                        >
                            🌐
                        </motion.div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>8.8.8.8</div>
                    </div>
                </div>

                <TypingTerminal
                    command="ping 8.8.8.8"
                    output={`PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=115 time=14.2 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=115 time=13.8 ms`}
                    delay={0.5}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="glass-panel"
                        style={{ padding: '0.8rem' }}
                    >
                        <strong style={{ color: '#00f2ff' }}>icmp_seq</strong>: Ordre.
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.7 }}
                        className="glass-panel"
                        style={{ padding: '0.8rem' }}
                    >
                        <strong style={{ color: '#7000ff' }}>ttl</strong>: Temps de vida.
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.9 }}
                        className="glass-panel"
                        style={{ padding: '0.8rem' }}
                    >
                        <strong style={{ color: '#ff6b6b' }}>time</strong>: Latència (RTT).
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
};

export default PingSlide;
