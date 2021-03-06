/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {
  useTheme,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StudentSidebarList from './StudentSidebarList/StudentSidebarList';
import AppBar from './AppBar';
import DrawerHeader from './DrawerHeader';
import Drawer from './Drawer';

export default function Layout({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        style={{
          backgroundColor: 'rgba(159, 28, 53, 1)',
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Ramrao Adik Institute of Technology
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl'
              ? <ChevronRightIcon />
              : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <StudentSidebarList open={open} />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2 }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fafafa',
          minHeight: '100vh',
        }}
      >
        <DrawerHeader />
        <div>
          {children}
        </div>
      </Box>
    </Box>
  );
}
