import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LinkIcon from '@mui/icons-material/Link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function ShowcaseCard() {
  return (
    <Card variant="outlined" sx={{ width: '100%', height: 'fit-content', borderRadius: 1 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 3 }}>
        <Typography variant="h6">Material UI Card component</Typography>
        <Typography variant="body2" color="text.secondary">
          A versatile surface for grouping related content and actions in your UI.
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Chip
            label="Development"
            size="small"
            sx={{
              backgroundColor: 'rgba(101, 84, 192, 0.1)',
              color: '#6554C0',
              fontWeight: 500,
            }}
          />
          <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
        </Stack>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pt: 1,
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <ChatBubbleOutlineIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                8
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <LinkIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                3
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <CalendarTodayIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              Tomorrow
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
