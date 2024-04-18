

import React, { createContext, useState, useEffect } from 'react';
import * as Service from './Service';

export const CoreContext = createContext();

export const CoreProvider = ({ children }) => {
    const [GetSelectedLanguage, SetSelectedLanguage] = useState(Service.StoredLocalStorageSettings()?.Language || Service.ClientLanguage);
    const [GetIsLovelaceAnimationEnabled, SetIsLovelaceAnimationEnabled] = useState(true);
    const [GetLocales, SetLocales] = useState({});

    // ! Shortcut for retrieve value from locales using key
    const L = (Key) => GetLocales?.[Key] || Key;

    useEffect(() => {
        Service.StoreLocalStorageSettings({ Language: GetSelectedLanguage });
        SetLocales(Service.GetLocalesFromLanguage(GetSelectedLanguage));
    }, [GetSelectedLanguage]);

    useEffect(() => {
        return () => {
            SetSelectedLanguage('');
            SetLocales({});
            SetIsLovelaceAnimationEnabled(false);
        };
    }, []);

    return (
        <CoreContext.Provider
            value={{
                GetSelectedLanguage,
                SetSelectedLanguage,
                GetIsLovelaceAnimationEnabled,
                SetIsLovelaceAnimationEnabled,
                L
            }}
        >

            {children}
        </CoreContext.Provider>
    );
};