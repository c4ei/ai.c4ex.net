

import React, { useEffect } from 'react';

const UseWindowSize = () => {
    const [GetWindowSize, SetWindowSize] = React.useState({
        Width: window.innerWidth,
        Height: window.innerHeight
    });

    const ChangeWindowSize = () => (
        SetWindowSize({ Width: window.innerWidth, Height: window.innerHeight }));
    
    useEffect(() => {
        window.addEventListener('resize', ChangeWindowSize);
        return () => {
            window.removeEventListener('resize', ChangeWindowSize);
        };
    }, []);

    return GetWindowSize;
};

export default UseWindowSize;