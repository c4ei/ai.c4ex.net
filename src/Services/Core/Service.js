

import Locales from '../../Locale';
import { QuickLocalStorageRescue } from '../../Utilities/Runtime';

export const LocalStorageIdentifier = {
    Settings: 'AiC4EI::Service::Core::Settings'
};

export const ClientLanguage = navigator.language.split('-')[0].toUpperCase();
export const GetLocalesFromLanguage = (Language) => (Locales?.[Language.toUpperCase()] || Locales['EN']);

export const StoredLocalStorageSettings = () => QuickLocalStorageRescue(LocalStorageIdentifier.Settings);
export const StoreLocalStorageSettings = (Settings) => localStorage.setItem(LocalStorageIdentifier.Settings, JSON.stringify(Settings));