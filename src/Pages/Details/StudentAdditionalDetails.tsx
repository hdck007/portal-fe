import React from 'react';
import AdditionaldetailsWrapper
  from '../../Components/Additionaldetails/AdditionaldetailsWrapper';
import DotsMobileStepper from '../../Components/FormStepper/FormStepper';
import SLayout from '../../Components/SLayout/SLayout';
import DetailsProvider from '../../Contexts/DetailsContext';

function StudentDetails() {
  return (
    <SLayout>
      <DetailsProvider>
        <DotsMobileStepper activeStep={2} />
        <AdditionaldetailsWrapper />
      </DetailsProvider>
    </SLayout>
  );
}

export default StudentDetails;
