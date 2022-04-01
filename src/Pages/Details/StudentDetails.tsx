import React from 'react';
import AcademicdetailsWrapper
  from '../../Components/Academicdetails/AcademicdetailsWrapper';
import Layout from '../../Components/Layout/Layout';
import DetailsProvider from '../../Contexts/DetailsContext';

function StudentDetails() {
  return (
    <Layout>
      <DetailsProvider>
        <AcademicdetailsWrapper />
      </DetailsProvider>
    </Layout>
  );
}

export default StudentDetails;
