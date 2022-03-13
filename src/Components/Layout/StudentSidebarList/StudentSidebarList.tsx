import React from 'react';
import {
  Divider, List, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Logout } from '@mui/icons-material';

interface IStudentSidebarList{
  open: boolean;
}

export default function StudentSidebarList({ open }: IStudentSidebarList) {
  return (
    <>
      <List>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </List>
    </>
  );
}
