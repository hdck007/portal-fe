import React from 'react';
import AcademicdetailsWrapper
  from '../../Components/Academicdetails/AcademicdetailsWrapper';
import DotsMobileStepper from '../../Components/FormStepper/FormStepper';
import SLayout from '../../Components/SLayout/SLayout';
import DetailsProvider from '../../Contexts/DetailsContext';

function StudentDetails() {
  return (
    <SLayout>
      <DetailsProvider>
        <AcademicdetailsWrapper />
      </DetailsProvider>
    </SLayout>
  );
}

export default StudentDetails;
