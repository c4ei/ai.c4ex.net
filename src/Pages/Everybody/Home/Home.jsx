

import React, { useEffect, useContext, useRef } from 'react';
import { ChatContext } from '../../../Services/Chat/Context';
import SideMenu from '../../../Components/Chat/SideMenu';
import UseWindowSize from '../../../Hooks/UseWindowSize';
import MobileOptions from '../../../Components/Chat/MobileOptions';
import ChatViewer from '../../../Components/Chat/ChatViewer';
import './Home.css';

const HomePage = () => {
    const ChatNodeReference = useRef(null);
    const { ServerCommunication } = useContext(ChatContext);
    const { Width } = UseWindowSize();

    useEffect(() => {
        (ChatNodeReference.current) && (ChatNodeReference.current.scrollTop = ChatNodeReference.current.scrollHeight);
    }, [ServerCommunication.GetAPIResponses, ServerCommunication.GetStreamedResponses]);

    return (
        <main id='Home-Page-Main'>
            {(Width > 768) ? <SideMenu/> : <MobileOptions />}

            <section id='Chat-Box'>
                <ChatViewer ChatNodeReference={ChatNodeReference} />
            </section>
        </main>
    );
};

export default HomePage;