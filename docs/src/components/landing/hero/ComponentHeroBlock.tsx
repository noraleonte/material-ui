import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import { type ProductStatus } from 'docs/src/components/landing/marketingTheme';
import { Link } from '@mui/docs/Link';
import ComponentHeroRoot from './ComponentHeroRoot';

interface ComponentHeroCta {
  label: string;
  href: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
}

interface ComponentHeroBlockProps {
  title: string;
  gradientText?: string;
  description: string;
  status?: ProductStatus;
  ctas: ComponentHeroCta[];
}

export default function ComponentHeroBlock({
  title,
  gradientText,
  description,
  status,
  ctas,
}: ComponentHeroBlockProps) {
  return (
    <ComponentHeroRoot>
      <Container
        sx={{
          position: 'relative',
          textAlign: 'center',
          maxWidth: 720,
        }}
      >
        {status && (
          <Box sx={{ mb: 2, display: 'inline-flex' }}>
            <StatusBadge status={status} size="medium" />
          </Box>
        )}
        <Typography variant="h1" sx={{ mb: 2 }}>
          {title}
          {gradientText && (
            <React.Fragment>
              {' '}
              <GradientText>{gradientText}</GradientText>
            </React.Fragment>
          )}
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            mb: 4,
            maxWidth: 560,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          useFlexGap
          sx={{ justifyContent: 'center' }}
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
              endIcon={cta.variant !== 'text' ? <KeyboardArrowRightRounded /> : undefined}
            >
              {cta.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </ComponentHeroRoot>
  );
}
