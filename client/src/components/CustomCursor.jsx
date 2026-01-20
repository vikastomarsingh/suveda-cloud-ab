import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.group') || e.target.closest('.clickable')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
            <motion.div
                className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
                animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
