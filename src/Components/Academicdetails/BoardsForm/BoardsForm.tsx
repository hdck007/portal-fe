import {
  Accordion, AccordionDetails, AccordionSummary, styled, TextField, Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IBoardDetails } from '../../../Interfaces/StudentDetails';

interface IBoardsFormProps{
  setBoardsAcadDetails: React.Dispatch<any>;
  index: number;
  details: IBoardDetails;
}

const BoardsRowWrapper = styled('div')(({ theme }) => ({
  width: '60%',
  padding: '2px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

function BoardsForm({
  setBoardsAcadDetails,
  index,
  details,
}: IBoardsFormProps) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <div>
      <Accordion
        expanded={expanded}
        style={{
          width: '1000px',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded((prev) => !prev)}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            fontSize={20}
            fontWeight={700}
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
