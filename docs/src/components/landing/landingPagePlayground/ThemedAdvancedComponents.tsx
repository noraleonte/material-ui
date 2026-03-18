import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import ThemedCard from './ThemedCard';
import ThemedChart from './ThemedChart';
import ThemedLineChart from './ThemedLineChart';
import ThemedImageCard from './ThemedImageCard';
import ThemedScheduler from './ThemedScheduler';
import ThemedDataGrid from './ThemedDataGrid';
import ThemedAIChat from './ThemedAIChat';
import { getLandingPageTheme } from './theme';

export default function ThemedAdvancedComponents() {
  const theme = getLandingPageTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" flexWrap="wrap" spacing={3}>
        <ThemedCard />
        <ThemedImageCard />
        <ThemedChart />
        <ThemedLineChart />
        <ThemedScheduler />
        <ThemedDataGrid />
        <ThemedAIChat />
      </Stack>
    </ThemeProvider>
  );
}
