/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Alert, Button, Snackbar, Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from 'universal-cookie';
import { DetailsContext } from '../../Contexts/DetailsContext';
import { IBoardDetails, IDegreeDetails } from '../../Interfaces/StudentDetails';
import AdditionaldetailsWrapper from '../Additionaldetails/AdditionaldetailsWrapper';
import DotsMobileStepper from '../FormStepper/FormStepper';
import ApplicableOptions from './ApplicableOptions/ApplicableOptions';
import BoardsForm from './BoardsForm/BoardsForm';
import DegreeForm from './DegreeForms/DegreeForm';
import Pstudent from '../Info';

function AcademicdetailsWrapper() {
  const [additionalDetails, setAdditionalDetails] = useState<any[]>([]);
  const [engAcadDetails, setEngAcadDetails] = useState<IDegreeDetails[]>([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [
    diplomaAcadDetails, setDiplomaAcadDetails,
  ] = useState<IDegreeDetails[]>([]);
  const [meAcadDetails, setMeAcadDetails] = useState<IDegreeDetails[]>([]);
  const [
    boardsAcadDetails, setBoardsAcadDetails,
  ] = useState<IBoardDetails[]>([]);
  const [didDiploma, setDidDiploma] = useState<boolean>(false);
  const [didMe, setDidMe] = useState<boolean>(false);
  const [didXII, setDidXII] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, setIsLoading }: any = React.useContext(DetailsContext);
  const cookies = new Cookies();

  useEffect(() => {
    const value = new Array(6).fill(0).map((_, index) => ({
      semester: index + 1,
      completetionMonth: null,
      completionYear: null,
      marks: null,
      totalMarks: null,
      cgpa: null,
    }));

    const valueBoards = new Array(2).fill(0).map((_, index) => ({
      board: index === 0 ? 'Class - X' : 'Class - XII',
      completetionMonth: null,
      completionYear: null,
      marks: null,
      totalMarks: null,
    }));

    setBoardsAcadDetails(valueBoards);
    setEngAcadDetails(value);
    setDiplomaAcadDetails(value);
    setMeAcadDetails([...value].splice(0, 2));
  }, []);

  const removeEngAcad = (value: string) => {
    switch (value) {
      case 'eng': {
        if (engAcadDetails.length === 6) {
          return;
        }
        const newAcadDetails = [...engAcadDetails];
        newAcadDetails.pop();
        setEngAcadDetails(newAcadDetails);
        break;
      }
      default: {
        const newAcadDetails = [...meAcadDetails];
        newAcadDetails.pop();
        setMeAcadDetails(newAcadDetails);
        break;
      }
    }
  };

  const handleAddAcad = (value: string) => {
    switch (value) {
      case 'me': {
        if (meAcadDetails.length === 4) {
          return;
        }
        setMeAcadDetails((prevValue) => [...meAcadDetails, {
          semester: prevValue.length + 1,
          completetionMonth: null,
          completionYear: null,
          marks: null,
          totalMarks: null,
          cgpa: null,
        }]);
        break;
      }
      default: {
        if (engAcadDetails.length === 8) {
          return;
        }
        setEngAcadDetails((prevValue) => [...engAcadDetails, {
          semester: prevValue.length + 1,
          completetionMonth: null,
          completionYear: null,
          marks: null,
          totalMarks: null,
          cgpa: null,
        }]);
      }
    }
  };

  const validate = () => {
    let flag = true;
    engAcadDetails.forEach((item: any) => {
      Object.keys(item).forEach((key) => {
        if (item[key] === null) {
          flag = false;
        }
      });
    });
    boardsAcadDetails.forEach((item: any) => {
      Object.keys(item).forEach((key) => {
        if (item[key] === null) {
          flag = false;
        }
      });
    });

    if (didMe) {
      meAcadDetails.forEach((item: any) => {
        Object.keys(item).forEach((key) => {
          if (item[key] === null) {
            flag = false;
          }
        });
      });
    }

    if (didDiploma) {
      diplomaAcadDetails.forEach((item: any) => {
        Object.keys(item).forEach((key) => {
          if (item[key] === null) {
            flag = false;
          }
        });
      });
    }
    return flag;
  };

  const handleSubmit = () => {
    setOpen(true);

    if (validate()) {
      const academiceData = new FormData();
      academiceData.append('roll_no', '123');
      academiceData.append(
        'tenth_percent',
        `${(Number(boardsAcadDetails[0].marks) * 100)
           / Number(boardsAcadDetails[0].totalMarks)}`,
      );
      academiceData.append(
        'tenth_completion_date',
        String(boardsAcadDetails[0].completionYear),
      );
      academiceData.append(
        'tenth_obtained_marks',
        String(boardsAcadDetails[0].marks),
      );
      academiceData.append(
        'tenth_total_marks',
        String(boardsAcadDetails[0].totalMarks),
      );
      academiceData.append(
        'twelveth_percent',
        `${(Number(boardsAcadDetails[1].marks) * 100)
           / Number(boardsAcadDetails[1].totalMarks)}`,
      );
      academiceData.append(
        'twelveth_completion_date',
        String(boardsAcadDetails[1].completionYear),
      );
      academiceData.append(
        'twelveth_obtained_marks',
        String(boardsAcadDetails[1].marks),
      );
      academiceData.append(
        'twelveth_total_marks',
        String(boardsAcadDetails[1].totalMarks),
      );
      let sum = 0;
      engAcadDetails.forEach((value, index) => {
        academiceData.append(
          `sem${index + 1}_pointer`,
          String(value.cgpa),
        );
        academiceData.append(
          `sem${index + 1}_completion_data`,
          String(value.completionYear),
        );
        academiceData.append(
          `sem${index + 1}_obtained_marks`,
          String(value.marks),
        );
        academiceData.append(
          `sem${index + 1}_total_marks`,
          String(value.totalMarks),
        );
        sum += Number(value.cgpa);
      });
      sum /= engAcadDetails.length;
      academiceData.append('cgpa', String(sum));
      academiceData.append('be_percent', '60');

      meAcadDetails.forEach((value, index) => {
        academiceData.append(
          `masters_sem${index + 1}_pointer`,
          String(value.cgpa),
        );
        academiceData.append(
          `masters_sem${index + 1}_completion_data`,
          String(value.completionYear),
        );
        academiceData.append(
          `masters_sem${index + 1}_obtained_marks`,
          String(value.marks),
        );
        academiceData.append(
          `masters_sem${index + 1}_total_marks`,
          String(value.totalMarks),
        );
      });

      console.log({
        engAcadDetails,
        diplomaAcadDetails,
        meAcadDetails,
        boardsAcadDetails,
        additionalDetails,
      });
      const access = cookies.get('access');
      fetch('https://django-tpc.herokuapp.com/addAcademicInfo/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access}`,
        },
        body: academiceData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const handleNext = () => {
    setIsLoading(true);
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setIsLoading(true);
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  const handleChangeBoards = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    index: number,
  ) => {
    const newBoardsAcadDetails = [...boardsAcadDetails];
    // @ts-ignore
    newBoardsAcadDetails[index][field] = event.target.value;
    setBoardsAcadDetails(newBoardsAcadDetails);
  };

  const handleChangeDegree = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: string,
    field: string,
    index: number,
  ) => {
    switch (field) {
      case 'eng': {
        if (engAcadDetails.length === 5) {
          return;
        }
        const newAcadDetails = [...engAcadDetails];
        // @ts-ignore
        newAcadDetails[index][value] = event.target.value;
        setEngAcadDetails(newAcadDetails);
        break;
      }
      case 'me': {
        const newAcadDetails = [...meAcadDetails];
        // @ts-ignore
        newAcadDetails[index][value] = event.target.value;
        setMeAcadDetails(newAcadDetails);
        break;
      }
      default: {
        const newAcadDetails = [...diplomaAcadDetails];
        // @ts-ignore
        newAcadDetails[index][value] = event.target.value;
        setDiplomaAcadDetails(newAcadDetails);
      }
    }
  };

  return (
    <>
      <DotsMobileStepper
        handleNext={handleNext}
        handleBack={handleBack}
        activeStep={activeStep}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Details submitted
        </Alert>
      </Snackbar>
      {activeStep === 2 && !isLoading && (
        <Button
          style={{
            position: 'absolute',
            top: '6rem',
            right: '1rem',
            backgroundColor: 'rgba(159, 28, 53, 1)',
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit Details
        </Button>
      )}
      {/* {isLoading && <CircularProgress />} */}
      {activeStep === 0 && (
      <Pstudent />
      )}
      {activeStep === 1 && (
        <>
          <ApplicableOptions
            didDiploma={didDiploma}
            setDidDiploma={setDidDiploma}
            didMe={didMe}
            setDidMe={setDidMe}
            didXII={didXII}
            setDidXII={setDidXII}
          />

          {/* Boards details */}
          <div
            style={{
              width: '75%',
              position: 'relative',
              bottom: '220px',
            }}
          >
            <Typography
              fontSize={24}
              style={{
                padding: '10px 0',
              }}
            >
              Boards academic details
            </Typography>
            {boardsAcadDetails.map((item: IBoardDetails, index: number) => (
              <BoardsForm
                handleChange={handleChangeBoards}
                index={index}
                details={item}
              />
            ))}
          </div>

          {/* optional diploma */}
          {didDiploma && (
          <div
            style={{
              position: 'relative',
              bottom: '200px',
              width: '75%',
              marginBottom: '20px',
            }}
          >
            <Typography
              fontSize={24}
              style={{
                padding: '10px 0',
              }}
            >
              Diploma academic details
            </Typography>
            {diplomaAcadDetails.map((item: IDegreeDetails, index: number) => (
              <DegreeForm
                field="diploma"
                index={index}
                details={item}
                handleChange={handleChangeDegree}
              />
            ))}
          </div>
          )}

          {/* be details */}
          <div
            style={{
              position: 'relative',
              bottom: '200px',
              width: '75%',
            }}
          >
            <Typography
              fontSize={24}
              style={{
                padding: '10px 0',
              }}
            >
              Degree academic details
            </Typography>
            {engAcadDetails.map((item: IDegreeDetails, index: number) => (
              <DegreeForm
                field="eng"
                index={index}
                details={item}
                handleChange={handleChangeDegree}
              />
            ))}
            <Button
              style={{
                position: 'absolute',
                right: '100px',
              }}
              onClick={() => handleAddAcad('eng')}
            >
              Add
            </Button>
            <Button
              style={{
                position: 'absolute',
                right: '0px',
              }}
              onClick={() => removeEngAcad('eng')}
            >
              Remove
            </Button>
          </div>

          {/* pg acad details */}
          {didMe && (
          <div
            style={{
              position: 'relative',
              bottom: '200px',
              width: '75%',
            }}
          >
            <Typography
              fontSize={24}
              style={{
                padding: '10px 0',
                marginTop: '20px',
              }}
            >
              PG academic details
            </Typography>
            {meAcadDetails.map((item: IDegreeDetails, index: number) => (
              <DegreeForm
                field="me"
                index={index}
                details={item}
                handleChange={handleChangeDegree}
              />
            ))}
            <Button
              style={{
                position: 'absolute',
                right: '100px',
              }}
              onClick={() => handleAddAcad('me')}
            >
              Add
            </Button>
            <Button
              style={{
                position: 'absolute',
                right: '0px',
              }}
              onClick={() => removeEngAcad('me')}
            >
              Remove
            </Button>
          </div>
          )}
        </>
      )}
      {activeStep === 2 && (
        <AdditionaldetailsWrapper
          additionalDetails={additionalDetails}
          setAdditionalDetails={setAdditionalDetails}
        />
      )}
    </>
  );
}

export default AcademicdetailsWrapper;
