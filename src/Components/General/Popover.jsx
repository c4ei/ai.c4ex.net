

import React from 'react';
import { Popover as EvergreenPopover, Menu as EverMenu, Position } from 'evergreen-ui';

const Popover = ({
    Items = {},
    children
}) => {
    const TotalItems = Object.keys(Items).length;
    const ItemKeys = Object.keys(Items);

    return (
        <EvergreenPopover
            position={Position.BOTTOM_RIGHT}
            content={
                <EverMenu>
                    {(ItemKeys.map((Key, Index) => (
                        <React.Fragment key={Index}>
                            <EverMenu.Group>
                                {(Items[Key]).map(({ OnClick, Icon, Content }, Index) => (
                                    <EverMenu.Item
                                        key={Index}
                                        onClick={OnClick}
                                        icon={<i className='Popover-Icon'><Icon /></i>}
                                    >
                                        <span className='Popover-Content'>{Content}</span>
                                    </EverMenu.Item>
                                ))}
                            </EverMenu.Group>
                            {(Index === 0 && Index !== TotalItems) && (<EverMenu.Divider />)}
                        </React.Fragment>
                    )))}
                </EverMenu>
            }
        >
            {children}
        </EvergreenPopover>
    );
};

export default Popover;