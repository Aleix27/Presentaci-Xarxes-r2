import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const codeSnippet = `<!DOCTYPE html>
<html>
<head>
  <title>Hola Món!</title>
  <link rel="stylesheet" href="estil.css">
</head>
<body>
  <h1>Benvinguts</h1>
  <img src="foto.jpg">
</body>
</html>`;

const HTMLSlide = () => {
    return (
        <Slide title="3.1 Pàgines Web">
            <div style={{ display: 'flex', gap: '2rem', height: '100%', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ flex: 1, textAlign: 'left', fontFamily: 'monospace', background: '#1e1e1e', padding: '2rem', borderRadius: '10px', border: '1px solid #333' }}
                >
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                        {codeSnippet}
                    </pre>
                </motion.div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#ff6b6b' }}>Estructura</h3>
                        <p>HTML defineix el contingut i l'esquelet.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ color: '#00f2ff' }}>Recursos</h3>
                        <p>Imatges, CSS (estil), JavaScript (lògica) es carreguen a part.</p>
                    </motion.div>
                </div>

            </div>
        </Slide>
    );
};

export default HTMLSlide;
