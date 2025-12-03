import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const CookiesSlide = () => {
    return (
        <Slide title="3.8 Galetes (Cookies)">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    style={{ fontSize: '6rem', marginBottom: '2rem' }}
                >
                    🍪
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: '2rem', marginBottom: '2rem' }}
                >
                    HTTP és "Stateless" (Sense memòria)
                </motion.h3>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="glass-panel"
                        style={{ padding: '2rem', width: '300px' }}
                    >
                        <h4 style={{ color: '#00f2ff' }}>Set-Cookie</h4>
                        <p>El servidor envia la galeta al navegador.</p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="glass-panel"
                        style={{ padding: '2rem', width: '300px' }}
                    >
                        <h4 style={{ color: '#7000ff' }}>Cookie: ...</h4>
                        <p>El navegador la retorna a cada petició.</p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{ marginTop: '3rem', opacity: 0.7 }}
                >
                    Usos: Autenticació, Carret de compra, Preferències.
                </motion.p>

            </div>
        </Slide>
    );
};

export default CookiesSlide;
