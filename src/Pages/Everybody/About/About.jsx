

import React, { useContext } from 'react';
import { CoreContext } from '../../../Services/Core/Context';
import Fade from 'react-reveal/Fade';
import './About.css';

const AboutPage = () => {
    const { L } = useContext(CoreContext);

    const Policies = [
        [L('POLICIES_LEGAL_NOTICE'), L('POLICIES_LEGAL_NOTICE_CONTENT_1'), L('POLICIES_LEGAL_NOTICE_CONTENT_2')],
        [L('POLICIES_PRIVACY'), L('POLICIES_PRIVACY_CONTENT_1'), L('POLICIES_PRIVACY_CONTENT_2')],
        [L('POLICIES_RESTRICTIONS'), L('POLICIES_RESTRICTIONS_CONTENT_1')],
        [L('POLICIES_OPEN_SOURCE'), L('POLICIES_OPEN_SOURCE_CONTENT_1')]
    ]; 

    return (
        <main id='About-Page-Main'>
            <Fade top>
                <section id='Introduction-Box'>
                    <h3 id='Page-Title'>{L('ABOUT_PAGE_TITLE')}</h3>
                    <p id='Page-Subtitle'>{L('ABOUT_PAGE_SUBTITLE')}</p>
                </section>
            </Fade>

            <Fade bottom>
                <section id='Policies-Box'>
                    {(Policies).map(([ Title, ...Descriptions ], Index) => (
                        <article key={Index}>
                            <h3 className='Policy-Title'>{Title}</h3>
                            <div className='Policy-Content-Box'>
                                {(Descriptions).map((Description, SubIndex) => (
                                    <p className='Policy-Description' key={SubIndex}>{Description}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </section>
            </Fade>
        </main>
    );
};

export default AboutPage;