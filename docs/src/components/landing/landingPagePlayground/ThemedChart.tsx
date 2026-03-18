import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { legendClasses } from '@mui/x-charts/ChartsLegend';

const COLORS = {
  green: '#4CAF50',
  purple: '#7B61FF',
  pink: '#E15759',
  orange: '#F28E2C',
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const foodAndDrink = [30, 25, 45, 20, 30, 25, 35];
const grocery = [25, 20, 35, 25, 20, 35, 25];
const shopping = [15, 10, 20, 10, 10, 15, 20];
const transport = [10, 15, 30, 15, 10, 40, 30];

export default function ThemedChart() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 420, height: 'fit-content' }}>
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={0.5}>
          <Typography variant="h6">Daily Expense</Typography>
          <Button variant="outlined" size="small" sx={{ textTransform: 'none', borderRadius: 2 }}>
            View Report
          </Button>
        </Stack>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Data from 1-12 Apr, 2024
        </Typography>
        <BarChart
          xAxis={[
            {
              data: days,
              scaleType: 'band',
              tickLabelStyle: {
                fontSize: 12,
              },
            },
          ]}
          yAxis={[{ position: 'none' }]}
          series={[
            {
              data: foodAndDrink,
              label: 'Food & Drink',
              stack: 'expenses',
              color: COLORS.green,
              labelMarkType: 'circle',
            },
            {
              data: grocery,
              label: 'Grocery',
              stack: 'expenses',
              color: COLORS.purple,
              labelMarkType: 'circle',
            },
            {
              data: shopping,
              label: 'Shopping',
              stack: 'expenses',
              color: COLORS.pink,
              labelMarkType: 'circle',
            },
            {
              data: transport,
              label: 'Transport',
              stack: 'expenses',
              color: COLORS.orange,
              labelMarkType: 'circle',
            },
          ]}
          height={280}
          margin={5}
          grid={{ horizontal: true }}
          borderRadius={4}
          slotProps={{
            legend: {
              direction: 'horizontal',
              position: {
                vertical: 'bottom',
                horizontal: 'center',
              },
              sx: {
                [`.${legendClasses.mark}`]: {
                  height: 10,
                  width: 10,
                },
              },
            },
          }}
          sx={{
            '& .MuiChartsGrid-horizontalLine': {
              stroke: (theme) => theme.palette.divider,
              strokeDasharray: '4 4',
            },
            '& .MuiChartsAxis-bottom .MuiChartsAxis-line': {
              display: 'none',
            },
            '& .MuiChartsAxis-bottom .MuiChartsAxis-tick': {
              display: 'none',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
