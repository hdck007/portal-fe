/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Alert, Button, Snackbar, Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
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
  const cookies = new Cookies();

  useEffect(() => {
    const value = new Array(6).fill(0).map((_, index) => ({
      semester: index + 1,
      completionMonth: null,
      completionYear: null,
      marks: null,
      totalMarks: null,
      cgpa: null,
    }));

    const valueBoards = new Array(2).fill(0).map((_, index) => ({
      board: index === 0 ? 'Class - X' : 'Class - XII',
      completionMonth: null,
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
          completionMonth: null,
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
          completionMonth: null,
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

  const getAcademicData = () => {
    const academiceData = new FormData();
    academiceData.append('roll_no', cookies.get('roll_no'));
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
    return academiceData;
  };

  const getExperienceData = () => {
    const experience = new FormData();
    experience.append('roll_no', cookies.get('roll_no'));
    experience.append('project_one', additionalDetails[7].value);
    experience.append('project_two', additionalDetails[8].value);
    experience.append('project_three', additionalDetails[9].value);
    experience.append('internship_one', additionalDetails[10].value);
    experience.append('internship_two', additionalDetails[11].value);
    experience.append('internship_three', additionalDetails[12].value);
    experience.append('pref_lang', additionalDetails[13].value);
    experience.append('technologies', additionalDetails[14].value);
    return experience;
  };

  const getHobbiesData = () => {
    const hobbies = new FormData();
    hobbies.append('roll_no', cookies.get('roll_no'));
    hobbies.append('hobbies', additionalDetails[15].value);
    return hobbies;
  };

  const getAchievementsData = () => {
    const skillAndObj = new FormData();
    skillAndObj.append('roll_no', cookies.get('roll_no'));
    skillAndObj.append('career_obj', additionalDetails[0].value);
    skillAndObj.append('acad_achievement_one', additionalDetails[1].value);
    skillAndObj.append('acad_achievement_two', additionalDetails[2].value);
    skillAndObj.append('acad_achievement_three', additionalDetails[3].value);
    skillAndObj.append('certificate_one', additionalDetails[4].value);
    skillAndObj.append('certificate_two', additionalDetails[5].value);
    skillAndObj.append('certificate_three', additionalDetails[6].value);
    return skillAndObj;
  };

  const addAcademicDetails = (academiceData: any, access: any) => new Promise((resolve, reject) => {
    fetch('https://django-tpc.herokuapp.com/addAcademicInfo/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access}`,
      },
      body: academiceData,
    }).then((res) => {
      if (res.status >= 200 && res.status < 400) {
        resolve('Fullfilled');
      } else {
        reject();
      }
    });
  });

  const addExperienceDetails = async (experience: any, access: any) => new Promise((resolve, reject) => {
    fetch('https://django-tpc.herokuapp.com/addExperience/', {
      method: 'POST',
      body: experience,
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 400) {
        resolve('Fullfilled');
      } else {
        reject();
      }
    });
  });

  const addHobbiesDetails = async (hobbies: any, access: any) => new Promise((resolve, reject) => {
    fetch('https://django-tpc.herokuapp.com/addOtherInfo/', {
      method: 'POST',
      body: hobbies,
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 400) {
        resolve('Fullfilled');
      } else {
        reject();
      }
    });
  });

  const addAchievementsDetails = async (
    skillAndObj: any,
    access: any,
  ) => new Promise((resolve, reject) => {
    fetch('https://django-tpc.herokuapp.com/addSkillSet/', {
      method: 'POST',
      body: skillAndObj,
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 400) {
        resolve('Fullfilled');
      } else {
        reject();
      }
    });
  });

  const handleSubmit = () => {
    if (validate()) {
      const access = cookies.get('access');

      const apiCalls = [addAcademicDetails(getAcademicData(), access),
        addExperienceDetails(getExperienceData(), access),
        addHobbiesDetails(getHobbiesData(), access),
        addAchievementsDetails(getAchievementsData(), access)];

      console.log(apiCalls);

      Promise.allSettled(apiCalls).then((response) => {
        response.forEach((value) => {
          if (value.status === 'rejected') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields',
      });
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
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
      {activeStep === 2 && (
        <Button
          style={{
            position: 'absolute',
            top: '6rem',
            right: '4rem',
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
