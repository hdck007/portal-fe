import { ConstructionOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { IBoardDetails } from '../../Interfaces/StudentDetails';
import BoardsForm from './BoardsForm/BoardsForm';

function AcademicdetailsWrapper() {
  const [engAcadDetails, setEngAcadDetails] = useState<any[]>([]);
  const [boardsAcadDetails, setBoardsAcadDetails] = useState<any[]>([]);
  const [didDiploma, setDidDiploma] = useState<boolean>(false);
  const [didMe, setDidMe] = useState<boolean>(false);

  useEffect(() => {
    // check if the details already exists from api

    // if no existing data create empty data
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

    console.log(valueBoards);
    setBoardsAcadDetails(valueBoards);
    setEngAcadDetails(value);
  }, []);

  return (
    <div>
      {boardsAcadDetails.map((item: IBoardDetails, index: number) => (
        <BoardsForm
          setBoardsAcadDetails={setBoardsAcadDetails}
          index={index}
          details={item}
        />
      ))}
    </div>
  );
}

export default AcademicdetailsWrapper;
