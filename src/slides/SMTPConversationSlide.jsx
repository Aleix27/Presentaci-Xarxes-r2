import React, { useState, useEffect, useRef } from 'react';
import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBubble = ({ text, sender }) => {
    const isClient = sender === 'client';
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{
                alignSelf: isClient ? 'flex-end' : 'flex-start',
                background: isClient ? '#6366f1' : '#334155', // Indigo & Slate
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '20px',
                borderBottomRightRadius: isClient ? '4px' : '20px',
                borderBottomLeftRadius: isClient ? '20px' : '4px',
                marginBottom: '10px',
                maxWidth: '75%',
                fontSize: '1rem',
                lineHeight: '1.4',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                position: 'relative'
            }}
        >
            {text}
        </motion.div>
    );
};

const SMTPConversationSlide = () => {
    const [visibleMessages, setVisibleMessages] = useState([]);
    const scrollRef = useRef(null);

    const conversation = [
        { sender: 'server', text: '220 domini2 Service ready' },
        { sender: 'client', text: 'HELO domini1' },
        { sender: 'server', text: '250 Hello domini1' },
        { sender: 'client', text: 'MAIL FROM: <usuari1@domini1>' },
        { sender: 'server', text: '250 Sender OK' },
        { sender: 'client', text: 'RCPT TO: <usuari5@domini2>' },
        { sender: 'server', text: '250 Recipient OK' },
        { sender: 'client', text: 'DATA' },
        { sender: 'server', text: '354 Start mail input' },
        { sender: 'client', text: 'Subject: Hola!\r\n\r\nCom va tot?.' },
        { sender: 'server', text: '250 OK' },
        { sender: 'client', text: 'QUIT' },
        { sender: 'server', text: '221 Closing connection' },
    ];

    useEffect(() => {
        const timeouts = [];
        let delay = 500;

        conversation.forEach((msg, index) => {
            const t = setTimeout(() => {
                setVisibleMessages(prev => [...prev, msg]);
            }, delay);
            timeouts.push(t);
            delay += 1200; // Consistent pacing
        });

        return () => {
            timeouts.forEach(clearTimeout); // Critical: Clear all on unmount
        };
    }, []);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleMessages]);

    return (
        <Slide title="4.2 Conversa SMTP">
            <div style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                <div style={{
                    width: '400px',
                    height: '650px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    borderRadius: '40px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '20px',
                        background: 'rgba(30, 41, 59, 0.9)',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        textAlign: 'center',
                        zIndex: 10
                    }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#f8fafc' }}>SMTP Server</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Connected via Port 25</div>
                    </div>

                    {/* Chat Area */}
                    <div
                        ref={scrollRef}
                        style={{
                            flex: 1,
                            padding: '20px',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            scrollBehavior: 'smooth'
                        }}
                    >
                        <AnimatePresence>
                            {visibleMessages.map((msg, index) => (
                                <ChatBubble key={index} text={msg.text} sender={msg.sender} />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default SMTPConversationSlide;
