import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  TextField,
  Typography,
} from '@mui/material';
import Layout from '../Components/Layout/Layout';
import BasicTable from '../Components/Tables';

const selectionObject: any = {
  rollno: false,
  first_name: false,
  last_name: false,
  middle_name: false,
  email: false,
  phone_number: false,
  gender: false,
  github: false,
  linkedin: false,
  no_of_offers: false,
  department: false,
  batch: false,
  rait_email: false,
};

const beautifulLabels: any = {
  rollno: 'Roll No',
  first_name: 'First Name',
  last_name: 'Last Name',
  middle_name: 'Middle Name',
  email: 'Email',
  phone_number: 'Phone Number',
  gender: 'Gender',
  github: 'Github',
  linkedin: 'Linkedin',
  no_of_offers: 'No of offers',
  department: 'Department',
  batch: 'Batch',
  rait_email: 'Rait Email',
};

export default function Dashboard() {
  const [queryFields, setQueryFields] = useState<any>({});
  const [requiredFields, setRequiredFields] = useState<any>({});
  const [receivedData, setReceivedData] = useState<any>([]);

  useEffect(() => {
    setQueryFields(selectionObject);
  }, []);

  const handleChange = (event: any) => {
    setQueryFields({
      ...queryFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleToggle = (item: string) => {
    setRequiredFields({
      ...requiredFields,
      [item]: !requiredFields[item],
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const queryObject: any = {};
    Object.keys(queryFields).forEach((key) => {
      if (queryFields[key]) {
        queryObject[key] = queryFields[key];
      }
    });
    const fieldsObject: any = {};
    Object.keys(requiredFields).forEach((key) => {
      if (requiredFields[key]) {
        fieldsObject[key] = true;
      }
    });

    fetch('https://tpc-backend-node.herokuapp.com/filter/dashboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          ...fieldsObject,
        },
        queries: {
          ...queryObject,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.student);
        setReceivedData(data.student);
      });
  };

  const handleDownload = () => {
    fetch('https://tpc-backend-node.herokuapp.com/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        students: receivedData,
      }),
    }).then((res) => res.blob()).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.xlsx';
      a.click();
    });
  };

  const handleDownloadCSV = () => {
    fetch('https://tpc-backend-node.herokuapp.com/downloadcsv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        students: receivedData,
      }),
    }).then((res) => res.blob()).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.csv';
      a.click();
    });
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {Object.keys(selectionObject).map((item, index) => (
            <div
              style={{
                display: 'flex',
                marginBottom: '3rem',
              }}
            >
              <Typography
                textAlign="center"
                style={{
                  position: 'relative',
                  top: '0.5rem',
                  borderRadius: '15rem',
                  background: requiredFields[item] ? '#2196f3' : '#fff',
                  color: requiredFields[item] ? '#fff' : '#000',
                  padding: '5px 10px',
                  marginRight: '1rem',
                  cursor: 'pointer',
                }}
                onClick={() => handleToggle(item)}
              >
                {beautifulLabels[item]}
              </Typography>
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {Object.keys(selectionObject).map((item, index) => (
            <div
              style={{
                display: 'flex',
                width: '25%',
                marginBottom: '1rem',
              }}
            >
              <TextField
                label={beautifulLabels[item]}
                name={item}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <Button
          type="submit"
          variant="contained"
          style={{
            marginBottom: '1rem',
          }}
        >
          Submit
        </Button>
      </form>
      {
        receivedData.length > 0 && (
          <>
            <BasicTable
              data={receivedData}
            />
            <Button
              style={{
                marginTop: '1rem',
              }}
              variant="contained"
              onClick={handleDownload}
            >
              download Excel
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              style={{
                marginTop: '1rem',
              }}
              variant="contained"
              onClick={handleDownloadCSV}
            >
              download CSV
            </Button>
          </>
        )
}
    </Layout>
  );
}
