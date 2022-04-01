/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Accordion, AccordionDetails, AccordionSummary, styled, TextField, Typography,
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IBoardDetails } from '../../../Interfaces/StudentDetails';

interface IBoardsFormProps{
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    index: number) => void;
  index: number;
  details: IBoardDetails;
}

const BoardsRowWrapper = styled('div')(() => ({
  width: '60%',
  padding: '2px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

function BoardsForm({
  index,
  details,
  handleChange,
}: IBoardsFormProps) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <div>
      <Accordion
        expanded={expanded}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded((prev) => !prev)}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            fontSize={18}
            sx={{ width: '33%', flexShrink: 0 }}
          >
            {details.board}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BoardsRowWrapper>
            <Typography
              width="50%"
            >
              Select Board:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'board', index)}
              variant="standard"
              style={{
                width: '50%',
              }}
            />
          </BoardsRowWrapper>
          <BoardsRowWrapper>
            <Typography
              width="50%"
            >
              Completion Month:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'completionMonth', index)}
              variant="standard"
              style={{
                width: '50%',
              }}
            />
          </BoardsRowWrapper>
          <BoardsRowWrapper>
            <Typography
              width="50%"
            >
              Completion Year:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'completionYear', index)}
              variant="standard"
              style={{
                width: '50%',
              }}
            />
          </BoardsRowWrapper>
          <BoardsRowWrapper>
            <Typography
              width="50%"
            >
              Marks Obtained:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'marksObtained', index)}
              variant="standard"
              style={{
                width: '50%',
              }}
            />
          </BoardsRowWrapper>
          <BoardsRowWrapper>
            <Typography
              width="50%"
            >
              Total Marks:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'totalMarks', index)}
              variant="standard"
              style={{
                width: '50%',
              }}
            />
          </BoardsRowWrapper>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default BoardsForm;
