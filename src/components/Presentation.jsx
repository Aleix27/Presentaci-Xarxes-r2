import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroSlide from '../slides/IntroSlide';
import IndexSlide from '../slides/IndexSlide';
import ServicesSlide from '../slides/ServicesSlide';

// DNS Section
import DNSIntroSlide from '../slides/DNSIntroSlide';
import DNSResolutionSlide from '../slides/DNSResolutionSlide';
import DNSEfficiencySlide from '../slides/DNSEfficiencySlide';

// WWW & HTTP Section
import WWWIntroSlide from '../slides/WWWIntroSlide';
import HTMLSlide from '../slides/HTMLSlide';
import HTTPBasicsSlide from '../slides/HTTPBasicsSlide';
import ConcurrencySlide from '../slides/ConcurrencySlide'; // New
import HTTPRequestSlide from '../slides/HTTPRequestSlide';
import VirtualHostSlide from '../slides/VirtualHostSlide'; // New
import HTTPResponseSlide from '../slides/HTTPResponseSlide';
import CachingSlide from '../slides/CachingSlide';
import CookiesSlide from '../slides/CookiesSlide';
import HTTP2Slide from '../slides/HTTP2Slide'; // New
import HTTPSecuritySlide from '../slides/HTTPSecuritySlide';

// Email Section
import EmailArchSlide from '../slides/EmailArchSlide';
import EmailProtocolsSlide from '../slides/EmailProtocolsSlide';
import SMTPConversationSlide from '../slides/SMTPConversationSlide';
import DKIMSlide from '../slides/DKIMSlide';

import ConclusionSlide from '../slides/ConclusionSlide';
import Background from './Background';
import RotateDevicePrompt from './RotateDevicePrompt';

const slides = [
    IntroSlide,
    IndexSlide,
    ServicesSlide,

    // DNS
    DNSIntroSlide,
    DNSResolutionSlide,
    DNSEfficiencySlide,

    // WWW
    WWWIntroSlide,
    HTMLSlide,
    HTTPBasicsSlide,
    ConcurrencySlide,
    HTTPRequestSlide,
    VirtualHostSlide,
    HTTPResponseSlide,
    CachingSlide,
    CookiesSlide,
    HTTP2Slide,
    HTTPSecuritySlide,

    // Email
    EmailArchSlide,
    EmailProtocolsSlide,
    SMTPConversationSlide,
    DKIMSlide,

    ConclusionSlide,
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
