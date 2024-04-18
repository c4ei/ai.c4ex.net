

import React, { useContext } from 'react';
import { GrPowerReset } from 'react-icons/gr';
import { VscHistory } from 'react-icons/vsc';
import { FiGithub } from 'react-icons/fi';
import { Tooltip } from '@mui/material';
import { ChatContext } from '../../../Services/Chat/Context';
import { CoreContext } from '../../../Services/Core/Context';
import StoredChatResponsesViewer from '../StoredChatResponsesViewer';
import './SideMenu.css';
import { HomeIcon } from 'evergreen-ui';

const SideMenu = () => {
    const { UserExperience, HandleChatReset, ServerCommunication } = useContext(ChatContext);
    const { L } = useContext(CoreContext);
    const Options = [
        {
            Title: L('CHAT_SIDE_MENU_RESET_CHAT'),
            TooltipTitle: L('TOOLTIP_RESET_CHAT'),
            Icon: GrPowerReset,
            Callback: HandleChatReset,
            DisableOnLoading: true
        },
        {
            Title: L('CHAT_SIDE_MENU_MY_ACTIVITY'),
            TooltipTitle: L('TOOLTIP_MY_ACTIVITY'),
            Icon: VscHistory,
            Container: <StoredChatResponsesViewer />,
            DisableOnLoading: true
        }
        ,{
            Title: L('CHAT_SIDE_MENU_GITHUB'),
            TooltipTitle: L('TOOLTIP_GITHUB'),
            Icon: HomeIcon,
            Callback: () => window.open(import.meta.env.VITE_SOFTWARE_REPOSITORY_LINK, '_blank')
        }
        ,{
            Title: L('CHAT_SIDE_MENU_C4EX'),
            TooltipTitle: L('TOOLTIP_C4EX'),
            Icon: HomeIcon,
            Callback: () => window.open(import.meta.env.VITE_SOFTWARE_C4EX_LINK, '_blank')
        }
    ]

    return (
        <section id='Chat-Side-Menu-Box' data-isloading={ServerCommunication.GetIsLoading} >
            <article id='Options-Box'>
                {Options.map(({ Title, TooltipTitle, Icon, Callback, DisableOnLoading, Container }, Index) => (
                    <div className='Option-Group' key={Index} data-disableonloading={DisableOnLoading}>
                        <Tooltip title={TooltipTitle} placement='right'>
                            <div className='Option-Box' onClick={Callback}>
                                <i>
                                    <Icon />
                                </i>
                                <span>{Title}</span>
                            </div>
                        </Tooltip>
                        <div className='Option-Container-Box'>
                            {Container}
                        </div>
                    </div>
                ))}
            </article>
            <article id='Software-Info-Box'>
                <Tooltip title={L('TOOLTIP_SIDE_MENU_SETTINGS')} placement='top'>
                    <button 
                        className='Button Outlined Shine-Effect' 
                        onClick={() => UserExperience.SetIsSettingsMenuActive(true)}
                    >{L('CHAT_SIDE_MENU_SETTINGS')}</button>
                </Tooltip>
                <p id='I-Message'>{L('CHAT_SIDE_MENU_BOTTOM_MSG')}</p>
            </article>
        </section>
    );
};

export default SideMenu;