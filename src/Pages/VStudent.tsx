import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

function VStudent() {
  const cookies = new Cookies();
  const useStyles = makeStyles({
    container: {
      marginTop: '30px',
      marginLeft: '55%',
    },
    title: {
      marginTop: '50px',
      marginLeft: '50%',
    },
    label: {
      marginTop: '5px',
      marginBottom: '20px',
    },
    // right: {

    // },
    // left: {
    //   backgroundColor: 'marroon',
    //   height: 'fullWidth',
    //   backgroundImage: 'url(person.jpeg)',
    // },
  });
  // eslint-disable-next-line camelcase
  const roll = cookies.get('roll_no');
  const loginData = new FormData();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [rollno, setRollno] = useState('');
  const [git, setGit] = useState('');
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [remail, setREmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState(0);
  loginData.append('roll_no', roll);
  const [data, setData] = useState('');
  useEffect(() => {
    fetch('https://django-tpc.herokuapp.com/viewStudent/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies.get('access')}`,
      },
      // eslint-disable-next-line camelcase
      body: loginData,
    }).then((response) => response.json()).then((resp) => {
      console.log(resp);
      setFname(resp.first_name);
      setLname(resp.last_name);
      setRollno(resp.roll_no);
      setGit(resp.github);
      setLink(resp.linkedin);
      setEmail(resp.email);
      setDepartment(resp.department);
    });
  }, []);
  // eslint-disable-next-line camelcase
  const classes = useStyles();
  return (
    <div>
      <div className="left">
        hi
      </div>
      <div className="right">
        <div className={classes.title}>
          <Typography variant="h3">View StudentDetails</Typography>
        </div>
        <div className={classes.container}>
          <Typography className={classes.label} variant="h5">
            First Name:
            {' '}
            {fname}
          </Typography>
          <Typography className={classes.label} variant="h5">
            Last Name:
            {lname}
          </Typography>
          <Typography className={classes.label} variant="h5">
            Roll No:
            {rollno}
          </Typography>
          <Typography className={classes.label} variant="h5">
            Email:
            {email}
          </Typography>
          <Typography className={classes.label} variant="h5">
            Git:
            {git}
          </Typography>
          <Typography className={classes.label} variant="h5">
            Linkedin:
            {link}
          </Typography>
          <Typography className={classes.label} variant="h5">
            Department:
            {' '}
            {department}
          </Typography>
        </div>
      </div>

    </div>
  );
}

export default VStudent;
