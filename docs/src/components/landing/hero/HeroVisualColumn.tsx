import { styled } from '@mui/material/styles';
import { motionTransition } from 'docs/src/components/landing/marketingTheme';

const HeroVisualColumn = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  width: '100%',
  willChange: 'transform',
  transition: motionTransition('transform', 'fast'),
  '@media (prefers-reduced-motion: reduce)': {
    transform: 'none',
    transition: 'none',
  },
  [theme.breakpoints.up('md')]: {
    flex: '0 0 58%',
    maxWidth: '58%',
    marginLeft: 0,
  },
}));

export default HeroVisualColumn;
