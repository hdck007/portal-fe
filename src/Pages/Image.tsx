import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Cookies from 'universal-cookie';

function Image() {
  const [file, setFile] = useState(null);
  const [rollno, setRollno] = useState('');
  const handleFile = (event: any) => {
    console.log(event.target.files[0].size);
    setFile(event.target.files[0]);
  };
  const cookies = new Cookies();
  const roll = cookies.get('roll_no');
  const url = `https://tpc-backend-node.herokuapp.com/image/upload/${roll}`;
  const uphoto = (event:any) => {
    event.preventDefault();
    const profile = new FormData();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    profile.append('profile', file);
    const requestOptions = {
      method: 'POST',
      body: profile,
      // headers: {
      //   Authorization: `Bearer ${cookies.get('access')}`,
      // },
    };
    fetch(`${url}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  return (
    <div>
      <form onSubmit={uphoto}>
        <input name="profile" onChange={handleFile} type="file" accept=".jpg" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Image;
