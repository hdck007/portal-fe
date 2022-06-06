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
    marginTop: 5,
  },
  field: {
    marginLeft: 50,
    width: 700,
    marginBottom: 5,
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
    margonBottom: 10,
    fontSize: 20,
    border: 10,
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
    lastname: '',
    mobile: 'online',
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
    <div>
      <Typography className={classes.title} variant="h3">Edit Personal Information</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit First Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField name="firstname" defaultValue="Please enter your First Name as on your marksheet" className={classes.field} required variant="outlined" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Middle Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField name="firstname" defaultValue="Please enter your Middle Name as on your marksheet" className={classes.field} required variant="outlined" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Last Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField name="firstname" defaultValue="Please enter your Last Name as on your marksheet" className={classes.field} required variant="outlined" />
        </AccordionDetails>
      </Accordion>
      <Typography variant="h5">Edit Personal Details</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Mobile Number</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField name="phoneno" defaultValue="Please enter your 10 digit mobile number" className={classes.field} required variant="outlined" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Password</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField name="password" defaultValue="Please enter your desired password" className={classes.field} required type="password" variant="outlined" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Department</Typography>
        </AccordionSummary>
        <AccordionDetails>

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
      <Typography variant="h5">Miscellaneous</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={handleReligion}
            label="Religion"
            className={classes.drop}
            name="religion"
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Date of Birth</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField type="date" className={classes.field} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Residential Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField name="address" defaultValue="Please enter your permanent residential address" className={classes.field} required multiline variant="outlined" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Religion</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.accord}
        >
          <Typography>Edit Caste</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={handleCaste}
            label="Caste"
            className={classes.drop}
            name="caste"
          >
            <MenuItem value={10}>Hindu</MenuItem>
            <MenuItem value={20}>Muslim</MenuItem>
            <MenuItem value={30}>Christian</MenuItem>
            <MenuItem value={40}>Sikh</MenuItem>
            <MenuItem value={50}>Jain</MenuItem>
          </Select>
        </AccordionDetails>
      </Accordion>
      <TextField name="file" className={classes.file} type="file" />
      <Button variant="contained" className={classes.button} color="primary">Update Profile </Button>
    </div>
  );
}
