import React from 'react';

const RotateDevicePrompt = () => {
    return (
        <div className="rotate-prompt" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#020617',
            zIndex: 9999,
            display: 'none', // Hidden by default, shown via CSS media query
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <div style={{ fontSize: '4rem', marginBottom: '2rem', animation: 'rotate 2s infinite' }}>📱</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Si us plau, gira el dispositiu</h2>
            <p style={{ color: '#94a3b8' }}>Aquesta presentació està dissenyada per veure's en horitzontal.</p>
            <style>{`
                @media (max-width: 900px) and (orientation: portrait) {
                    .rotate-prompt {
                        display: flex !important;
                    }
                }
                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(90deg); }
                    50% { transform: rotate(90deg); }
                    75% { transform: rotate(0deg); }
                    100% { transform: rotate(0deg); }
                }
            `}</style>
        </div>
    );
};

export default RotateDevicePrompt;
