import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const WWWIntroSlide = () => {
    return (
        <Slide title="3. La World Wide Web">
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {/* Water Line */}
                <div style={{ position: 'absolute', top: '40%', width: '100%', height: '2px', background: '#00f2ff', zIndex: 2 }} />

                <div style={{ position: 'relative', width: '600px', height: '400px' }}>
                    {/* Surface Web */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ position: 'absolute', top: '0', left: '25%', width: '50%', height: '40%', background: 'rgba(255,255,255,0.2)', borderRadius: '50% 50% 0 0', textAlign: 'center', paddingTop: '40px' }}
                    >
                        <h3 style={{ color: '#fff' }}>Web de Superfície</h3>
                        <p style={{ fontSize: '0.8rem' }}>Indexable (Google, Bing)</p>
                    </motion.div>

                    {/* Deep Web */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ position: 'absolute', top: '40%', left: '10%', width: '80%', height: '40%', background: 'rgba(0, 242, 255, 0.1)', textAlign: 'center', paddingTop: '40px' }}
                    >
                        <h3 style={{ color: '#00f2ff' }}>Web Profunda (Deep Web)</h3>
                        <p style={{ fontSize: '0.8rem' }}>No indexable (Bancs, Núvol, Privat)</p>
                    </motion.div>

                    {/* Dark Web */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        style={{ position: 'absolute', top: '80%', left: '20%', width: '60%', height: '20%', background: 'rgba(0, 0, 0, 0.8)', border: '1px solid #333', textAlign: 'center', paddingTop: '10px' }}
                    >
                        <h3 style={{ color: '#555' }}>Web Fosca (Darknet)</h3>
                        <p style={{ fontSize: '0.8rem' }}>Anònima (TOR)</p>
                    </motion.div>
                </div>

            </div>
        </Slide>
    );
};

export default WWWIntroSlide;
