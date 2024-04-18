

import React from 'react';
import { 
    Select as MUISelect, 
    OutlinedInput, 
    FormControl, 
    InputLabel, 
    FormHelperText } from '@mui/material';

const Select = ({ 
    Label, 
    Value, 
    OnChange, 
    children, 
    HelperText, 
    FormControlProps, 
    SelectProps, 
    ItemBoxProps, 
    PaperProps 
}) => (
    <FormControl sx={{ m: 1, width: 300 }} {...FormControlProps}>
        <InputLabel>{Label}</InputLabel>
        <MUISelect
            size='small'
            value={Value}
            onChange={OnChange}
            input={<OutlinedInput label={Label} />}
            MenuProps={{
                PaperProps: {
                    style: {
                        maxHeight: 48 * 4.5 + 8,
                        width: 250,
                        backgroundColor: '#222327',
                        color: '#FFFFFF',
                        ...ItemBoxProps,
                    },
                    ...PaperProps
                }
            }}
            {...SelectProps}
        >
            {children}
        </MUISelect>
        {(HelperText) && (
            <FormHelperText>{HelperText}</FormHelperText>
        )}
    </FormControl>
);

export default Select;