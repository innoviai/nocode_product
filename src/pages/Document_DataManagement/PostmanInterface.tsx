import React, { useState } from 'react';
import {
  Add as AddIcon,
  ImportExport as ImportIcon,
  PlayArrow as RunnerIcon,
  Search as SearchIcon,
  Folder as FolderIcon,
  History as HistoryIcon,
  Help as HelpIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Group as GroupIcon,
  ExpandMore as ExpandMoreIcon,
  Send as SendIcon,
  Save as SaveIcon,
  MoreHoriz as MoreIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  TextField,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Paper,
  Divider,
  Chip,
  Card,
  CardContent,
  MenuList,
  ListItemButton,
  Badge,
  ButtonGroup,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 280,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 280,
    boxSizing: 'border-box',
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#f8f9fa',
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#4a4a4a',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const URLTab = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 1),
  backgroundColor: 'white',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '4px 4px 0 0',
  marginRight: theme.spacing(0.5),
  minWidth: 150,
  fontSize: '0.875rem',
}));

const PostmanInterface: React.FC = () => {
  const [sidebarTab, setSidebarTab] = useState(1); // 0 = History, 1 = Collections
  const [requestTab, setRequestTab] = useState(0); // Authorization tab
  const [httpMethod, setHttpMethod] = useState('POST');
  const [environment, setEnvironment] = useState('No Environment');

  const handleSidebarTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSidebarTab(newValue);
  };

  const handleRequestTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setRequestTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'grey.50' }}>
      {/* Sidebar */}
      <StyledDrawer variant="permanent" anchor="left">
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Search Filter */}
          <Box sx={{ p: 2 }}>
            <TextField
              placeholder="Filter"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />,
              }}
            />
          </Box>

          {/* History/Collections Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={sidebarTab} onChange={handleSidebarTabChange} variant="fullWidth">
              <Tab label="History" />
              <Tab label="Collections" />
            </Tabs>
          </Box>

          {/* Filter Options */}
          <Box sx={{ p: 1, display: 'flex', gap: 1 }}>
            <Button size="small" variant="text" startIcon={<PersonIcon />}>All</Button>
            <Button size="small" variant="text">Me</Button>
            <Button size="small" variant="text" startIcon={<GroupIcon />}>Team</Button>
            <IconButton size="small">
              <MoreIcon />
            </IconButton>
          </Box>

          {/* Collections List */}
          <List sx={{ flexGrow: 1, px: 1 }}>
            <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
              <ListItemIcon>
                <FolderIcon sx={{ color: 'orange.main' }} />
              </ListItemIcon>
              <ListItemText 
                primary="musicbot" 
                secondary="2 requests"
                primaryTypographyProps={{ fontSize: '0.875rem' }}
                secondaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </ListItemButton>
            <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
              <ListItemIcon>
                <FolderIcon sx={{ color: 'orange.main' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Postman Echo" 
                secondary="37 requests"
                primaryTypographyProps={{ fontSize: '0.875rem' }}
                secondaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </ListItemButton>
          </List>
        </Box>
      </StyledDrawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Menu Bar */}
        <Box sx={{ bgcolor: 'white', borderBottom: 1, borderColor: 'divider', px: 2, py: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2">File</Typography>
            <Typography variant="body2">Edit</Typography>
            <Typography variant="body2">View</Typography>
            <Typography variant="body2">Collection</Typography>
            <Typography variant="body2">History</Typography>
            <Typography variant="body2">Help</Typography>
          </Box>
        </Box>

        {/* Toolbar */}
        <StyledAppBar position="static">
          <Toolbar sx={{ minHeight: '48px !important', px: 2 }}>
            <ButtonGroup variant="contained" sx={{ mr: 2 }}>
              <Button startIcon={<AddIcon />} sx={{ bgcolor: 'orange.main', '&:hover': { bgcolor: 'orange.dark' } }}>
                New
              </Button>
              <Button sx={{ bgcolor: 'orange.main', '&:hover': { bgcolor: 'orange.dark' } }}>
                <ExpandMoreIcon />
              </Button>
            </ButtonGroup>
            
            <Button variant="outlined" startIcon={<ImportIcon />} sx={{ mr: 2, color: 'white', borderColor: 'white' }}>
              Import
            </Button>
            
            <Button variant="outlined" startIcon={<RunnerIcon />} sx={{ mr: 4, color: 'white', borderColor: 'white' }}>
              Runner
            </Button>

            <Box sx={{ display: 'flex', gap: 2, mr: 'auto' }}>
              <Button variant="text" sx={{ color: 'orange.main', borderBottom: '2px solid', borderColor: 'orange.main' }}>
                Builder
              </Button>
              <Button variant="text" sx={{ color: 'white' }}>
                Team Library
              </Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton sx={{ color: 'white' }}><SettingsIcon /></IconButton>
              <IconButton sx={{ color: 'white' }}><HelpIcon /></IconButton>
              <IconButton sx={{ color: 'white' }}><PersonIcon /></IconButton>
            </Box>
          </Toolbar>
        </StyledAppBar>

        {/* URL Tabs */}
        <Box sx={{ bgcolor: 'grey.100', px: 2, py: 1, display: 'flex', alignItems: 'center' }}>
          <URLTab>
            <Typography variant="body2" sx={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              https://host123d1qn.do
            </Typography>
            <IconButton size="small">×</IconButton>
          </URLTab>
          <URLTab>
            <Typography variant="body2" sx={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              https://gdata.you
            </Typography>
            <Box sx={{ width: 8, height: 8, bgcolor: 'orange.main', borderRadius: '50%', mr: 1 }} />
            <IconButton size="small">×</IconButton>
          </URLTab>
          <URLTab>
            <Typography variant="body2" sx={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              http://api.listenvic
            </Typography>
            <Box sx={{ width: 8, height: 8, bgcolor: 'orange.main', borderRadius: '50%', mr: 1 }} />
            <IconButton size="small">×</IconButton>
          </URLTab>
          <URLTab>
            <Typography variant="body2" sx={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              http://api.listenvic
            </Typography>
            <Box sx={{ width: 8, height: 8, bgcolor: 'orange.main', borderRadius: '50%', mr: 1 }} />
            <IconButton size="small">×</IconButton>
          </URLTab>
          <URLTab>
            <Typography variant="body2" sx={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              http://localhost:30
            </Typography>
            <Box sx={{ width: 8, height: 8, bgcolor: 'orange.main', borderRadius: '50%', mr: 1 }} />
            <IconButton size="small">×</IconButton>
          </URLTab>
          <IconButton size="small">
            <AddIcon />
          </IconButton>
        </Box>

        {/* Request Section */}
        <Box sx={{ bgcolor: 'white', p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <FormControl size="small" sx={{ minWidth: 100 }}>
              <Select value={httpMethod} onChange={(e) => setHttpMethod(e.target.value)}>
                <MenuItem value="GET">GET</MenuItem>
                <MenuItem value="POST">POST</MenuItem>
                <MenuItem value="PUT">PUT</MenuItem>
                <MenuItem value="DELETE">DELETE</MenuItem>
              </Select>
            </FormControl>
            
            <TextField
              fullWidth
              size="small"
              value="http://localhost:3000/"
              sx={{ flexGrow: 1 }}
            />
            
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select value={environment} onChange={(e) => setEnvironment(e.target.value)}>
                <MenuItem value="No Environment">No Environment</MenuItem>
              </Select>
            </FormControl>
            
            <Button variant="text">Params</Button>
            <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
            <Button variant="outlined" startIcon={<SaveIcon />}>Save</Button>
          </Box>

          {/* Request Tabs */}
          <Tabs value={requestTab} onChange={handleRequestTabChange}>
            <Tab label="Authorization" />
            <Tab label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                Headers
                <Chip label="1" size="small" />
              </Box>
            } />
            <Tab label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                Body
                <Box sx={{ width: 8, height: 8, bgcolor: 'primary.main', borderRadius: '50%' }} />
              </Box>
            } />
            <Tab label="Pre-request Script" />
            <Tab label="Tests" />
          </Tabs>
        </Box>

        {/* Request Content */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ bgcolor: 'white', p: 3, borderBottom: 1, borderColor: 'divider' }}>
            {requestTab === 0 && (
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                  TYPE
                </Typography>
                <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                  <Select value="inherit" displayEmpty>
                    <MenuItem value="inherit">Inherit auth from parent</MenuItem>
                    <MenuItem value="none">No Auth</MenuItem>
                    <MenuItem value="bearer">Bearer Token</MenuItem>
                    <MenuItem value="basic">Basic Auth</MenuItem>
                  </Select>
                </FormControl>
                
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  The authorization header will be automatically generated when you send the request.{' '}
                  <Button variant="text" size="small" sx={{ p: 0, minWidth: 'auto', textTransform: 'none' }}>
                    Learn more about authorization
                  </Button>
                </Typography>
              </Box>
            )}
            
            <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 1, textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                This request is not inheriting any authorization helper at the moment. Save it in a collection to use the parent's authorization helper.
              </Typography>
            </Box>
          </Box>

          {/* Response Section */}
          <Box sx={{ flexGrow: 1, bgcolor: 'grey.50', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
              Response
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              Hit the Send button to get a response.
            </Typography>
            <Button variant="contained" size="large">
              Send Request
            </Button>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
              Do more with requests
            </Typography>
          </Box>
        </Box>

        {/* Bottom Status Bar */}
        <Box sx={{ bgcolor: 'grey.200', px: 2, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton size="small"><SearchIcon /></IconButton>
            <IconButton size="small"><SettingsIcon /></IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="caption">Ready</Typography>
            <IconButton size="small"><HelpIcon /></IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostmanInterface;
