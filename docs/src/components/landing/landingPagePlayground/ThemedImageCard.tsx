import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LinkIcon from '@mui/icons-material/Link';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function ThemedImageCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 380, height: 'fit-content', borderRadius: 1 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 3 }}>
        <Typography variant="h6">Dashboard Design</Typography>
        <Typography variant="body2" color="text.secondary">
          A versatile surface for grouping related content and actions in your UI.
        </Typography>
        <CardMedia
          component="img"
          image="/static/x/images/image.png"
          alt="Dashboard design preview"
          sx={{
            borderRadius: 1,
            height: 200,
            objectFit: 'cover',
            bgcolor: 'grey.100',
            border: '1px solid',
            borderColor: 'divider',
          }}
        />
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Chip
            label="UI Design"
            size="small"
            sx={{
              backgroundColor: 'rgba(101, 84, 192, 0.1)',
              color: '#6554C0',
              fontWeight: 500,
            }}
          />
          <AvatarGroup max={3}>
            <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 36, height: 36 }} />
            <Avatar src="/static/images/avatar/2.jpg" sx={{ width: 36, height: 36 }} />
          </AvatarGroup>
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
                5
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <LinkIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                1
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography variant="body2" color="primary">
              2
            </Typography>
            <ThumbUpIcon sx={{ fontSize: 18, color: 'primary.main' }} />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
