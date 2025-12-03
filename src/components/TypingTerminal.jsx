import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingTerminal = ({ command, output, delay = 0 }) => {
    const [displayedCommand, setDisplayedCommand] = useState('');
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        let timeout;
        const startTyping = () => {
            let i = 0;
            const typeChar = () => {
                if (i < command.length) {
                    setDisplayedCommand(command.substring(0, i + 1));
                    i++;
                    timeout = setTimeout(typeChar, 50 + Math.random() * 50); // Random typing speed
                } else {
                    timeout = setTimeout(() => setShowOutput(true), 300);
                }
            };
            typeChar();
        };

        timeout = setTimeout(startTyping, delay * 1000);

        return () => clearTimeout(timeout);
    }, [command, delay]);

    return (
        <div style={{
            background: '#1e1e1e',
            borderRadius: '8px',
            padding: '1.5rem',
            fontFamily: 'monospace',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            border: '1px solid #333',
            width: '100%',
            maxWidth: '800px',
            textAlign: 'left'
        }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>

            <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#2ecc71', marginRight: '8px' }}>➜</span>
                <span style={{ color: '#00f2ff' }}>~</span>
                <span style={{ marginLeft: '8px', color: '#fff' }}>{displayedCommand}</span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    style={{ display: 'inline-block', width: '8px', height: '16px', background: '#fff', marginLeft: '4px', verticalAlign: 'middle' }}
                />
            </div>

            {showOutput && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ color: '#ccc', whiteSpace: 'pre-wrap', marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}
                >
                    {output}
                </motion.div>
            )}
        </div>
    );
};

export default TypingTerminal;
