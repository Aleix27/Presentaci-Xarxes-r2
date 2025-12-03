import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const WiresharkIntroSlide = () => {
    // Generate random positions for background elements to avoid clumping
    const backgroundElements = [...Array(15)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 15,
        rotate: Math.random() * 360
    }));

    return (
        <Slide title="Wireshark">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem', position: 'relative' }}>

                {/* Floating 3D Packets Background */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                    {backgroundElements.map((el) => (
                        <motion.div
                            key={el.id}
                            initial={{ y: '120vh', x: `${el.left}vw`, rotate: el.rotate, opacity: 0 }}
                            animate={{ y: '-20vh', rotate: el.rotate + 180, opacity: [0, 0.4, 0] }}
                            transition={{ duration: el.duration, repeat: Infinity, ease: "linear", delay: el.delay }}
                            style={{
                                position: 'absolute',
                                width: '60px',
                                height: '80px',
                                border: '1px solid rgba(0, 242, 255, 0.2)',
                                background: 'rgba(0, 242, 255, 0.05)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                color: 'rgba(0, 242, 255, 0.5)',
                                backdropFilter: 'blur(2px)'
                            }}
                        >
                            HEX
                        </motion.div>
                    ))}
                </div>

                <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <p style={{ fontSize: '1.2rem' }}>
                        Similar a tcpdump però amb <strong>Interfície Gràfica (GUI)</strong>.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="glass-panel"
                            style={{ padding: '1.5rem', backdropFilter: 'blur(10px)', background: 'rgba(2, 6, 23, 0.7)' }}
                        >
                            <h3 style={{ color: '#00f2ff' }}>Funcionalitats</h3>
                            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                                <li>Veure paquets per capes.</li>
                                <li>Seguir converses (TCP stream).</li>
                                <li>Filtres visuals intuïtius.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="glass-panel"
                            style={{ padding: '1.5rem', backdropFilter: 'blur(10px)', background: 'rgba(2, 6, 23, 0.7)' }}
                        >
                            <h3 style={{ color: '#7000ff' }}>Instal·lació</h3>
                            <div style={{ background: '#1e1e1e', padding: '0.5rem', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                sudo apt install wireshark
                            </div>
                            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#94a3b8' }}>
                                Executar amb <code>sudo wireshark</code> per capturar.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default WiresharkIntroSlide;
