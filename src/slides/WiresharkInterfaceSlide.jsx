import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const WiresharkInterfaceSlide = () => {
    return (
        <Slide title="Interfície de Wireshark">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', padding: '0 2rem', alignItems: 'center' }}>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#cbd5e1' }}>
                    Visualització detallada de paquets en temps real.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        width: '100%',
                        maxWidth: '900px',
                        background: '#1e1e1e',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
                        border: '1px solid #333',
                        fontFamily: 'monospace',
                        fontSize: '0.8rem'
                    }}
                >
                    {/* Toolbar Mockup */}
                    <div style={{ background: '#2d2d2d', padding: '8px', borderBottom: '1px solid #333', display: 'flex', gap: '10px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                        <div style={{ marginLeft: 'auto', color: '#888' }}>eth0: &lt;live capture&gt;</div>
                    </div>

                    {/* Columns Header */}
                    <div style={{ display: 'grid', gridTemplateColumns: '60px 100px 150px 150px 80px 1fr', background: '#333', padding: '5px 10px', color: '#ccc', fontWeight: 'bold' }}>
                        <div>No.</div>
                        <div>Time</div>
                        <div>Source</div>
                        <div>Destination</div>
                        <div>Proto</div>
                        <div>Info</div>
                    </div>

                    {/* Packet List */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {[
                            { no: 1, time: '0.000000', src: '192.168.1.35', dst: '8.8.8.8', proto: 'ICMP', info: 'Echo (ping) request  id=0x0001, seq=1/256, ttl=64', color: '#e8f5e9', bg: '#1b5e20' },
                            { no: 2, time: '0.014200', src: '8.8.8.8', dst: '192.168.1.35', proto: 'ICMP', info: 'Echo (ping) reply    id=0x0001, seq=1/256, ttl=115', color: '#e8f5e9', bg: '#1b5e20' },
                            { no: 3, time: '1.002340', src: '192.168.1.35', dst: '8.8.8.8', proto: 'ICMP', info: 'Echo (ping) request  id=0x0001, seq=2/512, ttl=64', color: '#e8f5e9', bg: '#1b5e20' },
                            { no: 4, time: '1.015600', src: '8.8.8.8', dst: '192.168.1.35', proto: 'ICMP', info: 'Echo (ping) reply    id=0x0001, seq=2/512, ttl=115', color: '#e8f5e9', bg: '#1b5e20' },
                            { no: 5, time: '2.450000', src: '192.168.1.35', dst: '1.1.1.1', proto: 'TCP', info: '5678 > 80 [SYN] Seq=0 Win=64240 Len=0 MSS=1460', color: '#e1bee7', bg: '#4a148c' },
                            { no: 6, time: '2.480000', src: '1.1.1.1', dst: '192.168.1.35', proto: 'TCP', info: '80 > 5678 [SYN, ACK] Seq=0 Ack=1 Win=65535 Len=0', color: '#e1bee7', bg: '#4a148c' },
                        ].map((pkt, i) => (
                            <div key={i} style={{
                                display: 'grid',
                                gridTemplateColumns: '60px 100px 150px 150px 80px 1fr',
                                padding: '4px 10px',
                                background: pkt.bg,
                                color: pkt.color,
                                borderBottom: '1px solid rgba(0,0,0,0.1)',
                                opacity: 0.9
                            }}>
                                <div>{pkt.no}</div>
                                <div>{pkt.time}</div>
                                <div>{pkt.src}</div>
                                <div>{pkt.dst}</div>
                                <div>{pkt.proto}</div>
                                <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{pkt.info}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                    <div className="glass-panel" style={{ padding: '1rem', fontSize: '0.9rem' }}>
                        <span style={{ color: '#00f2ff' }}>●</span> Llista de Paquets
                    </div>
                    <div className="glass-panel" style={{ padding: '1rem', fontSize: '0.9rem' }}>
                        <span style={{ color: '#7000ff' }}>●</span> Detalls del Protocol
                    </div>
                    <div className="glass-panel" style={{ padding: '1rem', fontSize: '0.9rem' }}>
                        <span style={{ color: '#ff6b6b' }}>●</span> Bytes (Hex)
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default WiresharkInterfaceSlide;
