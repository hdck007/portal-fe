/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DetailsContext } from '../../Contexts/DetailsContext';

function AdditionaldetailsWrapper({
  additionalDetails,
  setAdditionalDetails,
}: any) {
  const { setIsLoading }: any = React.useContext(DetailsContext);

  useEffect(() => {
    const value = ['Career Objective',
      'Academic achievements',
      'Certifications',
      'Extra-curcicular Activities',
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
          <CKEditor
            editor={ClassicEditor}
            data={item.value}
            placeholder="Enter details here"
            // @ts-ignore
            onReady={(editor) => {
              setIsLoading(false);
            }}
            // @ts-ignore
            onChange={(event, editor) => {
              const data = editor.getData();
              handleAdditonalChange(data, index);
            }}
          />
        </>
      ))}
    </div>
  );
}

export default AdditionaldetailsWrapper;
