import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const ServicesSlide = () => {
    return (
        <Slide title="1. Serveis d'Internet">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: '3rem', lineHeight: '1.6' }}
                >
                    Els serveis fonamentals d'Internet són:
                </motion.p>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    {['DNS', 'Web', 'Correu'].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + (index * 0.2), type: 'spring' }}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid #00f2ff',
                                padding: '2rem',
                                borderRadius: '16px',
                                width: '150px'
                            }}
                        >
                            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{service}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
};

export default ServicesSlide;
