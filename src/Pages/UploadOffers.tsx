/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, InputLabel, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Layout from '../Components/Layout/Layout';

function UploadOffers() {
  const [offers, setOffers] = React.useState<any>([]);
  const [offerFileOne, setOfferFileOne] = React.useState(null);
  const [offerFileTwo, setOfferFileTwo] = React.useState(null);
  const [offerFileThree, setOfferFileThree] = React.useState(null);
  const [rollNo, setRollNo] = React.useState('');
  const cookies = new Cookies();

  useEffect(() => {
    const emptyOffers = ['one', 'two', 'three'].map((item: any) => ({
      key: `placed_org_${item}`,
      value: null,
      key2: `package_${item}`,
      value2: null,
    }));

    setOffers(emptyOffers);
  }, []);

  const handleNameChange = (event: any, index: number) => {
    const newOffers = [...offers];
    newOffers[index].value = event.target.value;
    setOffers(newOffers);
  };

  const handlePackageChange = (event: any, index: number) => {
    const newOffers = [...offers];
    newOffers[index].value2 = event.target.value;
    setOffers(newOffers);
  };

  const handleFileChange = (event: any, index: number) => {
    switch (index) {
      case 0:
        setOfferFileOne(event.target.files[0]);
        break;
      case 1:
        setOfferFileTwo(event.target.files[0]);
        break;
      case 2:
        setOfferFileThree(event.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    // @ts-ignore
    formData.append('offer_letter_one ', offerFileOne);
    // @ts-ignore
    formData.append('offer_letter_two ', offerFileTwo);
    // @ts-ignore
    formData.append('offer_letter_three ', offerFileThree);

    offers.forEach((item: any) => {
      formData.append(item.key, item.value);
      formData.append(item.key2, item.value2);
    });

    formData.append('roll_no', cookies.get('roll_no'));
    fetch('https://django-tpc.herokuapp.com/addPlacementDetails/', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${cookies.get('access')}`,
      },
    });
  };

  return (
    <Layout>
      <h3>Upload Offers</h3>
      <TextField
        label="Roll No"
        value={rollNo}
        onChange={(event: any) => setRollNo(event.target.value)}
      />
      {offers.map((item: any, index: number) => (
        <div>
          <h4>
            Offer Details
            {' '}
            {index + 1}
          </h4>
          <div
            style={{
              width: '400px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '20px 0',
            }}
          >
            <InputLabel>Company name:</InputLabel>
            <TextField
              variant="standard"
              onChange={(event) => handleNameChange(event, index)}
            />
          </div>
          <div
            style={{
              width: '400px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '20px 0',
            }}
          >
            <InputLabel>Package offered:</InputLabel>
            <TextField
              type="number"
              variant="standard"
              onChange={(event) => handlePackageChange(event, index)}
            />
          </div>
          <div
            style={{
              width: '400px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '20px 0',
            }}
          >
            <InputLabel>File: </InputLabel>
            <input
              type="file"
              onChange={(event) => handleFileChange(event, index)}
            />
          </div>
        </div>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Layout>
  );
}

export default UploadOffers;
