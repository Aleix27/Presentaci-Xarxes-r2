import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const Lane = ({ label, items, color, delay }) => (
    <div style={{ marginBottom: '2rem' }}>
        <div style={{ color: color, fontWeight: 'bold', marginBottom: '0.5rem' }}>{label}</div>
        <div style={{
            height: '60px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 1rem',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 600, opacity: 1 }}
                    transition={{
                        duration: 4,
                        delay: delay + (i * (label.includes('1.1') ? 1.5 : 0.5)), // Sequential vs Parallel feel
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        background: color,
                        padding: '5px 15px',
                        borderRadius: '15px',
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '0.8rem'
                    }}
                >
                    {item}
                </motion.div>
            ))}
        </div>
    </div>
);

const HTTP2Slide = () => {
    return (
        <Slide title="3.9 HTTP/2">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 4rem' }}>

                <Lane
                    label="HTTP/1.1 (Seqüencial)"
                    items={['HTML', 'CSS', 'JS', 'Img']}
                    color="#f43f5e"
                    delay={0}
                />

                <Lane
                    label="HTTP/2 (Multiplexació)"
                    items={['HTML', 'CSS', 'JS', 'Img']}
                    color="#10b981"
                    delay={0}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                    <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <h4 style={{ color: '#3b82f6' }}>Eficiència</h4>
                        <ul style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                            <li>Codificació Binària</li>
                            <li>Compressió de Capçaleres</li>
                        </ul>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <h4 style={{ color: '#10b981' }}>Velocitat</h4>
                        <ul style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                            <li>Server Push</li>
                            <li>1 Connexió TCP</li>
                        </ul>
                    </div>
                </div>

            </div>
        </Slide>
    );
};

export default HTTP2Slide;
