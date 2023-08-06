import { Box, Stack, styled } from '@mui/material';
import theme from '../../theme';
export const StackCard = styled(Stack)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
export const StackAuth = styled(Stack)(() => ({
    padding: '2rem 3rem',
    marginBottom: '21px',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: `1px 1px 8px -2.5px ${theme.palette.grey[700]}`,
}))

export const BoxAuth = styled(Box)(({ theme }) => ({
    width:'33%',
    [theme.breakpoints.down('lg')]: {
        width:'35%',
    },
    [theme.breakpoints.down('md')]: {
        width:'60%',
    },
    [theme.breakpoints.down('sm')]: {
        width:'80%',
    },
  }));