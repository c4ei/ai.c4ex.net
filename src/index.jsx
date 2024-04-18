import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollToTop from './Components/General/ScrollToTop.jsx';
import Application from './Application.jsx';
import * as EvergreenUI from 'evergreen-ui';
import { MultiProvider } from 'react-pendulum';
import { BrowserRouter } from 'react-router-dom';
import { ChatProvider } from './Services/Chat/Context.jsx';
import { CoreProvider } from './Services/Core/Context.jsx';
import { MergeObjectValues } from './Utilities/Algorithms.js';
import './Assets/StyleSheets/General.css';

const EvergreenTheme = MergeObjectValues(EvergreenUI.defaultTheme, {
    colors: { blue500: '#FFFFFF' }
});

ReactDOM.createRoot(document.getElementById('AiAAH-ROOT')).render(
    <MultiProvider
        providers={[
            <BrowserRouter />,
            <CoreProvider />,
            <ChatProvider />,
            <EvergreenUI.ThemeProvider value={EvergreenTheme} />,
            <ScrollToTop />
        ]}
    >
        <Application />
    </MultiProvider>
);