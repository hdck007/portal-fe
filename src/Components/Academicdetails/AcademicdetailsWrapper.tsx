/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { IBoardDetails, IDegreeDetails } from '../../Interfaces/StudentDetails';
import ApplicableOptions from './ApplicableOptions/ApplicableOptions';
import BoardsForm from './BoardsForm/BoardsForm';
import DegreeForm from './DegreeForms/DegreeForm';

function AcademicdetailsWrapper() {
  const [engAcadDetails, setEngAcadDetails] = useState<IDegreeDetails[]>([]);
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

  const handleChangeDegree = (
    event: Event,
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
            setBoardsAcadDetails={setBoardsAcadDetails}
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
              setBoardsAcadDetails={setBoardsAcadDetails}
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
            setBoardsAcadDetails={setBoardsAcadDetails}
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
              setBoardsAcadDetails={setBoardsAcadDetails}
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
  );
}

export default AcademicdetailsWrapper;
