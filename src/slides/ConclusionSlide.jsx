import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const ConclusionSlide = () => {
    return (
        <Slide title="6. Conclusions">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 4rem' }}>
                <motion.ul
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.3 } }
                    }}
                    style={{ listStyle: 'none', padding: 0 }}
                >
                    {[
                        "La configuració correcta del DNS és crítica per a la navegació.",
                        "Els servidors Web i de Correu requereixen protocols específics (HTTP, SMTP).",
                        "La seguretat (HTTPS, Tallafocs) s'ha de tenir en compte en tot moment.",
                        "Aquest laboratori demostra la interdependència dels serveis de xarxa."
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            variants={{ hidden: { x: -20, opacity: 0 }, show: { x: 0, opacity: 1 } }}
                            style={{
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <span style={{ color: '#00f2ff', marginRight: '1rem', fontSize: '2rem' }}>•</span>
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                >
                    <h2 className="text-gradient" style={{ fontSize: '3rem' }}>Gràcies per la vostra atenció!</h2>
                </motion.div>
            </div>
        </Slide>
    );
};

export default ConclusionSlide;
