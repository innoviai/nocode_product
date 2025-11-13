import React from 'react';
import {
    Home as HomeIcon,
    Add as PlusIcon,
    Settings as CogIcon,
    Description as DocumentTextIcon,
    Help as QuestionMarkCircleIcon,
    AccountCircle as UserIcon,
    ChevronLeft as ChevronLeftIcon,
    Edit as PencilIcon,
    DescriptionOutlined as DocumentIcon,
    Receipt as ReceiptRefundIcon,
    CardMembership as IdentificationIcon,
    Book as BookOpenIcon,
    TableChart as TableCellsIcon,
    Info as InformationCircleIcon,
    ChatBubble as ChatBubbleLeftRightIcon,
    ArrowForward as ArrowForwardIcon,
    MoreVert as MoreVertIcon,
    FileCopy as FileCopyIcon,
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
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    Link,
    Chip,
    Badge,
    Fab
} from '@mui/material';

const PDFData_Extraction: React.FC = () => {
    const documentTypes = [
        {
            title: 'Create Your Own',
            description: 'Build your own extractor',
            icon: PencilIcon,
            color: 'primary'
        },
        {
            title: 'Invoices',
            description: 'Pre-built extractor',
            icon: DocumentIcon,
            color: 'primary'
        },
        {
            title: 'Receipts',
            description: 'Pre-built extractor',
            icon: ReceiptRefundIcon,
            color: 'secondary'
        },
        {
            title: 'Text',
            description: 'Text Extractor',
            icon: ReceiptRefundIcon,
            color: 'secondary'
        },
        {
            title: 'Tables',
            description: 'Pre-built extractor',
            icon: TableCellsIcon,
            color: 'primary'
        },
        //{
        //    title: 'Driver\'s license (USA)',
        //    description: 'Pre-built extractor',
        //    icon: IdentificationIcon,
        //    color: 'info'
        //},
        //{
        //    title: 'Passports',
        //    description: 'Pre-built extractor',
        //    icon: BookOpenIcon,
        //    color: 'secondary'
        //},
    ];

    return (
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'grey.50' }}>
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        borderRight: '1px solid',
                        borderColor: 'grey.200'
                    },
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Logo */}
                    <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'grey.200' }}>
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
                            <Typography variant="h6" sx={{ fontWeight: 600, color: 'grey.900' }}>
                                InnoVi NoCode
                            </Typography>
                        </Box>
                    </Box>

                    {/* Navigation */}
                    <List sx={{ flexGrow: 1, px: 1 }}>
                        <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="My Models" />
                        </ListItem>
                        <ListItem button sx={{ borderRadius: 1, mb: 0.5, bgcolor: 'primary.50', color: 'primary.main' }}>
                            <ListItemIcon sx={{ color: 'primary.main' }}><PlusIcon /></ListItemIcon>
                            <ListItemText primary="New Model" />
                        </ListItem>
                        <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                            <ListItemIcon><CogIcon /></ListItemIcon>
                            <ListItemText primary="External Integrations" />
                        </ListItem>
                        <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                            <ListItemIcon>
                                <Badge badgeContent="3" color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.75rem' } }}>
                                    <Box sx={{ width: 20, height: 20 }} />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary="What's New" />
                        </ListItem>
                        <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                            <ListItemIcon><DocumentTextIcon /></ListItemIcon>
                            <ListItemText primary="Documentation" />
                        </ListItem>
                        <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                            <ListItemIcon><QuestionMarkCircleIcon /></ListItemIcon>
                            <ListItemText primary="Support Requests" />
                        </ListItem>
                        <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                            <ListItemIcon><QuestionMarkCircleIcon /></ListItemIcon>
                            <ListItemText primary="Help" />
                        </ListItem>
                        <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                            <ListItemIcon><UserIcon /></ListItemIcon>
                            <ListItemText primary="My Account" />
                        </ListItem>
                    </List>

                    {/* Collapse button */}
                    <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'grey.200' }}>
                        <IconButton sx={{ width: '100%' }}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Drawer>

            {/* Main Content */}
            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                {/* Header */}
                <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid', borderColor: 'grey.200' }}>
                    <Toolbar sx={{ justifyContent: 'space-between', px: 4, py: 2 }}>
                        <Typography variant="h4" sx={{ color: 'grey.900', fontWeight: 600 }}>
                            Recently Created Models
                        </Typography>
                        <Button variant="contained" color="primary" size="large">
                            Schedule Free Onboarding
                        </Button>
                    </Toolbar>
                </AppBar>

                {/* Models Table */}
                <Box sx={{ px: 4, py: 3 }}>
                    <Card elevation={0} sx={{ border: '1px solid', borderColor: 'grey.200' }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: 'grey.50' }}>
                                    <TableCell sx={{ fontWeight: 600, color: 'grey.700' }}>Type</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: 'grey.700' }}>Description</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: 'grey.700' }}>Model ID</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: 'grey.700' }}>Date Created</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: 'grey.700' }}>Plan</TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: 'grey.700' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <Typography variant="body2">Usage</Typography>
                                            <InformationCircleIcon sx={{ fontSize: 16, color: 'grey.500' }} />
                                        </Box>
                                    </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box sx={{ width: 8, height: 8, bgcolor: 'success.main', borderRadius: '50%' }} />
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>OCR</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography variant="body2" sx={{ color: 'grey.500' }}>Add a description</Typography>
                                            <IconButton size="small">
                                                <PencilIcon sx={{ fontSize: 16 }} />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography variant="body2">693d3491-9886-489e-aae...</Typography>
                                            <IconButton size="small">
                                                <FileCopyIcon sx={{ fontSize: 16 }} />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2">2021-10-09</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Box>
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>Starter</Typography>
                                            <Button size="small" color="primary">Manage</Button>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Box>
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>1</Typography>
                                            <Typography variant="caption" sx={{ color: 'grey.500' }}>100 / month</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton size="small">
                                            <MoreVertIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>

                    {/* See all Models link */}
                    <Box sx={{ mt: 2 }}>
                        <Link
                            href="#"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                textDecoration: 'none',
                                color: 'primary.main',
                                '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            <Typography variant="body2">See all Models</Typography>
                            <ArrowForwardIcon sx={{ fontSize: 16 }} />
                        </Link>
                    </Box>
                </Box>

                {/* Choose to get started section */}
                <Box sx={{ px: 4, py: 3 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'grey.900' }}>
                        Choose to get started:
                    </Typography>

                    <Grid container spacing={2} sx={{ mb: 4 }}>
                        {documentTypes.map((type, index) => {
                            const IconComponent = type.icon;
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            border: '1px solid',
                                            borderColor: 'grey.200',
                                            cursor: 'pointer',
                                            transition: 'box-shadow 0.2s',
                                            '&:hover': {
                                                boxShadow: 2
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box
                                                    sx={{
                                                        width: 48,
                                                        height: 48,
                                                        bgcolor: `${type.color}.50`,
                                                        borderRadius: 1.5,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <IconComponent sx={{ fontSize: 24, color: `${type.color}.main` }} />
                                                </Box>
                                                <Box>
                                                    <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
                                                        {type.title}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: 'grey.600' }}>
                                                        {type.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>

                    {/* Multiple document types section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="body1" sx={{ mb: 2, color: 'grey.700' }}>
                            Have multiple document types?
                        </Typography>
                        <Card
                            elevation={0}
                            sx={{
                                border: '1px solid',
                                borderColor: 'grey.200',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.2s',
                                '&:hover': {
                                    boxShadow: 2
                                }
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            bgcolor: 'primary.50',
                                            borderRadius: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <DocumentIcon sx={{ fontSize: 24, color: 'primary.main' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                            Build a document type separator
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>

            {/* Chat Widget */}
            <Fab
                color="primary"
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                }}
            >
                <Badge badgeContent="2" color="error">
                    <ChatBubbleLeftRightIcon />
                </Badge>
            </Fab>
        </Box>
    );
};

export default PDFData_Extraction;
