import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Head from 'docs/src/modules/components/Head';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import HeroBlock from 'docs/src/components/landing/hero/HeroBlock';
import TrustLogoCloudBlock from 'docs/src/components/landing/TrustLogoCloudBlock';
import StatsBar from 'docs/src/components/landing/StatsBar';
import PlatformSuiteBlock from 'docs/src/components/landing/PlatformSuiteBlock';
import AIExperienceBlock from 'docs/src/components/landing/AIExperienceBlock';
import AdvancedComponentsGridBlock from 'docs/src/components/landing/AdvancedComponentsGridBlock';
import FeatureGridBlock from 'docs/src/components/landing/FeatureGridBlock';
import FinalCTABlock from 'docs/src/components/landing/FinalCTABlock';
import { heroConfig, metaConfig } from 'docs/src/components/landing/configs/homepageConfig';
import DesignSystemBlock from 'docs/src/components/landing/DesignSystemBlock';

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head title={metaConfig.title} description={metaConfig.description} card={metaConfig.card}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MUI',
              url: 'https://mui.com/',
              logo: 'https://mui.com/static/logo.png',
              sameAs: [
                'https://x.com/MUI_hq',
                'https://github.com/mui/',
                'https://opencollective.com/mui-org',
              ],
            }),
          }}
        />
      </Head>
      <AppHeaderBanner />

      <Box
        sx={(theme) => ({
          position: 'relative',
          overflow: 'clip',
          '&::before': {
            margin: theme.spacing(2),
            borderRadius: 1,
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            height: { xs: 1000, md: 1750 },
            background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #C6DCFD 89.29%)`,
            ...theme.applyStyles('dark', {
              background: `linear-gradient(180deg, #0f1214 0%, #131c2d 89.29%)`,
            }),
            pointerEvents: 'none',
            zIndex: 0,
          },
        })}
      >
        <AppHeader />
        <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
          <HeroBlock
            headline={heroConfig.headline}
            gradientText={heroConfig.gradientText}
            headlineSuffix={heroConfig.headlineSuffix}
            description={heroConfig.description}
            ctas={heroConfig.ctas}
          />
          <TrustLogoCloudBlock />
          <Divider />
          <DesignSystemBlock />
          <Divider />
          <AdvancedComponentsGridBlock />
          <Divider />
          <PlatformSuiteBlock />
          <Divider />
          <AIExperienceBlock />
          <Divider />
          <FeatureGridBlock />
          <Divider />
          <StatsBar />
          <Divider />
          <FinalCTABlock
            tertiaryCta={{ label: 'Fast track with AI', href: 'https://chat.mui.com' }}
          />
          <Divider />
        </main>
      </Box>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
