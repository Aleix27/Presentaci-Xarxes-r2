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
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        width: '100%',
                        maxWidth: '1400px', // Much wider
                        height: '600px',    // Taller
                        background: '#f0f0f0', // Light theme like standard Wireshark
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)',
                        border: '1px solid #999',
                        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                        fontSize: '0.85rem',
                        color: '#333',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {/* Toolbar Mockup */}
                    <div style={{ background: '#e6e6e6', padding: '4px 8px', borderBottom: '1px solid #ccc', display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <div style={{ width: '20px', height: '20px', background: '#0078d7', borderRadius: '2px' }}></div> {/* Start */}
                            <div style={{ width: '20px', height: '20px', background: '#ccc', borderRadius: '2px' }}></div> {/* Stop */}
                        </div>
                        <div style={{ height: '20px', borderLeft: '1px solid #999', margin: '0 5px' }}></div>
                        <div style={{ background: '#fff', border: '1px solid #ccc', padding: '2px 5px', width: '300px', color: '#888' }}>Apply a display filter ... &lt;Ctrl-/&gt;</div>
                    </div>

                    {/* Packet List Pane */}
                    <div style={{ flex: '1', overflowY: 'auto', background: '#fff' }}>
                        {/* Columns Header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '60px 100px 150px 150px 80px 1fr', background: '#e6e6e6', borderBottom: '1px solid #ccc', padding: '2px 5px', fontWeight: 'bold', fontSize: '0.8rem' }}>
                            <div style={{ borderRight: '1px solid #ccc', paddingLeft: '4px' }}>No.</div>
                            <div style={{ borderRight: '1px solid #ccc', paddingLeft: '4px' }}>Time</div>
                            <div style={{ borderRight: '1px solid #ccc', paddingLeft: '4px' }}>Source</div>
                            <div style={{ borderRight: '1px solid #ccc', paddingLeft: '4px' }}>Destination</div>
                            <div style={{ borderRight: '1px solid #ccc', paddingLeft: '4px' }}>Protocol</div>
                            <div style={{ paddingLeft: '4px' }}>Info</div>
                        </div>

                        {/* Rows */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {[
                                { no: 1, time: '0.000000', src: '192.168.1.35', dst: '8.8.8.8', proto: 'ICMP', info: 'Echo (ping) request  id=0x0001, seq=1/256, ttl=64 (reply in 2)', color: '#000', bg: '#e4ffc7' },
                                { no: 2, time: '0.014200', src: '8.8.8.8', dst: '192.168.1.35', proto: 'ICMP', info: 'Echo (ping) reply    id=0x0001, seq=1/256, ttl=115 (request in 1)', color: '#000', bg: '#e4ffc7' },
                                { no: 3, time: '1.002340', src: '192.168.1.35', dst: '8.8.8.8', proto: 'ICMP', info: 'Echo (ping) request  id=0x0001, seq=2/512, ttl=64 (reply in 4)', color: '#000', bg: '#e4ffc7' },
                                { no: 4, time: '1.015600', src: '8.8.8.8', dst: '192.168.1.35', proto: 'ICMP', info: 'Echo (ping) reply    id=0x0001, seq=2/512, ttl=115 (request in 3)', color: '#000', bg: '#e4ffc7' },
                                { no: 5, time: '2.450000', src: '192.168.1.35', dst: '1.1.1.1', proto: 'TCP', info: '5678 → 80 [SYN] Seq=0 Win=64240 Len=0 MSS=1460 SACK_PERM=1', color: '#000', bg: '#e4ffc7' },
                                { no: 6, time: '2.480000', src: '1.1.1.1', dst: '192.168.1.35', proto: 'TCP', info: '80 → 5678 [SYN, ACK] Seq=0 Ack=1 Win=65535 Len=0 MSS=1460', color: '#000', bg: '#e4ffc7' },
                                { no: 7, time: '5.123000', src: '192.168.1.35', dst: '10.0.0.1', proto: 'DNS', info: 'Standard query 0x1234 A example.com', color: '#000', bg: '#daeeff' },
                                { no: 8, time: '5.154000', src: '10.0.0.1', dst: '192.168.1.35', proto: 'DNS', info: 'Standard query response 0x1234 A example.com A 93.184.216.34', color: '#000', bg: '#daeeff' },
                            ].map((pkt, i) => (
                                <div key={i} style={{
                                    display: 'grid',
                                    gridTemplateColumns: '60px 100px 150px 150px 80px 1fr',
                                    padding: '2px 5px',
                                    background: i === 0 ? '#0078d7' : pkt.bg, // Highlight first row
                                    color: i === 0 ? '#fff' : pkt.color,
                                    borderBottom: '1px solid #e0e0e0',
                                    fontFamily: 'Consolas, monospace',
                                    fontSize: '0.8rem'
                                }}>
                                    <div style={{ paddingLeft: '4px' }}>{pkt.no}</div>
                                    <div style={{ paddingLeft: '4px' }}>{pkt.time}</div>
                                    <div style={{ paddingLeft: '4px' }}>{pkt.src}</div>
                                    <div style={{ paddingLeft: '4px' }}>{pkt.dst}</div>
                                    <div style={{ paddingLeft: '4px' }}>{pkt.proto}</div>
                                    <div style={{ paddingLeft: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{pkt.info}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Resizer */}
                    <div style={{ height: '4px', background: '#ccc', cursor: 'row-resize' }}></div>

                    {/* Packet Details Pane */}
                    <div style={{ height: '200px', overflowY: 'auto', background: '#fff', borderTop: '1px solid #999', padding: '5px' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Frame 1: 98 bytes on wire (784 bits), 98 bytes captured (784 bits) on interface eth0, id 0</div>
                        <div style={{ paddingLeft: '15px' }}>▶ Ethernet II, Src: PcsCompu_56:8a:c6 (08:00:27:56:8a:c6), Dst: Google_00:00:00 (00:00:00:00:00:00)</div>
                        <div style={{ paddingLeft: '15px' }}>▶ Internet Protocol Version 4, Src: 192.168.1.35, Dst: 8.8.8.8</div>
                        <div style={{ paddingLeft: '15px' }}>▼ Internet Control Message Protocol</div>
                        <div style={{ paddingLeft: '30px' }}>Type: 8 (Echo (ping) request)</div>
                        <div style={{ paddingLeft: '30px' }}>Code: 0</div>
                        <div style={{ paddingLeft: '30px' }}>Checksum: 0x4d5e [correct]</div>
                        <div style={{ paddingLeft: '30px' }}>Identifier (BE): 1 (0x0001)</div>
                        <div style={{ paddingLeft: '30px' }}>Identifier (LE): 256 (0x0100)</div>
                        <div style={{ paddingLeft: '30px' }}>Sequence Number (BE): 1 (0x0001)</div>
                        <div style={{ paddingLeft: '30px' }}>Sequence Number (LE): 256 (0x0100)</div>
                        <div style={{ paddingLeft: '30px' }}>[Response To: #2]</div>
                        <div style={{ paddingLeft: '30px' }}>Data (48 bytes)</div>
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
