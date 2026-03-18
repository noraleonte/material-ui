import * as React from 'react';
import Box from '@mui/material/Box';
import { SchedulerEvent } from '@mui/x-scheduler/models';
import { StandaloneMonthView } from '@mui/x-scheduler/month-view';
import {
  initialEvents,
  defaultVisibleDate,
  resources,
} from 'docsx/data/scheduler/datasets/personal-agenda';

export default function ThemedScheduler() {
  const [events, setEvents] = React.useState<SchedulerEvent[]>(initialEvents);

  return (
    <Box sx={{ width: 1000, height: 500 }}>
      <StandaloneMonthView
        events={events}
        resources={resources}
        defaultVisibleDate={defaultVisibleDate}
        onEventsChange={setEvents}
      />
    </Box>
  );
}
