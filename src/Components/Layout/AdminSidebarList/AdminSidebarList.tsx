/* eslint-disable spaced-comment */
import React from 'react';
import {
  Divider, List, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dashboard, Logout } from '@mui/icons-material';
import { Router, useNavigate } from 'react-router-dom';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Cookies from 'universal-cookie';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';

interface IStudentSidebarList{
  open: boolean;
}
export default function StudentSidebarList({ open }: IStudentSidebarList) {
  const navigate = useNavigate();
  const logout:any = () => {
    const cookies = new Cookies();
    cookies.remove('admin');
    cookies.remove('refresh');
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: 'Logged Out Successfully',
    });
    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 3000);
  };
  return (
    <>
      <List>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => navigate('/dashboard', { replace: true })}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => navigate('/lookup', { replace: true })}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <FindInPageIcon />
          </ListItemIcon>
          <ListItemText primary="Lookup" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => navigate('/notice', { replace: true })}
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
            onClick={logout}
          >
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </List>
    </>
  );
}
