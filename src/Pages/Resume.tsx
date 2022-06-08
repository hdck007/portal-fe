import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Resume() {
  const cookies = new Cookies();
  const roll = cookies.get('roll_no').toString();
  console.log(typeof roll === 'string');
  console.log(roll);
  const handleResume = async (event: any) => {
    event.preventDefault();
    if (roll !== undefined) {
      fetch('https://tpc-backend-node.herokuapp.com/downloadresume/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: roll }),
      }).then((response) => response.blob()).then((blob) => {
        console.log(blob);
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        a.click();
      });
    }
  };
  return (
    <div>
      <Typography variant="h2" style={{}}>Generate Resume</Typography>
      <Button onClick={handleResume}>GENERATE RESUME</Button>
    </div>
  );
}

export default Resume;
