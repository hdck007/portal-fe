import React, { useState, useEffect } from 'react';
import './Login.css';
import {
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import logo from '../assets/image/dy.jpeg';

function Login() {
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
          console.log(data);
          console.log(data.role);
          console.log(data.role[0]);
          setRole(data.role[0]);
          console.log(role);
          cookies.set('refresh', data.refresh);
          cookies.set('access', data.access);
          cookies.set('roll_no', userInfo.username);
          if (data.role[0] === 'Student') {
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
        marginTop: '50px',
      }}
    >
      <div
        className="box"
        style={{
          width: '700px',
          height: '900px',
        }}
      >
        <form
          className="form"
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
          <div className="title">
            <img src={logo} alt="Logo" />
            <Typography
              className="head"
              style={{
                marginTop: '30px',
                marginBottom: '30px',
              }}
              variant="h2"
            >
              TPC-PORTAL

            </Typography>
          </div>
          <TextField
            label="RAIT E-mail"
            className="mail"
            style={{
              width: '100%',
              marginTop: '10px',
              marginBottom: '10px',
            }}
            variant="outlined"
            name="username"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            className="pass"
            style={{
              width: '100%',
              marginTop: '10px',
              marginBottom: '10px',
            }}
            variant="outlined"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            className="bttn"
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

export default Login;
