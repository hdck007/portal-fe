import React from 'react';
import DotsMobileStepper from '../../Components/FormStepper/FormStepper';
import Pstudent from '../../Components/Info';
import SLayout from '../../Components/SLayout/SLayout';
import DetailsProvider from '../../Contexts/DetailsContext';

function StudentDetails() {
  return (
    <SLayout>
      <DetailsProvider>
        <DotsMobileStepper activeStep={0} />
        <Pstudent />
      </DetailsProvider>
    </SLayout>
  );
}

export default StudentDetails;
