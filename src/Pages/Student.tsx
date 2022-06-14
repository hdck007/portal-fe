import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './Student.css';
import SLayout from '../Components/SLayout/SLayout';

function Student() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const roll = cookies.get('roll_no');
  const loginData = new FormData();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [rollno, setRollno] = useState('');
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  loginData.append('roll_no', roll);
  const [data, setData] = useState('');
  useEffect(() => {
    fetch('https://django-tpc.herokuapp.com/node/getStudentProfile/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies.get('access')}`,
      },
      // eslint-disable-next-line camelcase
      body: loginData,
    }).then((response) => response.json()).then((resp) => {
      console.log(resp);
      setFname(resp.student.first_name);
      setLname(resp.student.last_name);
      setRollno(resp.student.roll_no);
      setLink(resp.student.linkedin);
      setEmail(resp.student.email);
      setPhone(resp.student.phone_number);
    });
  }, []);
  const resume = () => {
    navigate('/vprofile');
  };
  const eprofile = () => {
    navigate('/details');
  };
  const notify = () => {
    navigate('/mynotice');
  };
  return (
    <div>
      <SLayout>
        <div className="greet">
          <Typography variant="h2">
            Welcome,
            {fname}
            {lname}
          </Typography>
          <Typography variant="h4">
            Roll No:
            {' '}
            {rollno}
          </Typography>
          <Typography variant="h4">
            E-Mail:
            {email}
          </Typography>
          <Typography variant="h4">
            Phone:
            {phone}
          </Typography>
        </div>
        <div className="bttns">
          <Button onClick={eprofile} variant="contained" className="bttn">Edit Profile</Button>
          <Button onClick={resume} variant="contained" className="bttn">View Profile</Button>
          <Button onClick={notify} variant="contained" className="bttn">Notifications</Button>
        </div>
      </SLayout>
    </div>
  );
}

export default Student;
