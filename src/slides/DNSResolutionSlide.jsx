import React, { useState, useEffect } from 'react';
import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';

const Server = ({ label, ip, x, y, active }) => (
    <motion.div
        animate={{
            scale: active ? 1.1 : 1,
            borderColor: active ? '#6366f1' : 'rgba(255,255,255,0.1)',
            boxShadow: active ? '0 0 30px rgba(99, 102, 241, 0.3)' : 'none',
            background: active ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255,255,255,0.05)'
        }}
        className="glass-panel"
        style={{
            position: 'absolute',
            left: x,
            top: y,
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            width: '140px',
            zIndex: 2,
        }}
    >
        <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🖥️</div>
        <div style={{ fontWeight: 'bold', fontSize: '1rem', color: '#fff' }}>{label}</div>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{ip}</div>
    </motion.div>
);

const Packet = ({ from, to, label }) => (
    <motion.div
        initial={{ left: from.x, top: from.y, opacity: 1, scale: 0 }}
        animate={{ left: to.x, top: to.y, opacity: 0, scale: 1.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            background: '#6366f1',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            zIndex: 3,
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
        }}
    >
        {label}
    </motion.div>
);

const DNSResolutionSlide = () => {
    const [step, setStep] = useState(0);

    const servers = {
        client: { x: '10%', y: '50%', label: 'Client', ip: 'User' },
        resolver: { x: '35%', y: '50%', label: 'Resolutor', ip: '8.8.8.8' },
        root: { x: '70%', y: '20%', label: 'Root (.)', ip: '198.41.0.4' },
        tld: { x: '70%', y: '50%', label: 'TLD (.cat)', ip: '195.253.64.4' },
        auth: { x: '70%', y: '80%', label: 'Auth (urv)', ip: '193.144.16.62' },
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((s) => (s + 1) % 9);
        }, 2000); // Auto-advance every 2 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <Slide title="2.1 Resolució de Noms">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Server {...servers.client} active={step === 0 || step === 8} />
                <Server {...servers.resolver} active={step >= 1 && step <= 7} />
                <Server {...servers.root} active={step === 2} />
                <Server {...servers.tld} active={step === 4} />
                <Server {...servers.auth} active={step === 6} />

                <AnimatePresence mode='wait'>
                    {step === 0 && <Packet key="0" from={servers.client} to={servers.resolver} label="On és urv.cat?" />}
                    {step === 1 && <Packet key="1" from={servers.resolver} to={servers.root} label="Qui té .cat?" />}
                    {step === 2 && <Packet key="2" from={servers.root} to={servers.resolver} label="Ves a 195.253.64.4" />}
                    {step === 3 && <Packet key="3" from={servers.resolver} to={servers.tld} label="Qui té urv.cat?" />}
                    {step === 4 && <Packet key="4" from={servers.tld} to={servers.resolver} label="Ves a 193.144.16.62" />}
                    {step === 5 && <Packet key="5" from={servers.resolver} to={servers.auth} label="IP de urv.cat?" />}
                    {step === 6 && <Packet key="6" from={servers.auth} to={servers.resolver} label="193.144.16.62" />}
                    {step === 7 && <Packet key="7" from={servers.resolver} to={servers.client} label="193.144.16.62" />}
                </AnimatePresence>

                <div style={{
                    position: 'absolute',
                    bottom: '30px',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '1.2rem',
                    color: '#94a3b8'
                }}>
                    {step === 8 ?
                        <span style={{ color: '#14b8a6' }}>Resolta! ✅ Reiniciant...</span> :
                        "Processant petició..."
                    }
                </div>
            </div>
        </Slide>
    );
};

export default DNSResolutionSlide;
