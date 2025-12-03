import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const HTTPResponseSlide = () => {
    return (
        <Slide title="3.6 Resposta HTTP">
            <div style={{ display: 'flex', gap: '4rem', height: '100%', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ flex: 1, background: '#1e1e1e', padding: '2rem', borderRadius: '10px', fontFamily: 'monospace', fontSize: '1.2rem', textAlign: 'left', border: '1px solid #333' }}
                >
                    <div>
                        <span style={{ color: '#ff6b6b' }}>HTTP/1.1</span> <span style={{ color: '#00f2ff' }}>200 OK</span>
                    </div>
                    <div>
                        <span style={{ color: '#aaa' }}>Date:</span> Sun, 26 Dec 2022...
                    </div>
                    <div>
                        <span style={{ color: '#aaa' }}>Server:</span> Apache/2
                    </div>
                    <div>
                        <span style={{ color: '#aaa' }}>Content-Type:</span> text/html
                    </div>
                    <br />
                    <div style={{ color: '#fff' }}>&lt;html&gt;&lt;body&gt;Hola Món...</div>
                </motion.div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ background: '#2ecc71', color: '#000', padding: '1rem', borderRadius: '8px', fontWeight: 'bold' }}
                    >
                        200 OK ✅
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ background: '#e67e22', color: '#000', padding: '1rem', borderRadius: '8px', fontWeight: 'bold' }}
                    >
                        301 Moved Permanently ➡️
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                        style={{ background: '#e74c3c', color: '#fff', padding: '1rem', borderRadius: '8px', fontWeight: 'bold' }}
                    >
                        404 Not Found ❌
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 }}
                        style={{ background: '#9b59b6', color: '#fff', padding: '1rem', borderRadius: '8px', fontWeight: 'bold' }}
                    >
                        418 I'm a teapot 🫖
                    </motion.div>
                </div>

            </div>
        </Slide>
    );
};

export default HTTPResponseSlide;
