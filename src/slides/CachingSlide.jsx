import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const CachingSlide = () => {
    return (
        <Slide title="3.7 Memòria Cau">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', height: '100%', alignContent: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel"
                    style={{ padding: '2rem' }}
                >
                    <h3 style={{ color: '#00f2ff' }}>Last-Modified</h3>
                    <p>El servidor envia la data de modificació.</p>
                    <div style={{ background: '#333', padding: '1rem', borderRadius: '8px', marginTop: '1rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                        If-Modified-Since: Tue, 30 Oct...
                    </div>
                    <p style={{ marginTop: '1rem', color: '#2ecc71' }}>304 Not Modified</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel"
                    style={{ padding: '2rem' }}
                >
                    <h3 style={{ color: '#7000ff' }}>ETag</h3>
                    <p>Identificador únic del contingut (hash).</p>
                    <div style={{ background: '#333', padding: '1rem', borderRadius: '8px', marginTop: '1rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                        If-None-Match: "686897696a7c876b7e"
                    </div>
                    <p style={{ marginTop: '1rem' }}>Més precís que la data.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, width: '200%' }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '2rem' }}
                >
                    <p style={{ fontSize: '1.2rem' }}>Objectiu: Estalviar dades i millorar velocitat 🚀</p>
                </motion.div>

            </div>
        </Slide>
    );
};

export default CachingSlide;
