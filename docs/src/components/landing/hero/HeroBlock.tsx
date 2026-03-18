import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { alpha, keyframes, styled } from '@mui/material/styles';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import { premiumTokens, type ProductStatus } from 'docs/src/components/landing/marketingTheme';
import { Link } from '@mui/docs/Link';

const textShimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

interface HeroCta {
  label: string;
  href: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  startIcon?: React.ReactNode;
  badge?: ProductStatus;
}

interface HeroBlockProps {
  overline?: string;
  headline: React.ReactNode;
  gradientText?: string;
  headlineSuffix?: React.ReactNode;
  description: string;
  proofLine?: React.ReactNode;
  ctas: HeroCta[];
  badge?: ProductStatus;
}

const HeroRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(24),
    paddingBottom: theme.spacing(9.5),
    minHeight: 'calc(100vh - var(--MuiDocs-header-height) - 72px)',
    alignItems: 'flex-start',
  },
}));

const HeroOverline = styled(Chip)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  paddingInline: theme.spacing(1),
  paddingBlock: theme.spacing(0.5),
  borderRadius: premiumTokens.radius.pill,
  border: '1px solid',
  borderColor: alpha(theme.palette.primary[200], 0.65),
  backgroundColor: alpha(theme.palette.common.white, 0.42),
  backdropFilter: 'blur(12px)',
  fontWeight: 600,
  letterSpacing: 0.25,
  color: alpha(theme.palette.primary[900], 0.76),
  marginBottom: theme.spacing(2),
  ...theme.applyStyles('dark', {
    borderColor: alpha(theme.palette.primary[500], 0.18),
    backgroundColor: alpha(theme.palette.primary[500], 0.05),
    color: alpha(theme.palette.primary[100], 0.92),
  }),
}));

const HeroHeadline = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginInline: 'auto',
  fontWeight: 500,
  lineHeight: 1.02,
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    marginInline: 0,
    fontSize: '3.75rem',
  },
})) as typeof Typography;

const HeroDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  maxWidth: premiumTokens.hero.descriptionMaxWidth,
  marginInline: 'auto',
  fontSize: '1.0625rem',
  lineHeight: 1.65,
  [theme.breakpoints.up('md')]: {
    marginInline: 0,
    fontSize: '1.1875rem',
  },
})) as typeof Typography;

export default function HeroBlock({
  headline,
  gradientText,
  headlineSuffix,
  description,
  ctas,
  badge,
}: HeroBlockProps) {
  return (
    <HeroRoot>
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 5, md: 3 },
        }}
      >
        {badge && (
          <Box sx={{ mb: 2, display: 'inline-flex' }}>
            <StatusBadge status={badge} size="medium" />
          </Box>
        )}
        {/* {overline && <HeroOverline label={overline} />} */}
        <HeroHeadline component="h1" variant="h1">
          {headline}
          {gradientText && (
            <GradientText
              sx={{
                backgroundSize: '200% auto',
                display: 'inline-block',
                fontWeight: 500,
                animation: `${textShimmer} 4s linear infinite`,
                '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
              }}
            >
              {gradientText}
            </GradientText>
          )}
          {headlineSuffix && <React.Fragment> {headlineSuffix}</React.Fragment>}
        </HeroHeadline>
        <HeroDescription color="text.secondary">{description}</HeroDescription>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          useFlexGap
          sx={{
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: { xs: 'stretch', sm: 'center' },
          }}
        >
          {ctas.map((cta) => (
            <Button
              key={cta.label}
              component={Link}
              noLinkStyle
              href={cta.href}
              variant={cta.variant || 'contained'}
              color={cta.color || 'primary'}
              size="large"
              startIcon={cta.startIcon}
              endIcon={
                cta.variant === 'contained' || cta.variant === 'outlined' ? (
                  <KeyboardArrowRightRounded />
                ) : undefined
              }
            >
              {cta.label}
              {cta.badge && (
                <Box component="span" sx={{ ml: 1 }}>
                  <StatusBadge status={cta.badge} />
                </Box>
              )}
            </Button>
          ))}
        </Stack>
      </Container>
    </HeroRoot>
  );
}
