import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const Protocol = ({ name, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
    >
        <h3 style={{ margin: 0, color: '#00f2ff', width: '100px' }}>{name}</h3>
        <p style={{ margin: 0, flex: 1, textAlign: 'left', paddingLeft: '1rem' }}>{desc}</p>
    </motion.div>
);

const EmailSlide = () => {
    return (
        <Slide title="5. Correu Electrònic">
            <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                <Protocol
                    name="SMTP"
                    desc="Simple Mail Transfer Protocol. Utilitzat per ENVIAR correus entre servidors."
                    delay={0.2}
                />
                <Protocol
                    name="POP3"
                    desc="Post Office Protocol. DESCARREGA els missatges al client local."
                    delay={0.4}
                />
                <Protocol
                    name="IMAP"
                    desc="Internet Message Access Protocol. SINCRONITZA els missatges amb el servidor."
                    delay={0.6}
                />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                >
                    <span style={{ fontSize: '4rem' }}>📧 ➡️ ☁️ ➡️ 📩</span>
                </motion.div>
            </div>
        </Slide>
    );
};

export default EmailSlide;
