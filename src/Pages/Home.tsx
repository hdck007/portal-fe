import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

export default function Home() {
  const [userInfo, setUserInfo] = React.useState<any>({});
  const router = useNavigate();
  const cookies = new Cookies();
  const [role, setRole] = useState('');
  const handleChange = (event: any) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };
  // eslint-disable-next-line camelcase
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const loginData = new FormData();
    loginData.append('rait_email', userInfo.username);
    loginData.append('password', userInfo.password);
    if (userInfo.username && userInfo.password) {
      fetch('https://django-tpc.herokuapp.com/auth/studentLogin/', {
        method: 'POST',
        body: loginData,
      }).then((response) => response.json()).then((data: any) => {
        if (data.error_msg) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.status,
          });
        } else {
          setRole(data.role[0]);
          console.log(role);
          cookies.set('refresh', data.refresh);
          cookies.set('access', data.access);
          cookies.set('roll_no', data.roll_no);
          if (role[0] === 'Student') {
            router('/vprofile', { replace: true });
          } else {
            router('/dashboard', { replace: true });
          }
        }
      }).catch((error) => {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
        });
      });
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '400px',
          height: '400px',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            height: '60%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Typography variant="h2">TPC-PORTAL</Typography>
          <TextField
            label="RAIT E-mail"
            style={{
              width: '100%',
            }}
            variant="outlined"
            name="username"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            style={{
              width: '100%',
            }}
            variant="outlined"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            style={{
              width: '100%',
              background: 'rgba(159, 28, 53, 1)',
            }}
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
