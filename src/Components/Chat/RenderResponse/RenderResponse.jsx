

import React from 'react';
import { BsRobot } from 'react-icons/bs';
import { TbBrandRedhat } from 'react-icons/tb';
import { With } from '../../../Utilities/Runtime';
import { CopyBlock, dracula } from 'react-code-blocks';
import WaitingResponse from '../WaitingResponse';
import Fade from 'react-reveal/Fade';
import './RenderResponse.css';

const RenderResponse = ({ Content, Discipline }) => (
    <Fade clear>
        <div className='Render-Response-Box' data-discipline={Discipline}>
            <i className='Render-Response-Icon-Box'>
                {(Discipline === 'Client') ? (<TbBrandRedhat />) : (<BsRobot />)}
            </i>
            <div className='Render-Response-Content-Box'>
                {(Content.length >= 1) ? (
                    (Content?.includes('```') ? (
                        (With(([ InitialContent, Code, FinalContent ]) => (
                            <React.Fragment>
                                <p>{InitialContent}</p>
                                {(With(([ ProgrammingLanguage, ...CodeContent ]) => (
                                    <CopyBlock
                                        language={ProgrammingLanguage}
                                        showLineNumbers={true}
                                        theme={dracula}
                                        wrapLines={true}
                                        codeBlock={true}
                                        text={CodeContent.join('\n')} />
                                ), Code.split('\n').slice(0, -1)))}
                                <p>{FinalContent}</p>
                            </React.Fragment>
                        ), Content.split('```')))
                    ) : (
                        (Content.includes('\n') ? (
                            Content.split('\n').map((Part) => <p>{Part}</p>)
                        ) : (
                            <p>{Content}</p>
                        ))
                    ))
                ) : (
                    <WaitingResponse />
                )}
            </div>
        </div>
    </Fade>
);

export default RenderResponse;