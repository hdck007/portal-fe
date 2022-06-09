/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';

function AdditionaldetailsWrapper({
  additionalDetails,
  setAdditionalDetails,
}: any) {
  useEffect(() => {
    const value = ['Career Objective',
      'Academic achievement one',
      'Academic achievement two',
      'Academic achievement three',
      'Certification One',
      'Certification Two',
      'Certification Three',
      'Project one',
      'Project two',
      'Project three',
      'Internship one',
      'Internship two',
      'Internship three',
      'Prefered Language',
      'Technologies',
      'Additional Information'].map((item, index) => ({
      title: item,
      value: '',
    }));

    setAdditionalDetails(value);
  }, []);

  const handleAdditonalChange = (
    data: any,
    index: number,
  ) => {
    const newAdditionalDetails = [...additionalDetails];
    newAdditionalDetails[index].value = data;
    setAdditionalDetails(newAdditionalDetails);
  };

  return (
    <div>
      {additionalDetails && additionalDetails.map((item: any, index:number) => (
        <>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: '2rem',
            }}
          >
            {item.title}
          </Typography>
          <TextField
            value={item.value}
            placeholder="Enter details here"
            fullWidth
            multiline
            onChange={(event) => handleAdditonalChange(
              event.target.value,
              index,
            )}
          />
        </>
      ))}
    </div>
  );
}

export default AdditionaldetailsWrapper;
