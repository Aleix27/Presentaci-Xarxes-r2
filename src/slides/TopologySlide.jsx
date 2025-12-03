import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const Node = ({ x, y, label, icon, delay }) => (
    <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5, type: 'spring' }}
    >
        <circle cx={x} cy={y} r="40" fill="#1a1a2e" stroke="#00f2ff" strokeWidth="2" />
        <text x={x} y={y + 8} textAnchor="middle" fill="#fff" fontSize="24">{icon}</text>
        <text x={x} y={y + 60} textAnchor="middle" fill="#fff" fontSize="14" style={{ fontFamily: 'Space Grotesk' }}>{label}</text>
    </motion.g>
);

const Connection = ({ x1, y1, x2, y2, delay }) => (
    <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#7000ff"
        strokeWidth="2"
        strokeOpacity="0.6"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: 1.5 }}
    />
);

const TopologySlide = () => {
    return (
        <Slide title="Topologia de Xarxa">
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="800" height="500" viewBox="0 0 800 500" style={{ overflow: 'visible' }}>
                    {/* Connections */}
                    <Connection x1={400} y1={80} x2={200} y2={250} delay={0.5} />
                    <Connection x1={400} y1={80} x2={600} y2={250} delay={0.5} />
                    <Connection x1={200} y1={250} x2={100} y2={400} delay={1} />
                    <Connection x1={200} y1={250} x2={300} y2={400} delay={1} />
                    <Connection x1={600} y1={250} x2={500} y2={400} delay={1} />
                    <Connection x1={600} y1={250} x2={700} y2={400} delay={1} />

                    {/* Nodes */}
                    <Node x={400} y={80} label="Gateway" icon="🌐" delay={0.2} />

                    <Node x={200} y={250} label="Switch A" icon="🔀" delay={0.7} />
                    <Node x={600} y={250} label="Switch B" icon="🔀" delay={0.7} />

                    <Node x={100} y={400} label="PC 1" icon="💻" delay={1.2} />
                    <Node x={300} y={400} label="PC 2" icon="💻" delay={1.3} />
                    <Node x={500} y={400} label="Servidor" icon="🖥️" delay={1.4} />
                    <Node x={700} y={400} label="Impressora" icon="🖨️" delay={1.5} />
                </svg>
            </div>
        </Slide>
    );
};

export default TopologySlide;
