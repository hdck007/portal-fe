/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-alert */
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
import './Image.css';

function Image() {
  const [file, setFile] = useState(null);
  const [rollno, setRollno] = useState('');
  const [fname, setFname] = useState(' ');
  const handleFile = (event: any) => {
    console.log(event.target.files[0]);
    setFname(event.target.files[0].name);
    console.log(event.target.files[0].size);
    setFile(event.target.files[0]);
  };
  const cookies = new Cookies();
  const roll = cookies.get('roll_no');
  const url = `https://tpc-backend-node.herokuapp.com/image/upload/${roll}`;
  const uphoto = (event:any) => {
    event.preventDefault();
    const profile = new FormData();
    const n = fname;
    console.log(n);
    const l = fname.length;
    const a = n.indexOf('.');
    const a1 = a + 1;
    console.log(l);
    console.log(a);
    console.log(file);
    const s = fname.slice(a1, l);
    console.log(s);
    // eslint-disable-next-line
    if (s !== 'jpg') {
      window.alert('Please enter .jpg format image');
      // @ts-ignore
    } else if (file.size > 256000) {
      window.alert('Please enter image size less than 256kB');
    } else {
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
    }
  };
  return (
    <div>
      <div className="title">
        <Typography variant="h2">Enter profile image</Typography>
      </div>
      <div className="note">
        <Typography variant="h3">Note:</Typography>
        <Typography variant="h4">Photo must be taken in formal attire</Typography>
      </div>
      <form>
        <input name="profile" onChange={handleFile} type="file" accept=".jpg" />
        <Button className=".btn" onClick={uphoto} variant="contained" />
      </form>
    </div>
  );
}

export default Image;
