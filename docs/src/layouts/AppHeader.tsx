import { styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoWithCopyMenu from 'docs/src/components/action/LogoWithCopyMenu';
import HeaderNavBar from 'docs/src/components/header/HeaderNavBar';
import HeaderNavDropdown from 'docs/src/components/header/HeaderNavDropdown';
import ThemeModeToggle from 'docs/src/components/header/ThemeModeToggle';
import DeferredAppSearch from 'docs/src/modules/components/DeferredAppSearch';
import { useTranslate } from '@mui/docs/i18n';

const Header = styled('header')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  transition: theme.transitions.create('top'),
  zIndex: theme.zIndex.appBar,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backdropFilter: 'blur(2px)',
    maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
    zIndex: -1,
    pointerEvents: 'none',
  },
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
    backgroundColor: (theme.vars || theme).palette.background.paper,
  },
}));

const HEIGHT = 60;

interface AppHeaderProps {
  gitHubRepository?: string;
}

export default function AppHeader(props: AppHeaderProps) {
  const { gitHubRepository = 'https://github.com/mui' } = props;
  const t = useTranslate();

  return (
    <Header>
      <GlobalStyles
        styles={{
          ':root': {
            '--MuiDocs-header-height': `${HEIGHT}px`,
          },
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: HEIGHT,
          py: 2,
        }}
      >
        <Box
          sx={{
            minWidth: 240,
            '@media (max-width: 1099px)': {
              minWidth: 114,
            },
          }}
        >
          <LogoWithCopyMenu />
        </Box>
        <HeaderNavBar />
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <ThemeModeToggle />
          <Tooltip title={t('appFrame.github')} enterDelay={300}>
            <IconButton
              component="a"
              color="primary"
              size="small"
              href={gitHubRepository}
              target="_blank"
              rel="noopener"
              data-ga-event-category="header"
              data-ga-event-action="github"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <DeferredAppSearch
            sx={{
              '@media (max-width: 1099px)': {
                minWidth: 32,
                width: 32,
                height: 32,
                padding: 0,
                justifyContent: 'center',
                '& > *:not(.MuiSvgIcon-root)': {
                  display: 'none',
                },
              },
            }}
          />
          <Box sx={{ display: { md: 'none' } }}>
            <HeaderNavDropdown />
          </Box>
        </Stack>
      </Container>
    </Header>
  );
}
