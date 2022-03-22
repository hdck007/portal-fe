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

import Layout from './Layout';

const useStyles = makeStyles({
  title:
    {
      marginLeft: 50,
      marginTop: 10,
      marginBottom: 10,
    },
  label: {
    marginLeft: 50,
    fontSize: 5,
  },
  field: {
    marginLeft: 50,
    width: 700,
    height: 10,
    marginBottom: 10,
  },
  button: {
    marginLeft: 50,
    width: 100,
    height: 50,
    marginTop: 50,
  },
  drop:
  {
    marginLeft: 50,
    width: 200,
    height: 30,
    marginBottom: 5,
  },
  file:
  {
    marginLeft: 50,
    marginTop: 50,
  },
  accord:
  {
    marginTop: 10,

  },
});

export default function Pstudent() {
  const classes = useStyles();
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [religion, setReligion] = useState('');
  const [caste, setCaste] = useState('');
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState({
    firstname: '',
    middlename: '',
    tname: '',
    gen: 'online',
    venue: '',
    link: '',
    date: '',
    time: '',
    eventspeaker: '',
    contact: '',
    ispaid: 'free',
    cost: '',
    isfeatured: 'no',
    tags: ['tags', 'event'],
    no_of_users: 0,
    username: 'username',
  });
  const handleGender = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };
  const handleDepartment = (event: SelectChangeEvent) => {
    setDepartment(event.target.value);
  };
  const handleReligion = (event: SelectChangeEvent) => {
    setReligion(event.target.value);
  };
  const handleCaste = (event: SelectChangeEvent) => {
    setCaste(event.target.value);
  };
  const uprofile = () => {
    console.log('clicked');
  };
  return (
    <Layout>
      <div>
        <Typography className={classes.title} variant="h3">Edit Personal Information</Typography>
        <Accordion className={classes.accord}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>Edit Name details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.label} variant="h5">First Name</Typography>
            <TextField value={update.firstname} name="firstname" defaultValue="Please enter your First Name as on your marksheet" className={classes.field} required variant="outlined" />
            <Typography className={classes.label} variant="h5">Middle Name</Typography>
            <TextField name="middlename" defaultValue="Please enter your Middle Name as on your marksheet" className={classes.field} required variant="outlined" />
            <Typography className={classes.label} variant="h5">Last Name</Typography>
            <TextField defaultValue="Please enter your Last Name as on your marksheet" className={classes.field} required variant="outlined" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.accord}
          >
            <Typography>Edit Phone  No or Password </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.label} variant="h5">Mobile Number</Typography>
            <TextField name="phoneno" defaultValue="Please enter your 10 digit mobile number" className={classes.field} required variant="outlined" />
            <Typography className={classes.label} variant="h5">Password</Typography>
            <TextField name="password" defaultValue="Please enter your desired password" className={classes.field} required type="password" variant="outlined" />
            <Typography className={classes.label} variant="h5">Department</Typography>
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
              <MenuItem value={50}>Instrumation Technology</MenuItem>
            </Select>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.accord}
          >
            <Typography>Miscellaneous</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.label} variant="h5">Date of Birth</Typography>
            <TextField type="date" className={classes.field} />
            <Typography className={classes.label} variant="h5">Gender</Typography>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={handleGender}
              label="Gender"
              className={classes.drop}
            >
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
            </Select>
            <Typography className={classes.label} variant="h5">Address</Typography>
            <TextField name="address" defaultValue="Please enter your permanent residential address" className={classes.field} required multiline variant="outlined" />
            <Typography className={classes.label} variant="h5">Religion</Typography>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={handleReligion}
              label="Religion"
              className={classes.drop}
              name="religion"
            >
              <MenuItem value={10}>Hindu</MenuItem>
              <MenuItem value={20}>Muslim</MenuItem>
              <MenuItem value={30}>Sikh</MenuItem>
              <MenuItem value={40}>Christian</MenuItem>
            </Select>
            <Typography className={classes.label} variant="h4">Caste</Typography>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={handleCaste}
              label="Caste"
              className={classes.drop}
              name="caste"
            >
              <MenuItem value={10}>Computer Science</MenuItem>
              <MenuItem value={20}>Electronics Engineering</MenuItem>
              <MenuItem value={30}>Electronics and Telecommunication</MenuItem>
              <MenuItem value={40}>Information Technology</MenuItem>
              <MenuItem value={50}>Instrumation Technology</MenuItem>
            </Select>
          </AccordionDetails>
        </Accordion>
        <TextField name="file" className={classes.file} type="file" />
        <Button variant="contained" className={classes.button} color="primary">Update Profile </Button>
      </div>
    </Layout>
  );
}
