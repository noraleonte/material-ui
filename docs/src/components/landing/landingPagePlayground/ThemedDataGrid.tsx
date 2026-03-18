import * as React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { planColors } from './theme';

type PlanType = 'Community' | 'Pro' | 'Premium' | 'Suspended';

interface CompanyRow {
  id: number;
  companyName: string;
  companyUrl: string;
  avatarColor: string;
  avatarInitials: string;
  contactName: string;
  contactEmail: string;
  date: string;
  internalContact: string;
  plan: PlanType;
  progress: number;
}

const planStyleMap: Record<PlanType, { bg: string; color: string; border: string }> = {
  Community: planColors.community,
  Pro: planColors.pro,
  Premium: planColors.premium,
  Suspended: planColors.suspended,
};

const rows: CompanyRow[] = [
  {
    id: 1,
    companyName: 'ByteForge Innovations',
    companyUrl: 'www.byteforge.com',
    avatarColor: '#1976d2',
    avatarInitials: 'BF',
    contactName: 'Alex Johnson',
    contactEmail: 'alex.johnson@byteforge.com',
    date: 'Dec 12, 2019',
    internalContact: 'Aarav Thapa',
    plan: 'Community',
    progress: 85,
  },
  {
    id: 2,
    companyName: 'CyberNest Solutions',
    companyUrl: 'www.cybernest.com',
    avatarColor: '#f57c00',
    avatarInitials: 'CN',
    contactName: 'Sarah Chang',
    contactEmail: 'sarah.chang@cybernest.com',
    date: 'Sep 25, 2018',
    internalContact: 'Anika Rai',
    plan: 'Community',
    progress: 72,
  },
  {
    id: 3,
    companyName: 'NovaStream Systems',
    companyUrl: 'www.novas.com',
    avatarColor: '#7B61FF',
    avatarInitials: 'NS',
    contactName: 'Emily Rodriguez',
    contactEmail: 'emily.rodriguez@novas.com',
    date: 'Feb 4, 2017',
    internalContact: 'Kiran Lama',
    plan: 'Pro',
    progress: 30,
  },
  {
    id: 4,
    companyName: 'InfiniteByte Labs',
    companyUrl: 'www.infinitebyte.com',
    avatarColor: '#26a69a',
    avatarInitials: 'IB',
    contactName: 'Rachel Patel',
    contactEmail: 'rachel.patel@infinitebyte.com',
    date: 'Nov 18, 2019',
    internalContact: 'Alisha Sharma',
    plan: 'Premium',
    progress: 92,
  },
  {
    id: 5,
    companyName: 'NanoFusion Techworks',
    companyUrl: 'www.nanofusion.com',
    avatarColor: '#5c6bc0',
    avatarInitials: 'NF',
    contactName: 'Brian Walsh',
    contactEmail: 'brian.walsh@nanofusion.com',
    date: 'Apr 30, 2016',
    internalContact: 'Aarush Adhikari',
    plan: 'Pro',
    progress: 45,
  },
  {
    id: 6,
    companyName: 'TechVanta Dynamics',
    companyUrl: 'www.techvanta.com',
    avatarColor: '#ef6c00',
    avatarInitials: 'TV',
    contactName: 'Lily Morgan',
    contactEmail: 'lily.morgan@techvanta.com',
    date: 'Jul 9, 2018',
    internalContact: 'Maya Karki',
    plan: 'Premium',
    progress: 68,
  },
  {
    id: 7,
    companyName: 'CodePulse Innovations',
    companyUrl: 'www.codepulse.com',
    avatarColor: '#78909c',
    avatarInitials: 'CP',
    contactName: 'Adam Carter',
    contactEmail: 'adam.carter@codepulse.com',
    date: 'Oct 7, 2017',
    internalContact: 'Nischal Shrestha',
    plan: 'Suspended',
    progress: 12,
  },
  {
    id: 8,
    companyName: 'CyberNest Solutions',
    companyUrl: 'www.cybernest.com',
    avatarColor: '#f57c00',
    avatarInitials: 'CN',
    contactName: 'Sarah Chang',
    contactEmail: 'sarah.chang@cybernest.com',
    date: 'Sep 25, 2018',
    internalContact: 'Reema Acharya',
    plan: 'Pro',
    progress: 55,
  },
];

function renderName(params: GridRenderCellParams<CompanyRow>) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Avatar
        sx={{
          bgcolor: params.row.avatarColor,
          width: 36,
          height: 36,
          fontSize: 14,
        }}
      >
        {params.row.avatarInitials}
      </Avatar>
      <Stack>
        <Typography variant="body2" fontWeight={500}>
          {params.row.companyName}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {params.row.companyUrl}
        </Typography>
      </Stack>
    </Stack>
  );
}

function renderContact(params: GridRenderCellParams<CompanyRow>) {
  return (
    <Stack>
      <Typography variant="body2" fontWeight={500}>
        {params.row.contactName}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {params.row.contactEmail}
      </Typography>
    </Stack>
  );
}

function renderPlan(params: GridRenderCellParams<CompanyRow, PlanType>) {
  if (params.value == null) {
    return null;
  }
  const style = planStyleMap[params.value];
  return (
    <Chip
      label={params.value}
      size="small"
      variant="outlined"
      sx={{
        backgroundColor: style.bg,
        color: style.color,
        borderColor: style.border,
        fontWeight: 500,
      }}
    />
  );
}

function renderProgress(params: GridRenderCellParams<CompanyRow, number>) {
  if (params.value == null) {
    return null;
  }
  const value = params.value;
  let barColor = planColors.suspended.color;
  if (value >= 70) {
    barColor = '#2E7D32';
  } else if (value >= 40) {
    barColor = '#F28E2C';
  }

  return (
    <Stack spacing={0.5} sx={{ width: '100%', pr: 2 }}>
      <Typography variant="caption" color="text.secondary">
        {value}%
      </Typography>
      <Box sx={{ width: '100%' }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 6,
            borderRadius: 3,
            backgroundColor: (theme) => theme.palette.grey[100],
            '& .MuiLinearProgress-bar': {
              borderRadius: 3,
              backgroundColor: barColor,
            },
          }}
        />
      </Box>
    </Stack>
  );
}

function renderActions() {
  return (
    <IconButton size="small">
      <MoreHorizIcon />
    </IconButton>
  );
}

const columns: GridColDef<CompanyRow>[] = [
  {
    field: 'id',
    headerName: '#',
    width: 50,
    sortable: false,
  },
  {
    field: 'companyName',
    headerName: 'Name',
    width: 250,
    display: 'flex',
    renderCell: renderName,
  },
  {
    field: 'contactName',
    headerName: 'Contact/Admin',
    width: 250,
    display: 'flex',
    renderCell: renderContact,
  },
  {
    field: 'plan',
    headerName: 'Plan',
    width: 120,
    display: 'flex',
    renderCell: renderPlan,
  },
  {
    field: 'internalContact',
    headerName: 'Internal Contact/Support',
    width: 200,
  },
  {
    field: 'progress',
    headerName: 'Progress',
    width: 140,
    display: 'flex',
    renderCell: renderProgress,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 140,
  },
  {
    field: 'actions',
    headerName: '',
    width: 60,
    sortable: false,
    filterable: false,
    display: 'flex',
    renderCell: renderActions,
  },
];

export default function ThemedDataGrid() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      rowHeight={80}
      hideFooter
      sx={{
        borderColor: 'divider',
        borderRadius: 1,
        '& .MuiDataGrid-cell': {
          borderColor: 'divider',
        },
        '& .MuiDataGrid-columnHeaders': {
          borderColor: 'divider',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 600,
          color: 'text.secondary',
          fontSize: 13,
        },
      }}
    />
  );
}
