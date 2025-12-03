import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import TypingTerminal from '../components/TypingTerminal';

const PingSlide = () => {
    return (
        <Slide title="L'eina Ping">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 1rem' }}>

                {/* Visual Animation */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: '100px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem' }}>💻</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Localhost</div>
                    </div>

                    <div style={{ flex: 1, position: 'relative', height: '2px', background: '#333', margin: '0 1rem' }}>
                        {/* Packet */}
                        <motion.div
                            animate={{
                                x: ['0%', '100%', '0%'],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                width: '12px',
                                height: '12px',
                                background: '#00f2ff',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '-5px',
                                boxShadow: '0 0 10px #00f2ff'
                            }}
                        />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, times: [0, 0.5, 1] }}
                            style={{ fontSize: '2.5rem' }}
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
