import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const Card = ({ title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay, duration: 0.8 }}
        style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(112, 0, 255, 0.3)',
            padding: '2rem',
            borderRadius: '20px',
            width: '280px',
            margin: '15px',
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #00f2ff, #7000ff)'
        }} />
        <h3 style={{ color: '#fff', marginTop: '1rem', fontSize: '1.5rem' }}>{title}</h3>
        <p style={{ fontSize: '1rem', opacity: 0.7, lineHeight: '1.6' }}>{description}</p>
    </motion.div>
);

const SolutionSlide = () => {
    return (
        <Slide title="Solució Proposada">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Card
                    title="Segmentació VLAN"
                    description="Implementació de VLANs per separar el trànsit de gestió, usuaris i servidors."
                    delay={0.2}
                />
                <Card
                    title="Redundància"
                    description="Enllaços de backup i protocols com STP per evitar punts únics de fallada."
                    delay={0.4}
                />
                <Card
                    title="Monitorització"
                    description="Anàlisi en temps real amb SNMP i alertes proactives."
                    delay={0.6}
                />
                <Card
                    title="Qualitat de Servei"
                    description="Polítiques QoS per prioritzar veu i dades crítiques."
                    delay={0.8}
                />
            </div>
        </Slide>
    );
};

export default SolutionSlide;
