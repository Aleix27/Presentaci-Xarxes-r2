import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const TreeNode = ({ label, x, y, delay, color = '#fff' }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: 'spring' }}
        style={{
            position: 'absolute',
            left: x,
            top: y,
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255,255,255,0.1)',
            border: `1px solid ${color}`,
            padding: '10px 20px',
            borderRadius: '20px',
            color: color,
            fontWeight: 'bold',
            zIndex: 2
        }}
    >
        {label}
    </motion.div>
);

const TreeLink = ({ x1, y1, x2, y2, delay }) => (
    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        <motion.line
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay, duration: 0.5 }}
        />
    </svg>
);

const DNSIntroSlide = () => {
    return (
        <Slide title="2. Sistema de Noms de Domini">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Root */}
                <TreeNode label="." x="50%" y="10%" delay={0.2} color="#ff6b6b" />

                {/* TLDs */}
                <TreeLink x1="50%" y1="10%" x2="20%" y2="30%" delay={0.5} />
                <TreeLink x1="50%" y1="10%" x2="50%" y2="30%" delay={0.5} />
                <TreeLink x1="50%" y1="10%" x2="80%" y2="30%" delay={0.5} />

                <TreeNode label=".com" x="20%" y="30%" delay={0.6} color="#00f2ff" />
                <TreeNode label=".cat" x="50%" y="30%" delay={0.7} color="#00f2ff" />
                <TreeNode label=".edu" x="80%" y="30%" delay={0.8} color="#00f2ff" />

                {/* Domains */}
                <TreeLink x1="20%" y1="30%" x2="20%" y2="50%" delay={1.0} />
                <TreeLink x1="50%" y1="30%" x2="40%" y2="50%" delay={1.0} />
                <TreeLink x1="50%" y1="30%" x2="60%" y2="50%" delay={1.0} />

                <TreeNode label="google" x="20%" y="50%" delay={1.1} />
                <TreeNode label="urv" x="40%" y="50%" delay={1.2} />
                <TreeNode label="gencat" x="60%" y="50%" delay={1.3} />

                {/* Subdomains */}
                <TreeLink x1="40%" y1="50%" x2="30%" y2="70%" delay={1.5} />
                <TreeLink x1="40%" y1="50%" x2="50%" y2="70%" delay={1.5} />

                <TreeNode label="www" x="30%" y="70%" delay={1.6} color="#7000ff" />
                <TreeNode label="campusvirtual" x="50%" y="70%" delay={1.7} color="#7000ff" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center', fontSize: '1.2rem' }}
                >
                    campusvirtual.urv.cat
                </motion.div>
            </div>
        </Slide>
    );
};

export default DNSIntroSlide;
