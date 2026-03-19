import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { keyframes, styled } from '@mui/material/styles';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import { premiumTokens, type ProductStatus } from 'docs/src/components/landing/marketingTheme';
import { Link } from '@mui/docs/Link';
import ComponentShowcase from './componentShowcase/ComponentShowcase';

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
  headline: React.ReactNode;
  gradientText?: string;
  headlineSuffix?: React.ReactNode;
  description: string;
  ctas: HeroCta[];
  badge?: ProductStatus;
}

const HeroRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'visible',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(12),
    alignItems: 'flex-start',
  },
}));

const HeroHeadline = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginInline: 'auto',
  fontWeight: 500,
  lineHeight: 1.02,
  textAlign: 'center',
  maxWidth: 900,
  [theme.breakpoints.up('md')]: {
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
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 1,
          display: { xs: 'flex', md: 'grid' },
          // Mobile: flex column
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'start' },
          gap: { xs: 5, md: 3 },
          px: { xs: 2, md: 8 },
          maxWidth: '1800px',
          gridTemplateColumns: { md: '1fr 2.5fr 1fr' },
          gridTemplateRows: { md: 'auto auto auto auto' },
        }}
      >
        {/* Row 1: Title spanning all 3 columns */}
        {badge && (
          <Box
            sx={{
              mb: 2,
              display: 'inline-flex',
              justifyContent: 'center',
              gridColumn: { md: '1 / -1' },
            }}
          >
            <StatusBadge status={badge} size="medium" />
          </Box>
        )}
        <Box
          sx={{
            gridColumn: { md: '1 / -1' },
            gridRow: { md: '1' },
          }}
        >
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
        </Box>

        {/* Row 2, Column 2: Description + CTAs */}
        <Stack
          direction="column"
          spacing={3}
          useFlexGap
          alignItems="center"
          sx={{
            gridColumn: { md: '2' },
            gridRow: { md: '2' },
            mb: { xs: 2, md: 6 },
          }}
        >
          <HeroDescription color="text.secondary">{description}</HeroDescription>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            useFlexGap
            sx={{
              justifyContent: 'center',
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
        </Stack>

        {/* Component showcase: subgrid on md+, placeholder on mobile */}
        <ComponentShowcase />
      </Container>
    </HeroRoot>
  );
}
