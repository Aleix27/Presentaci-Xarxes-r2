import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const RequestDot = ({ delay, color }) => (
    <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay, duration: 1, repeat: Infinity, repeatDelay: 2 }}
        style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            background: color,
            margin: '5px'
        }}
    />
);

const ConcurrencySlide = () => {
    return (
        <Slide title="3.3 Concurrència">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '4rem' }}>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ color: '#fff' }}>Client 1</span>
                        <RequestDot delay={0} color="#3b82f6" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ color: '#fff' }}>Client 2</span>
                        <RequestDot delay={0.5} color="#10b981" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ color: '#fff' }}>Client 3</span>
                        <RequestDot delay={1.0} color="#f43f5e" />
                    </div>
                </div>

                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="glass-panel"
                    style={{
                        padding: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: '2px solid #3b82f6'
                    }}
                >
                    <div style={{ fontSize: '4rem' }}>⚙️</div>
                    <h3>Servidor Web</h3>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Processos Concurrents</p>
                </motion.div>

                <div style={{ width: '300px' }}>
                    <h3 style={{ color: '#3b82f6' }}>Múltiples Peticions</h3>
                    <p>El servidor atén vàries connexions TCP a la vegada.</p>
                    <p>Si supera el límit → Error.</p>
                </div>

            </div>
        </Slide>
    );
};

export default ConcurrencySlide;
