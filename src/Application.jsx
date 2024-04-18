

import React from 'react';
import { Routes as RoutesBox, Route, useLocation } from 'react-router-dom';
import Layout from './Components/General/Layout/Layout';
import Pages from './Pages';

const Application = () => {
    const Location = useLocation();
    return (
        <RoutesBox location={Location} key={Location.pathname}>
            <Route element={<Layout />}>
                <Route path='/' exact element={<Pages.Everybody.Home />} />
                <Route path='/about' element={<Pages.Everybody.About />} />
                <Route path='*' element={<Pages.Everybody.HTTP404 />} />
            </Route>
        </RoutesBox>
    );
};

export default Application;