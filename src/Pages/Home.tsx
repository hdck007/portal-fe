import React, { useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function Home() {
  const [userInfo, setUserInfo] = useState<any>({});
  const router = useNavigate();
  const cookies = new Cookies();
  cookies.set('jwt', 'hello');
  const handleChange = (event: any) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (userInfo.username === 'admin' && userInfo.password === 'admin') {
      router('/dashboard', { replace: true });
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
      <div style={{
        backgroundImage: 'url(/rait.jpeg)',
        backgroundRepeat: 'no-repeat',
      }}
      />
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
            label="Username"
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
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
