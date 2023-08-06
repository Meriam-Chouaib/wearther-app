import React from 'react'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import theme from '../../theme';
import { switchLanguage } from '../../utils/helpers/i18n.changeLanguage';


export const TranslationStyled = () => {
  return (
    <>
      <FormControl>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(event: SelectChangeEvent) => switchLanguage(event.target.value)}
          defaultValue={'fr'}
          variant='standard'
          sx={{color:theme.palette.primary.main}}
        >
          <MenuItem value={'en'}>
            English
          </MenuItem>
          <MenuItem value={'fr'}>
            Français
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
