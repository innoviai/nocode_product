import React, { useState } from 'react';
import {
  Home as HomeIcon,
  Add as PlusIcon,
  Settings as CogIcon,
  Description as DocumentTextIcon,
  Help as QuestionMarkCircleIcon,
  AccountCircle as UserIcon,
  Build as BuildIcon,
  DataUsage as DataUsageIcon,
  //Integration as IntegrationIcon,
  BarChart as UsageStatsIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  CloudUpload as CloudUploadIcon,
  Close as CloseIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Chip,
  Badge,
  Collapse,
  Divider,
  Paper,
  Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 260,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 260,
    boxSizing: 'border-box',
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#fafafa',
  },
}));

const StyledListItem = styled(ListItem)<{ active?: boolean }>(({ theme, active }) => ({
  borderRadius: theme.spacing(1),
  margin: theme.spacing(0.5, 1),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  ...(active && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.contrastText,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
}));

const UploadCard = styled(Card)(({ theme }) => ({
  border: `2px dashed ${theme.palette.divider}`,
  backgroundColor: 'transparent',
  minHeight: 400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

const AddDataPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [extractDataExpanded, setExtractDataExpanded] = useState(true);
  const [buildExpanded, setBuildExpanded] = useState(false);
  const [settingsExpanded, setSettingsExpanded] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'grey.50' }}>
      {/* Sidebar */}
      <StyledDrawer variant="permanent" anchor="left">
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Logo */}
          <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 1
                }}
              >
                <Typography variant="caption" sx={{ color: 'white', fontWeight: 'bold' }}>
                  N
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                Nanonets
              </Typography>
            </Box>
          </Box>

          {/* Navigation */}
          <List sx={{ flexGrow: 1, py: 1 }}>
            <StyledListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="My Models" />
            </StyledListItem>
            
            <StyledListItem button>
              <ListItemIcon><PlusIcon /></ListItemIcon>
              <ListItemText primary="New Model" />
            </StyledListItem>
            
            {/*
            <StyledListItem button>
              <ListItemIcon><IntegrationIcon /></ListItemIcon>
              <ListItemText primary="External Integrations" />
            </StyledListItem>
            */}
            
            <StyledListItem button>
              <ListItemIcon><DataUsageIcon /></ListItemIcon>
              <ListItemText primary="Active Model" />
            </StyledListItem>

            <Divider sx={{ my: 1 }} />

            {/* BUILD Section */}
            <StyledListItem button onClick={() => setBuildExpanded(!buildExpanded)}>
              <ListItemIcon><BuildIcon /></ListItemIcon>
              <ListItemText primary="BUILD" />
              {buildExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </StyledListItem>
            <Collapse in={buildExpanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* Add BUILD sub-items here if needed */}
              </List>
            </Collapse>

            {/* EXTRACT DATA Section */}
            <StyledListItem button onClick={() => setExtractDataExpanded(!extractDataExpanded)}>
              <ListItemIcon><DocumentTextIcon /></ListItemIcon>
              <ListItemText primary="EXTRACT DATA" />
              {extractDataExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </StyledListItem>
            <Collapse in={extractDataExpanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <StyledListItem button active sx={{ pl: 4 }}>
                  <ListItemText primary="Extract Data" />
                </StyledListItem>
                <StyledListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Integrate" />
                </StyledListItem>
                <StyledListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Usage Stats" />
                </StyledListItem>
              </List>
            </Collapse>

            {/* SETTINGS Section */}
            <StyledListItem button onClick={() => setSettingsExpanded(!settingsExpanded)}>
              <ListItemIcon><CogIcon /></ListItemIcon>
              <ListItemText primary="SETTINGS" />
              {settingsExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </StyledListItem>
            <Collapse in={settingsExpanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* Add SETTINGS sub-items here if needed */}
              </List>
            </Collapse>

            <Divider sx={{ my: 1 }} />

            <StyledListItem button>
              <ListItemIcon>
                <Badge badgeContent="3" color="error">
                  <Box sx={{ width: 20, height: 20 }} />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="What's new" />
            </StyledListItem>
            
            <StyledListItem button>
              <ListItemIcon><DocumentTextIcon /></ListItemIcon>
              <ListItemText primary="Documentation" />
            </StyledListItem>
            
            <StyledListItem button>
              <ListItemIcon><QuestionMarkCircleIcon /></ListItemIcon>
              <ListItemText primary="Support Requests" />
            </StyledListItem>
            
            <StyledListItem button>
              <ListItemIcon><QuestionMarkCircleIcon /></ListItemIcon>
              <ListItemText primary="Help" />
            </StyledListItem>
          </List>
        </Box>
      </StyledDrawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Banner */}
        <Box sx={{ bgcolor: 'info.light', px: 2, py: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: 'info.contrastText' }}>
            99 pages remaining for this month. Upgrade to Pro and process more files. 
            <Button size="small" sx={{ ml: 1, color: 'primary.main' }}>Try Pro for free</Button>
          </Typography>
          <Typography variant="body2" sx={{ color: 'info.contrastText' }}>
            Have questions? 
            <Button size="small" sx={{ ml: 1, color: 'primary.main' }}>Request a demo</Button>
          </Typography>
        </Box>

        {/* Header */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', borderBottom: 1, borderColor: 'divider' }}>
          <Toolbar sx={{ px: 3 }}>
            <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 600, mr: 2 }}>
              Extract data
            </Typography>
            <Button
              startIcon={<CogIcon />}
              variant="outlined"
              size="small"
              sx={{ mr: 'auto' }}
            >
              Model settings
            </Button>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TextField
                placeholder="Search"
                size="small"
                sx={{ width: 200 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                startIcon={<FilterListIcon />}
                variant="outlined"
                size="small"
              >
                Filter By
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white' }}>
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ px: 3 }}>
            <Tab label="All Files (0)" />
            <Tab label="Verified (0)" />
            <Tab label="Not Verified (0)" />
          </Tabs>
        </Box>

        {/* Filters */}
        <Box sx={{ p: 3, bgcolor: 'white', borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Filters:
            </Typography>
            <Chip
              label="From: 09/09/2021 To: 10/09/2021"
              onDelete={() => {}}
              deleteIcon={<CloseIcon />}
              variant="outlined"
              size="small"
            />
          </Box>
        </Box>

        {/* Main Content Area */}
        <Box sx={{ flexGrow: 1, p: 3, bgcolor: 'grey.50' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <UploadCard elevation={0}>
                <CardContent sx={{ textAlign: 'center', py: 6 }}>
                  <Box sx={{ mb: 3 }}>
                    <CloudUploadIcon sx={{ fontSize: 80, color: 'primary.main', opacity: 0.7 }} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                    This model is ready to extract data!
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                    Drag and drop or click to add files you want to process
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlusIcon />}
                    sx={{ px: 4, py: 1.5 }}
                  >
                    Upload files
                  </Button>
                </CardContent>
              </UploadCard>
            </Grid>
          </Grid>
        </Box>

        {/* Security Notice */}
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'success.50', borderTop: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <SecurityIcon sx={{ color: 'success.main', fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Your data security comes first – your data is not used for anything except training your model.
              <Button size="small" sx={{ ml: 1, p: 0, minWidth: 'auto' }}>
                Read more.
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddDataPage;