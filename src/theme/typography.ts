import { TypographyOptions } from '@mui/material/styles/createTypography';

import { COLORS } from '../config/colors';
import { FONT } from '../config/font';
export const typography: TypographyOptions = {
  h1: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: COLORS.PRIMARY.DARK,
    fontFamily: FONT,
    marginBottom: '2rem',
    letterSpacing: '2px',
  },
  h2: {
    fontSize: '20px',
    color: COLORS.PRIMARY.DARK,
    fontFamily: FONT,
  },
  h3: {
    fontSize: '18px',
    fontWeight: '600',
    color: COLORS.PRIMARY.DARK,
    fontFamily: FONT,
  },
  h4: { fontFamily: FONT, fontSize: '35px', letterSpacing: '2px' },
  h5: {
    fontSize: '14px',
    fontWeight: '700',
    color: COLORS.PRIMARY.DARK,
    paddingRight: '1rem',
  },
  h6: {
    fontSize: '15px',
    textAlign: 'center',

    fontWeight: 'normal',
    color: COLORS.WARNING.DARK,
    fontFamily: FONT,
  },

 
};
