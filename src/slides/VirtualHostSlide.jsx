import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const DomainCard = ({ domain, folder, delay, color }) => (
    <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay }}
        className="glass-panel"
        style={{
            padding: '1rem',
            marginBottom: '1rem',
            borderLeft: `4px solid ${color}`,
            width: '100%'
        }}
    >
        <div style={{ fontWeight: 'bold', color: '#fff' }}>{domain}</div>
        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>📂 {folder}</div>
    </motion.div>
);

const VirtualHostSlide = () => {
    return (
        <Slide title="3.5 Virtual Host">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '4rem' }}>

                <div style={{ width: '300px' }}>
                    <h3 style={{ color: '#3b82f6', marginBottom: '1rem' }}>1 IP, Múltiples Webs</h3>
                    <p>El servidor sap quina web servir gràcies a la capçalera <code>Host:</code>.</p>
                </div>

                <motion.div
                    className="glass-panel"
                    style={{
                        padding: '2rem',
                        width: '350px',
                        background: 'rgba(15, 23, 42, 0.9)',
                        border: '1px solid #334155'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ fontSize: '3rem' }}>🖥️</div>
                        <div style={{ fontWeight: 'bold' }}>Servidor Web (Apache/Nginx)</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>IP: 192.168.1.10</div>
                    </div>

                    <DomainCard domain="exemple.com" folder="/var/www/exemple" delay={0.2} color="#3b82f6" />
                    <DomainCard domain="lamevaweb.com" folder="/var/www/lameva" delay={0.4} color="#10b981" />
                    <DomainCard domain="superapp.cat" folder="/var/www/superapp" delay={0.6} color="#f43f5e" />
                </motion.div>

            </div>
        </Slide>
    );
};

export default VirtualHostSlide;
