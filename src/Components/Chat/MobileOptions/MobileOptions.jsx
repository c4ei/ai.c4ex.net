

import React, { useContext } from 'react';
import { ChatContext } from '../../../Services/Chat/Context';
import { CoreContext } from '../../../Services/Core/Context';
import { Tooltip } from '@mui/material';
import { HidingHeader } from 'hiding-header-react'
import './MobileOptions.css';
import 'hiding-header/dist/style.css'

const MobileOptions = () => {
    const { UserExperience, HandleChatReset } = useContext(ChatContext);
    const { L } = useContext(CoreContext);

    return (
        <HidingHeader>
            <section id='Mobile-Options-Box'>
                {([
                    [L('MOBILE_OPTIONS_SETTINGS'), L('TOOLTIP_SIDE_MENU_SETTINGS'), () => UserExperience.SetIsSettingsMenuActive(true)],
                    [L('MOBILE_OPTIONS_ACTIVITY'), L('TOOLTIP_MY_ACTIVITY'), () => UserExperience.SetIsMobileActivityMenuActive(true)],
                    [L('MOBILE_OPTIONS_RESET_CHAT'), L('TOOLTIP_RESET_CHAT'), HandleChatReset]
                ].map(([ Name, TooltipTitle, OnClick ], Index) => (
                    <Tooltip title={TooltipTitle} key={Index}>
                        <button className='Button Outlined No-BR' onClick={OnClick}><span>{Name}</span></button>
                    </Tooltip>
                )))}
            </section>
        </HidingHeader>
    );
};

export default MobileOptions;