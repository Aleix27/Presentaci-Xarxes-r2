import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, desc, delay, color }) => (
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="glass-panel"
        style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            borderTop: `4px solid ${color}`
        }}
    >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ color: color, marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>{desc}</p>
    </motion.div>
);

const HTTPBasicsSlide = () => {
    return (
        <Slide title="3.2 Protocol HTTP">
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '2rem',
                height: '100%',
                padding: '2rem'
            }}>

                <FeatureCard
                    icon="📤"
                    title="GET"
                    desc="Sol·licitar recursos (Webs, Imatges)"
                    delay={0.2}
                    color="#6366f1"
                />

                <FeatureCard
                    icon="📝"
                    title="POST"
                    desc="Enviar dades (Formularis, Login)"
                    delay={0.4}
                    color="#14b8a6"
                />

                <FeatureCard
                    icon="🤝"
                    title="TCP"
                    desc="Connexió fiable i ordenada"
                    delay={0.6}
                    color="#f43f5e"
                />

                <FeatureCard
                    icon="♾️"
                    title="Persistent"
                    desc="HTTP/1.1 manté la connexió oberta"
                    delay={0.8}
                    color="#eab308"
                />

            </div>
        </Slide>
    );
};

export default HTTPBasicsSlide;
