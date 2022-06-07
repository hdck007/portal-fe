import React from 'react';
import {
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { AuthContext } from '../Contexts/AuthContext';

export default function Home() {
  const [userInfo, setUserInfo] = React.useState<any>({});
  const router = useNavigate();
  const cookies = new Cookies();

  const handleChange = (event: any) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };
  // eslint-disable-next-line camelcase
  const rait_email = userInfo.remail;
  const password = userInfo.passwrd;
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const loginData = new FormData();
    loginData.append('rait_email', userInfo.username);
    loginData.append('password', userInfo.password);
    if (userInfo.username && userInfo.password) {
      fetch('https://django-tpc.herokuapp.com/auth/studentLogin/', {
        method: 'POST',
        body: loginData,
      }).then((response) => response.json()).then((data) => {
        cookies.set('refresh', data.refresh);
        cookies.set('access', data.access);
        cookies.set('roll_no', userInfo.username);
        router('/dashboard', { replace: true });
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
            label="RAIT E-mail"
            style={{
              width: '100%',
            }}
            variant="outlined"
            name="remail"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            style={{
              width: '100%',
            }}
            variant="outlined"
            name="passwrd"
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
