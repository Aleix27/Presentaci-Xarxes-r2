import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const ThankYouSlide = () => {
    return (
        <Slide>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                textAlign: 'center'
            }}>
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="gradient-text"
                    style={{ fontSize: '5rem', marginBottom: '2rem' }}
                >
                    Gràcies!
                </motion.h1>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ fontSize: '1.5rem', color: '#94a3b8' }}
                >
                    Alguna pregunta?
                </motion.div>
            </div>
        </Slide>
    );
};

export default ThankYouSlide;
