import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { LineChart, lineClasses } from '@mui/x-charts/LineChart';
import { legendClasses } from '@mui/x-charts/ChartsLegend';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const income = [220, 180, 340, 280, 410, 350, 300, 380, 420, 360, 450, 400];
const expenses = [280, 200, 310, 350, 320, 420, 370, 290, 340, 400, 380, 430];

export default function ShowcaseLineChart() {
  return (
    <Card variant="outlined" sx={{ width: '100%', height: 'fit-content' }}>
      <CardContent sx={{ p: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={1}
          spacing={2}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6">Yearly financial breakdown</Typography>
          </Stack>
          <Button variant="outlined" size="small" sx={{ textTransform: 'none', borderRadius: 2 }}>
            More
          </Button>
        </Stack>
        <LineChart
          xAxis={[
            {
              data: months,
              scaleType: 'point',
              tickLabelStyle: { fontSize: 12 },
              disableLine: true,
              disableTicks: true,
            },
          ]}
          yAxis={[{ position: 'none' }]}
          series={[
            {
              id: 'income',
              data: income,
              label: 'Income',
              color: '#7B61FF',
              curve: 'natural',
              showMark: false,
            },
            {
              id: 'expenses',
              data: expenses,
              label: 'Expenses',
              color: '#211f26',
              curve: 'natural',
              showMark: false,
            },
          ]}
          height={200}
          margin={5}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              direction: 'horizontal',
              position: {
                vertical: 'bottom',
                horizontal: 'center',
              },
            },
          }}
          sx={{
            [`& .${lineClasses.line}[data-series-id="expenses"]`]: {
              strokeDasharray: '8 6',
              strokeWidth: 1,
            },
            [`& .${lineClasses.line}[data-series-id="income"]`]: {
              strokeWidth: 1,
            },
            [`& .${legendClasses.mark}`]: {
              rx: 2,
            },
            '& .MuiChartsGrid-horizontalLine': {
              stroke: (theme) => theme.palette.divider,
              strokeDasharray: '4 4',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
