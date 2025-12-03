import React from 'react';
import Slide from '../components/Slide';
import TypingTerminal from '../components/TypingTerminal';

const TcpdumpResultSlide = () => {
    return (
        <Slide title="Resultat de la Captura">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', padding: '0 2rem' }}>
                <p style={{ fontSize: '1.2rem' }}>
                    Aquesta és la sortida que veuríem a la terminal on executem <code>tcpdump</code>:
                </p>

                <div style={{ width: '100%', flex: 1 }}>
                    <TypingTerminal
                        command="sudo tcpdump icmp"
                        output={`tcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes\n\n10:45:01.123456 IP 192.168.1.35 > 8.8.8.8: ICMP echo request, id 1, seq 1, length 64\n10:45:01.134567 IP 8.8.8.8 > 192.168.1.35: ICMP echo reply, id 1, seq 1, length 64\n\n10:45:02.123456 IP 192.168.1.35 > 8.8.8.8: ICMP echo request, id 1, seq 2, length 64\n10:45:02.134567 IP 8.8.8.8 > 192.168.1.35: ICMP echo reply, id 1, seq 2, length 64`}
                        delay={0.5}
                        style={{ fontSize: '0.9rem', lineHeight: '1.5' }}
                    />
                </div>
            </div>
        </Slide>
    );
};

export default TcpdumpResultSlide;
