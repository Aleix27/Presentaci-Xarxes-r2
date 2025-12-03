import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const IPSlide = () => {
    return (
        <Slide title="Quina és l'adreça IP?">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p style={{ fontSize: '1.2rem' }}>
                    Hi ha diferents maneres de conèixer l'adreça IP. Una d'elles és via terminal:
                </p>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ background: '#1e1e1e', padding: '1.5rem', borderRadius: '8px', fontFamily: 'monospace', border: '1px solid #333' }}
                >
                    <span style={{ color: '#2ecc71' }}>~$</span> ip a
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#00f2ff' }}>NIC (Network Interface Card)</h3>
                        <p>Busqueu <code>enp0s1</code> o similar (LAN cablejada).</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#7000ff' }}>Adreça IP</h3>
                        <p>Busqueu la línia que comença amb <code>inet</code>.</p>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Exemple: 192.168.1.137</p>
                    </motion.div>
                </div>
                <div style={{ marginTop: '2rem', width: '100%' }}>
                    <TypingTerminal
                        command="ip a"
                        output={`1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000\n    link/ether 08:00:27:56:8a:c6 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.1.35/24 brd 192.168.1.255 scope global dynamic eth0\n       valid_lft 86324sec preferred_lft 86324sec`}
                        delay={0.5}
                    />
                </div>
            </div>
        </Slide>
    );
};

export default IPSlide;
