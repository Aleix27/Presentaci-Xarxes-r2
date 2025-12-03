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
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);

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

    // Scale and Rotate Logic
    useEffect(() => {
        const handleResize = () => {
            const baseWidth = 1920;
            const baseHeight = 1080;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const isPortrait = windowHeight > windowWidth;

            let newScale;

            if (isPortrait) {
                setRotation(90);
                const scaleX = windowHeight / baseWidth;
                const scaleY = windowWidth / baseHeight;
                newScale = Math.min(scaleX, scaleY);
            } else {
                setRotation(0);
                const scaleX = windowWidth / baseWidth;
                const scaleY = windowHeight / baseHeight;
                newScale = Math.min(scaleX, scaleY);
            }

            setScale(newScale);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
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
                width: '100vw',
                height: '100vh',
                background: '#020617',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}
        >
            <Background />

            {/* Scaled Container */}
            <div style={{
                width: '1920px',
                height: '1080px',
                transform: `rotate(${rotation}deg) scale(${scale})`,
                transformOrigin: 'center center',
                position: 'relative',
                boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                overflow: 'hidden'
            }}>
                <AnimatePresence mode="wait">
                    <CurrentSlideComponent key={currentSlide} />
                </AnimatePresence>

                {/* Navigation Hint */}
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '40px',
                    color: 'rgba(255,255,255,0.3)',
                    fontSize: '1.2rem',
                    zIndex: 100
                }}>
                    {currentSlide + 1} / {slides.length}
                </div>
            </div>
        </div>
    );
};

export default Presentation;
