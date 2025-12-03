import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroSlide from '../slides/IntroSlide';
import ObjectivesSlide from '../slides/ObjectivesSlide';
import InstructionsSlide from '../slides/InstructionsSlide';
import IPSlide from '../slides/IPSlide';
import PingSlide from '../slides/PingSlide';
import ICMPSlide from '../slides/ICMPSlide';
import PingVariationsSlide from '../slides/PingVariationsSlide';
import TTLSlide from '../slides/TTLSlide';
import TTLDiagramSlide from '../slides/TTLDiagramSlide';
import TracerouteSlide from '../slides/TracerouteSlide';
import TcpdumpSlide from '../slides/TcpdumpSlide';
import TcpdumpCaptureSlide from '../slides/TcpdumpCaptureSlide';
import WiresharkIntroSlide from '../slides/WiresharkIntroSlide';
import WiresharkInterfaceSlide from '../slides/WiresharkInterfaceSlide';
import WiresharkFilterSlide from '../slides/WiresharkFilterSlide';
import PacketInfoSlide from '../slides/PacketInfoSlide';
import RequirementsSlide from '../slides/RequirementsSlide';
import Background from './Background';
import RotateDevicePrompt from './RotateDevicePrompt';

const slides = [
    IntroSlide,
    ObjectivesSlide,
    InstructionsSlide,
    IPSlide,
    PingSlide,
    ICMPSlide,
    PingVariationsSlide,
    TTLSlide,
    TTLDiagramSlide,
    TracerouteSlide,
    TcpdumpSlide,
    TcpdumpCaptureSlide,
    WiresharkIntroSlide,
    WiresharkInterfaceSlide,
    WiresharkFilterSlide,
    PacketInfoSlide,
    RequirementsSlide
];

const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
            } else if (e.key === 'ArrowLeft') {
                setCurrentSlide((prev) => Math.max(prev - 1, 0));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Swipe Logic
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
        }
        if (isRightSwipe) {
            setCurrentSlide((prev) => Math.max(prev - 1, 0));
        }
    };

    const CurrentSlideComponent = slides[currentSlide];

    return (
        <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                background: '#020617', // Deep Slate
                color: '#fff',
                fontFamily: 'Inter, sans-serif'
            }}>
            <RotateDevicePrompt />
            <Background />
            <AnimatePresence mode='wait'>
                <CurrentSlideComponent key={currentSlide} />
            </AnimatePresence>

            <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                opacity: 0.5,
                fontSize: '0.8rem',
                textAlign: 'right',
                color: '#94a3b8'
            }}>
                Slide {currentSlide + 1} / {slides.length} <br />
                Use ← → Arrow Keys
            </div>
        </div>
    );
};

export default Presentation;
