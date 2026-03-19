import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ShowcaseBarChart from './ShowcaseBarChart';
import ShowcaseCard from './ShowcaseCard';
import ShowcaseDataGrid from './ShowcaseDataGrid';
import ShowcaseAIChat from './ShowcaseAIChat';
import ShowcaseLineChart from './ShowcaseLineChart';
import { getShowcaseTheme } from './theme';

export default function ComponentShowcase() {
  const theme = getShowcaseTheme('light');

  return (
    <ThemeProvider theme={theme}>
      {/* Desktop: display:contents so children participate in parent grid */}
      <Box
        sx={{
          display: { xs: 'none', md: 'contents' },
        }}
      >
        {/* BarChart: row 2&3, column 1 */}
        <Box
          sx={{
            gridColumn: '1',
            gridRow: '2 / 4',
            minWidth: 0,
            alignSelf: 'end',
          }}
        >
          <ShowcaseBarChart />
        </Box>

        {/* Card: row 4, column 1 */}
        <Box
          sx={{
            gridColumn: '1',
            gridRow: '4',
            minWidth: 0,
          }}
        >
          <ShowcaseCard />
        </Box>

        {/* DataGrid: row 3&4, column 2 */}
        <Box
          sx={{
            gridColumn: '2',
            gridRow: '3 / 5',
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              // Scale down visually but expand width to fill the cell
              // 1/0.9 ≈ 111.11% so the scaled result matches the container width
              width: `${100 / 0.9}%`,
              marginLeft: `${((100 / 0.9 - 100) / 2) * -1}%`,
              transform: 'scale(0.9)',
              transformOrigin: 'top center',
            }}
          >
            <ShowcaseDataGrid />
          </Box>
        </Box>

        {/* AIChat: row 2&3, column 3 */}
        <Box
          sx={{
            gridColumn: '3',
            gridRow: '2 / 4',
            minWidth: 0,
            alignSelf: 'end',
          }}
        >
          <ShowcaseAIChat />
        </Box>

        {/* LineChart: row 4, column 3 */}
        <Box
          sx={{
            gridColumn: '3',
            gridRow: '4',
            minWidth: 0,
          }}
        >
          <ShowcaseLineChart />
        </Box>
      </Box>

      {/* Mobile placeholder: below md */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          width: '100%',
        }}
      >
        <Box
          sx={(muiTheme) => ({
            width: '100%',
            height: 300,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${muiTheme.palette.grey[100]} 0%, ${muiTheme.palette.grey[200]} 100%)`,
          })}
        />
      </Box>
    </ThemeProvider>
  );
}
