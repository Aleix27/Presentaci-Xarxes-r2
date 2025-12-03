import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const HTTPRequestSlide = () => {
    return (
        <Slide title="3.4 Petició HTTP">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ background: '#1e1e1e', padding: '2rem', borderRadius: '10px', fontFamily: 'monospace', fontSize: '1.5rem', textAlign: 'left', border: '1px solid #333' }}
                >
                    <div>
                        <span style={{ color: '#00f2ff' }}>GET</span> <span style={{ color: '#fff' }}>/app/index.html</span> <span style={{ color: '#ff6b6b' }}>HTTP/1.1</span>
                    </div>
                    <div>
                        <span style={{ color: '#aaa' }}>Host:</span> <span style={{ color: '#fff' }}>exemple.com</span>
                    </div>
                    <div>
                        <span style={{ color: '#aaa' }}>User-Agent:</span> <span style={{ color: '#fff' }}>Firefox/107.0</span>
                    </div>
                    <div>
                        <span style={{ color: '#aaa' }}>Accept:</span> <span style={{ color: '#fff' }}>text/html</span>
                    </div>
                    <br />
                    <div style={{ opacity: 0.5 }}>[Línia en blanc]</div>
                </motion.div>

                <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel"
                        style={{ padding: '1rem' }}
                    >
                        <h4 style={{ color: '#00f2ff', margin: 0 }}>Mètode</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem' }}>Què volem fer?</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="glass-panel"
                        style={{ padding: '1rem' }}
                    >
                        <h4 style={{ color: '#aaa', margin: 0 }}>Capçaleres</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem' }}>Metadades</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="glass-panel"
                        style={{ padding: '1rem' }}
                    >
                        <h4 style={{ color: '#fff', margin: 0 }}>Virtual Host</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem' }}>Host: permet múltiples webs en 1 IP</p>
                    </motion.div>
                </div>

            </div>
        </Slide>
    );
};

export default HTTPRequestSlide;
