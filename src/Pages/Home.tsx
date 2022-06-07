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
    const res = await fetch('https://django-tpc.herokuapp.com/auth/studentLogin/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        // eslint-disable-next-line camelcase
        rait_email,
        password,
      }),
    });
    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      const token = data.access;
      const ref = data.refresh;
      console.log(token);
      console.log(ref);
      const cookies = new Cookies();
      // eslint-disable-next-line camelcase
      cookies.set('roll', `${rait_email}`);
      cookies.set('jwt', `${token}`);
      // eslint-disable-next-line camelcase
      window.alert('SUCCESSFULL LOGIN');
      router('/dashboard', { replace: true });
    } else if (res.status === 422) {
      window.alert('INCORRECT CREDENTIALS');
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
