import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './table.css';

function Resume() {
  const cookies = new Cookies();
  const rolln:string = cookies.get('roll').toString();
  console.log(rolln);
  const handleResume = async (event: any) => {
    event.preventDefault();
    if (rolln !== undefined) {
      fetch('https://django-tpc.herokuapp.com/auth/studentLogin/', {
        method: 'POST',
        body: rolln,
      }).then((response) => response.json()).then((data) => {
        console.log('done');
        console.log(data);
      });
    }
  };
  return (
    <div>
      <Typography>Generate Resume</Typography>
      <Button onClick={handleResume}>GENERATE RESUME</Button>
    </div>
  );
}

export default Resume;
