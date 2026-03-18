import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

const ComponentHeroRoot = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(6),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '200%',
    height: '100%',
    background: `radial-gradient(ellipse 50% 70% at 50% 0%, ${alpha(
      theme.palette.primary[50],
      0.4,
    )} 0%, transparent 70%)`,
    pointerEvents: 'none',
    ...theme.applyDarkStyles({
      background: `radial-gradient(ellipse 50% 70% at 50% 0%, ${alpha(
        theme.palette.primary[900],
        0.25,
      )} 0%, transparent 70%)`,
    }),
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(10),
  },
})) as typeof Box;

export default ComponentHeroRoot;
