

import React, { useContext } from 'react';
import { MenuItem, Tooltip } from '@mui/material';
import { CoreContext } from '../../../Services/Core/Context';
import { GetAvailableLocales } from '../../../Locale';
import Select from '../Select';
import './LanguageSelect.css';

const LanguageSelect = () => {
    const { GetSelectedLanguage, SetSelectedLanguage, L } = useContext(CoreContext);

    return (
        <Tooltip title={L('TOOLTIP_LANGUAGE_SELECT')} placement='right'>
            <div>
                <Select
                    OnChange={(Event) => SetSelectedLanguage(Event.target.value)}
                    Value={GetSelectedLanguage}
                    ItemBoxProps={{ width: 64,  }}
                    FormControlProps={{ id: 'Language-Select-Box' }}
                    PaperProps={{ id: 'Language-Select-Paper-Box' }}
                >
                    {(GetAvailableLocales).map((Locale, Index) => (
                        <MenuItem key={Index} value={Locale}>{Locale}</MenuItem>
                    ))}
                </Select>
            </div>
        </Tooltip>
    );
};

export default LanguageSelect;