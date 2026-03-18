import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {
  motionTransition,
  premiumTokens,
} from 'docs/src/components/landing/marketingTheme';

const HeroCtaButton = styled(Button)(({ theme }) => ({
  minHeight: 48,
  paddingInline: theme.spacing(2.25),
  borderRadius: premiumTokens.radius.pill,
  fontWeight: 700,
  whiteSpace: 'nowrap',
  transition: motionTransition(
    ['transform', 'box-shadow', 'background-color', 'border-color', 'color'],
    'base',
  ),
  '&:hover': {
    transform: 'translateY(-2px)',
  },
  variants: [
    {
      props: { variant: 'contained' },
      style: {
        boxShadow: `0 14px 30px ${alpha(theme.palette.primary[500], 0.22)}`,
        ...theme.applyStyles('dark', {
          boxShadow: `0 14px 30px ${alpha(theme.palette.primary[900], 0.5)}`,
        }),
      },
    },
    {
      props: { variant: 'outlined' },
      style: {
        borderWidth: 1,
        borderColor: alpha(theme.palette.primary[200], 0.95),
        backgroundColor: alpha(theme.palette.common.white, 0.72),
        ...theme.applyStyles('dark', {
          borderColor: alpha(theme.palette.primary[300], 0.2),
          backgroundColor: alpha(theme.palette.common.white, 0.02),
        }),
      },
    },
  ],
})) as typeof Button;

export default HeroCtaButton;
