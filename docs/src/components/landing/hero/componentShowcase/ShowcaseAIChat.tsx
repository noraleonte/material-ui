import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SendIcon from '@mui/icons-material/Send';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function UserMessage({ text }: { text: string }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Box
        sx={{
          bgcolor: 'grey.100',
          borderRadius: 2,
          px: 2,
          py: 1.5,
          maxWidth: '85%',
        }}
      >
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Box>
  );
}

function AIMessage({ text }: { text: string }) {
  return (
    <Stack direction="row" spacing={1} alignItems="flex-start">
      <AutoAwesomeIcon sx={{ fontSize: 18, color: '#1565C0', mt: 0.5 }} />
      <Box
        sx={{
          bgcolor: 'grey.50',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          px: 2,
          py: 1.5,
          maxWidth: '85%',
        }}
      >
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Stack>
  );
}

function TypingIndicator() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <AutoAwesomeIcon sx={{ fontSize: 18, color: '#1565C0' }} />
      <Stack direction="row" spacing={0.5}>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'grey.400',
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default function ShowcaseAIChat() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        height: '400px',
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        mt: 12,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          gap: 2.5,
          flex: 1,
        }}
      >
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <SmartToyOutlinedIcon sx={{ fontSize: 22, color: '#1565C0' }} />
            <Typography variant="subtitle1" fontWeight={500}>
              AI Assistant
            </Typography>
          </Stack>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              fontSize: 12,
              fontWeight: 600,
              bgcolor: 'transparent',
              border: '2px solid',
              borderColor: '#1565C0',
              color: '#1565C0',
            }}
          >
            AI
          </Avatar>
        </Stack>

        {/* Messages */}
        <Stack spacing={2} sx={{ flex: 1 }}>
          <UserMessage text="Pivot by commodity and aggregate totals" />
          <AIMessage text="Grouped by commodity with sum, avg, and max aggregations." />
          <TypingIndicator />
        </Stack>

        {/* Input */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderTop: 1,
            borderColor: 'divider',
            pt: 2,
          }}
        >
          <InputBase
            placeholder="Ask about any component..."
            sx={{ flex: 1, fontSize: 14 }}
            readOnly
          />
          <IconButton size="small" sx={{ color: '#1976d2' }}>
            <SendIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
