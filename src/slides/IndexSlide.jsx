import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const IndexSlide = () => {
    const topics = [
        "1. Serveis d'Internet",
        "2. Sistema de Noms de Domini (DNS)",
        "3. La World Wide Web (WWW)",
        "4. Correu Electrònic",
        "5. Conclusions"
    ];

    return (
        <Slide title="Índex Complet">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingLeft: '4rem' }}>
                {topics.map((topic, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index, duration: 0.5 }}
                        style={{
                            fontSize: '2rem',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                        whileHover={{ x: 20, color: '#00f2ff' }}
                    >
                        <span style={{ color: '#7000ff', marginRight: '1rem' }}>➤</span>
                        {topic}
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
};

export default IndexSlide;
