/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-len */
import React, { useState } from 'react';
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
import Swal from 'sweetalert2';

import SLayout from './SLayout';

const useStyles = makeStyles({
  head:
  {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  label: {
    fontSize: 5,
    marginTop: 5,
  },
  field: {
    marginLeft: '50px',
    width: 500,
    marginBottom: 5,
  },
  select: {
    marginBottom: 5,
  },
  drop:
  {
    marginLeft: 30,
    width: 500,
    height: 30,
    marginBottom: 5,
  },
  file: {
    fontSize: '15px',
  },
  accord: {
    marginTop: 10,
    margonBottom: 10,
    fontSize: 20,
    border: 10,
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '70%',
    justifyContent: 'space-between',
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%',
  },
  handle: {
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '70%',
    justifyContent: 'space-between',
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%',
    alignItems: 'center',
  },
  outerBorder: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default function Pstudent() {
  const classes = useStyles();
  const [fname, setFname] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [open, setOpen] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phonenumber, setPhoneNumber] = useState(0);
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [rmail, setRmail] = useState('');
  const [linked, setLinked] = useState('');
  const [git, setGit] = useState('');
  const [batch, setBatch] = useState(0);
  const [offer, setOffer] = useState(0);
  const [rollno, setRollno] = useState('');
  const [file, setFile] = useState(null);
  const cookies = new Cookies();
  const roll = cookies.get('roll_no');
  const handleGender = (event: any) => {
    setGender(event.target.value);
  };
  const handleDepartment = (event: any) => {
    setDepartment(event.target.value);
  };
  const handleFname = (event: any) => {
    setFirstName(event.target.value);
  };
  const handleMname = (event: any) => {
    setMiddleName(event.target.value);
  };
  const handleLname = (event: any) => {
    setLastName(event.target.value);
  };
  const handlePhone = (event: any) => {
    setPhoneNumber(event.target.value);
  };
  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleMail = (event: any) => {
    setMail(event.target.value);
  };
  const handleRmail = (event: any) => {
    setRmail(event.target.value);
  };
  const handleLinked = (event: any) => {
    setLinked(event.target.value);
  };
  const handleGit = (event: any) => {
    setGit(event.target.value);
  };
  const handleBatch = (event: any) => {
    setBatch(event.target.value);
  };
  const handleOffer = (event: any) => {
    setOffer(event.target.value);
  };
  const handleRoll = (event: any) => {
    setRollno(event.target.value);
  };
  const handleFile = (event: any) => {
    setFname(event.target.files[0].name);
    setFile(event.target.files[0]);
  };
  const uprofile = () => {
    console.log('clicked');
    console.log(firstname);
    // eslint-disable-next-line camelcase
    const formdata = new FormData();
    formdata.append('roll_no', `${rollno}`);
    formdata.append('first_name', `${firstname}`);
    formdata.append('middle_name', `${middlename}`);
    formdata.append('last_name', `${lastname}`);
    formdata.append('email', `${mail}`);
    formdata.append('phone_number', `${phonenumber}`);
    formdata.append('gender', `${gender}`);
    formdata.append('github', `${git}`);
    formdata.append('linkedin', `${linked}`);
    formdata.append('no_of_offers', `${offer}`);
    formdata.append('password', `${password}`);
    formdata.append('photo', `${file}`);
    formdata.append('department', `${department}`);
    formdata.append('batch', `${batch}`);
    formdata.append('rait_email', `${rmail}`);
    const requestOptions = {
      method: 'POST',
      body: formdata,
      headers: {
        Authorization: `Bearer ${cookies.get('access')}`,
      },
    };
    fetch('https://django-tpc.herokuapp.com/addStudent/', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  const url = `https://tpc-backend-node.herokuapp.com/image/upload/${roll}`;
  const uphoto = (event:any) => {
    event.preventDefault();
    const profile = new FormData();
    const n = fname;
    const l = fname.length;
    const a = n.indexOf('.');
    const a1 = a + 1;
    const s = fname.slice(a1, l);
    // eslint-disable-next-line
    if (s !== 'jpg') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter .jpg format image',
      });
      // @ts-ignore
    } else if (file.size > 256000) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter image size less than 256kB',
      });
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
    <SLayout>
      <div className={classes.outerBorder}>
        <div className={classes.head}>
          <Typography variant="h5">Edit Personal Information</Typography>
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit First Name</Typography>
          <TextField variant="standard" onChange={handleFname} name="first_name" className={classes.field} required />
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Middle Name</Typography>
          <TextField variant="standard" onChange={handleMname} name="middle_name" className={classes.field} required />
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Last Name</Typography>
          <TextField variant="standard" onChange={handleLname} name="last_name" className={classes.field} required />
        </div>
        <div className={classes.head}>
          <Typography className={classes.head} variant="h5">Edit Personal Details</Typography>
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Mobile Number</Typography>
          <TextField variant="standard" onChange={handlePhone} type="number" name="phone_number" className={classes.field} required />
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Password</Typography>
          <TextField variant="standard" name="password" onChange={handlePassword} className={classes.field} required type="password" />
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Department</Typography>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={handleDepartment}
            label="Department"
            className={classes.drop}
            name="department"
          >
            <MenuItem value={10}>Computer Science</MenuItem>
            <MenuItem value={20}>Electronics Engineering</MenuItem>
            <MenuItem value={30}>Electronics and Telecommunication</MenuItem>
            <MenuItem value={40}>Information Technology</MenuItem>
            <MenuItem value={50}>Instrumental Engineering</MenuItem>
          </Select>
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Roll No</Typography>
          <TextField variant="standard" onChange={handleRoll} className={classes.field} />
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Gender</Typography>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={handleGender}
            label="Religion"
            className={classes.drop}
            name="religion"
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </div>
        <div className={classes.head}>
          <Typography className={classes.label} variant="h5">Miscellaneous</Typography>
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Batch</Typography>
          <TextField variant="standard" type="number" onChange={handleBatch} name="batch" className={classes.field} required />
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Number of Offers</Typography>
          <TextField variant="standard" type="number" onChange={handleOffer} name="batch" className={classes.field} required />
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit GitHub URL</Typography>
          <TextField variant="standard" onChange={handleGit} className={classes.field} />
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit Linkedin URL</Typography>
          <TextField variant="standard" onChange={handleLinked} className={classes.field} />
        </div>
        <div className={classes.container}>
          <Typography className={classes.label}>Edit RAIT mail</Typography>
          <TextField variant="standard" onChange={handleRmail} className={classes.field} />
        </div>
        <div>
          <Typography className={classes.label}>Add Photo</Typography>
          <input name="photo" onChange={handleFile} className={classes.file} type="file" accept=".jpg" />
        </div>
        <Button
          variant="contained"
          onClick={uprofile}
          style={{
            marginBottom: '1rem',
            marginTop: '1rem',
            background: 'rgba(159, 28, 53, 1)',
          }}
        >
          Update Profile
        </Button>
      </div>
    </SLayout>
  );
}
