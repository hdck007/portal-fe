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
        Authorization: `Bearer ${cookies.get('jwt')}`,
      },
    };
    fetch('https://django-tpc.herokuapp.com/addStudent/', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  return (
    <Layout>
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
            <TextField onChange={handleFname} name="first_name" className={classes.field} required variant="outlined" />
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
            <TextField onChange={handleMname} name="middle_name" className={classes.field} required variant="outlined" />
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
            <TextField onChange={handleLname} name="last_name" className={classes.field} required variant="outlined" />
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
            <TextField onChange={handlePhone} type="number" name="phone_number" className={classes.field} required variant="outlined" />
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
            <TextField name="password" onChange={handlePassword} className={classes.field} required type="password" variant="outlined" />
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
              <MenuItem value={50}>Instrumental Engineering</MenuItem>
            </Select>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.accord}
          >
            <Typography>Edit Roll No</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField onChange={handleRoll} className={classes.field} />
          </AccordionDetails>
        </Accordion>
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
              onChange={handleGender}
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
        <Typography variant="h5">Miscellaneous</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.accord}
          >
            <Typography>Edit Batch</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField type="number" onChange={handleBatch} name="batch" className={classes.field} required multiline variant="outlined" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.accord}
          >
            <Typography>Edit Number of Offers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField type="number" onChange={handleOffer} name="batch" className={classes.field} required multiline variant="outlined" />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.accord}
          >
            <Typography>Edit GitHub URL</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField onChange={handleGit} className={classes.field} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.accord}
          >
            <Typography>Edit Linkedin URL</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField onChange={handleGit} className={classes.field} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className={classes.accord}
          >
            <Typography>Edit RAIT mail</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField onChange={handleRmail} className={classes.field} />
          </AccordionDetails>
        </Accordion>
        <input name="photo" onChange={handleFile} className={classes.file} type="file" accept=".jpg" />
        <Button variant="contained" onClick={uprofile} className={classes.button} color="primary">Update Profile </Button>
      </div>
    </Layout>
  );
}
