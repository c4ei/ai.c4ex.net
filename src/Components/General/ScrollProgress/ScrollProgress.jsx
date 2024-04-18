

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

const ScrollProgress = ({ ContainerReference = null, ...Properties }) => {
    const { scrollYProgress } = useScroll({ ...(ContainerReference) && ({ container: ContainerReference }) });
    const scaleX = useSpring(scrollYProgress);

    return (
        <motion.div {...Properties} 
            id='Scroll-Progress-Box'
            style={{ scaleX, ...Properties?.style || {} }} />
    );
};

export default ScrollProgress;