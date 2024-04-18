

import React, { useContext, useRef } from 'react';
import { ChatContext } from '../../../Services/Chat/Context';
import { IconButton } from '@mui/material';
import { VscClose } from 'react-icons/vsc';
import StoredChatResponsesViewer from '../StoredChatResponsesViewer';
import './MobileActivityMenu.css';

const MobileActivityMenu = () => {
    const MobileActivityContentBoxReference = useRef(null);
    const { UserExperience } = useContext(ChatContext);

    return (
        <aside id='Mobile-Activity-Menu' onClick={(Event) => (MobileActivityContentBoxReference.current 
            && !MobileActivityContentBoxReference.current.contains(Event.target)
            && !document.querySelector('div[evergreen-portal-container]')?.contains(Event.target)) 
                && (UserExperience.SetIsMobileActivityMenuActive(false))}>
            <div id='Mobile-Activity-Content-Box' ref={MobileActivityContentBoxReference}>
                <div id='Mobile-Activity-Header-Box'>
                    <h3 id='Mobile-Activity-Title'>Your Activity</h3>
                    <IconButton id='Mobile-Activity-Icon-Box' onClick={() => UserExperience.SetIsMobileActivityMenuActive(false)}>
                        <VscClose />
                    </IconButton>
                </div>

                <StoredChatResponsesViewer />
            </div>
        </aside>
    );
};

export default MobileActivityMenu;