import {
  Checkbox, Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { DetailsContext } from '../../../Contexts/DetailsContext';

interface IApplicableOptions{
  setDidDiploma: React.Dispatch<React.SetStateAction<boolean>>;
  didDiploma: boolean;
  didMe: boolean;
  setDidMe: React.Dispatch<React.SetStateAction<boolean>>;
  didXII: boolean;
  setDidXII: React.Dispatch<React.SetStateAction<boolean>>;
}

function ApplicableOptions({
  setDidDiploma,
  didDiploma,
  didMe,
  setDidMe,
  setDidXII,
  didXII,
}: IApplicableOptions) {
  const { setIsLoading }:any = React.useContext(DetailsContext);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <div
      style={{
        position: 'sticky',
        width: '20vw',
        right: '0',
        marginLeft: 'auto',
        top: '110px',
      }}
    >
      <div>
        <Typography
          fontWeight={700}
          paddingLeft={1}
        >
          Select all that apply
        </Typography>
        <div>
          <Checkbox checked />
          {' '}
          Class-X Boards
        </div>
        <div>
          <Checkbox
            checked={didXII}
            onChange={(e) => setDidXII(e.target.checked)}
          />
          {' '}
          Class-XII Boards
        </div>
        <div>
          <Checkbox
            checked={didDiploma}
            onChange={(e) => setDidDiploma(e.target.checked)}
          />
          {' '}
          Diploma
        </div>
        <div>
          <Checkbox checked />
          {' '}
          BE
        </div>
        <div>
          <Checkbox
            checked={didMe}
            onChange={(e) => setDidMe(e.target.checked)}
          />
          {' '}
          ME
        </div>
      </div>
    </div>
  );
}

export default React.memo(ApplicableOptions);
